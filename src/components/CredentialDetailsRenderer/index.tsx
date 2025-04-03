import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { FieldList } from './components/FieldList';
import { useTrackScrollToChangeBottomGradientVisibility } from './hooks/useTrackScrollToChangeBottomGradientVisibility';
import { CredentialStatus } from '../common/CredentialStatus';
import { CredentialCategory } from '../common/CredentialCategory';
import { Attachments } from '../common/Attachments';
import { Issuer } from './components/Issuer';
import { theme } from '../../theme';
import { usePrepareCredentialDetails } from '../../hooks';
import { setFallbackImage } from '../../utils/images';
import { CloseWhite } from '../../assets/svg';
import { CredentialDetailsRendererProps, CredentialRawData, CredentialPrepared } from '../../types';
import {
  Content,
  BottomGradient,
  IconsBlock,
  CloseIcon,
  Title,
  SubTitle,
  Description,
  DetailFields,
  Summary,
  HeaderContent,
  ModalHeader,
  ScrollableContent,
  TagsContainer,
  ModalContent,
  ContentContainer,
  SideBarContainer,
} from './styles';

/**
 * Renders credential details cards
 * @param {CredentialData} credentialData - expects or raw data object with vc, descriptor and issuer keys or
 * prepered data object with credentialPrepared key
 * @param {CredentialStatus} credentialsStatus - object where key is vc id and value is vc status
 * @param {string} categoryTitle -vc category title
 * @param {string} locale - locale string
 * @param {Styles} style - object with styles
 * @param {React.FC} Footer - card Footer component, for example share button
 * @param {React.FC} Sidebar - card Sidebar component, for example vc verification info
 * @param {function} onClose - function to close the modal
 * @returns - React.FC
 */

export const CredentialDetailsRenderer: React.FC<CredentialDetailsRendererProps> = ({
  credentialData,
  credentialStatus,
  categoryTitle,
  locale = 'en-US',
  style,
  Footer,
  Sidebar,
  onClose,
}: CredentialDetailsRendererProps) => {
  const [credentialPrepared, setCredentialPrepared] = useState<CredentialPrepared>();

  const scrollableCredentialContainerRef = useRef<HTMLDivElement>(null);
  const mapToDescriptorsDetails = usePrepareCredentialDetails(locale);
  const { checkIfScrollReachedTheEnd, isScrollReachedTheEnd } =
    useTrackScrollToChangeBottomGradientVisibility(
      !!credentialPrepared,
      scrollableCredentialContainerRef,
    );

  useEffect(() => {
    if ('credentialPrepared' in credentialData) {
      setCredentialPrepared(credentialData.credentialPrepared);
    } else {
      const vcRawData = credentialData as CredentialRawData;
      const credential = mapToDescriptorsDetails(
        vcRawData.vc,
        vcRawData.descriptor,
        vcRawData.issuer,
        locale,
      );
      setCredentialPrepared(credential);
    }
  }, [locale, mapToDescriptorsDetails, credentialData]);

  return (
    <ThemeProvider theme={theme}>
      <Content hasScrollBar style={style}>
        <>
          <ModalHeader id="vcDetailsHeader">
            <IconsBlock>
              {onClose && (
                <CloseIcon onClick={onClose} role="button" aria-label="close">
                  <CloseWhite />
                </CloseIcon>
              )}
            </IconsBlock>
            <HeaderContent id="vcDetailsHeader">
              <Issuer
                issuerName={credentialPrepared?.summary.issuerName}
                issuerLogo={credentialPrepared?.summary.issuerLogo}
              />
              <img
                id="logoBig"
                src={credentialPrepared?.summary.logo}
                alt={credentialPrepared?.summary.title}
                onError={setFallbackImage}
              />
              <TagsContainer>
                <CredentialCategory category={categoryTitle || 'Career Credential'} />
                {credentialStatus && <CredentialStatus isDetails status={credentialStatus} />}
              </TagsContainer>
            </HeaderContent>
          </ModalHeader>
          <ScrollableContent
            hasScrollBar
            ref={scrollableCredentialContainerRef}
            onScroll={checkIfScrollReachedTheEnd}
          >
            <ContentContainer>
              <ModalContent id="vcDetailsContent">
                <Summary id="vcDetailsSummary">
                  <Title variant="h2">{credentialPrepared?.summary.title}</Title>
                  {credentialPrepared?.summary.subTitle && (
                    <SubTitle variant="h4">{credentialPrepared?.summary.subTitle}</SubTitle>
                  )}
                  {credentialPrepared?.summary.summaryDetail && (
                    <Description variant="pS">
                      {credentialPrepared?.summary.summaryDetail}
                    </Description>
                  )}
                </Summary>
                {!!credentialPrepared?.details?.length && (
                  <DetailFields id="vcDetailsFields">
                    <FieldList
                      fields={credentialPrepared.details}
                      aria-label="credential-details"
                    />
                    <Attachments credentialPrepared={credentialPrepared} />
                  </DetailFields>
                )}
              </ModalContent>

              {Footer && <Footer />}
            </ContentContainer>
            {Sidebar && (
              <SideBarContainer>
                <Sidebar />
              </SideBarContainer>
            )}
          </ScrollableContent>
          <BottomGradient display={!isScrollReachedTheEnd ? 'block' : 'none'} />
        </>
      </Content>
    </ThemeProvider>
  );
};
