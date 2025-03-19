import { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { FieldList } from './components/FieldList';
import { useTrackScrollToChangeBottomGradientVisibility } from './hooks/useTrackScrollToChangeBottomGradientVisibility';
import { CredentialStatus } from '../common/CredentialStatus';
import { CredentialCategory } from '../common/CredentialCategory';
import { Attachments } from '../common/Attachments';
import { Issuer } from './components/Issuer';
import { theme } from '../../theme';
import { useVcMapToDescriptorDetails } from '../../hooks';
import { CloseWhite } from '../../assets/svg';
import { VcDetailsRendererProps, VcRawData, VcPrepared, VcStatusEnum } from '../../types';
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
 * @param {VcData} vcData - expects or raw data object with vc, descriptor and issuer keys or prepered data object with vcPrepared key
 * @param {CredentialStatus} vcsStatus - object where key is vc id and value is vc status
 * @param {string} categoryTitle -vc category title
 * @param {string} locale - locale string
 * @param {Styles} style - object with styles
 * @param {React.FC} Footer - card Footer component, for example share button
 * @param {React.FC} Sidebar - card Sidebar component, for example vc verification info
 * @param {function} onClose - function to close the modal
 * @returns - React.FC
 */

export const VcDetailsRenderer = ({
  vcData,
  vcStatus = VcStatusEnum.VERIFIED,
  categoryTitle,
  locale = 'en-US',
  style,
  Footer,
  Sidebar,
  onClose,
}: VcDetailsRendererProps) => {
  const [vcPrepared, setvcPrepared] = useState<VcPrepared>();

  const scrollableCredentialContainerRef = useRef<HTMLDivElement>(null);
  const mapToDescriptorsDetails = useVcMapToDescriptorDetails();
  const { checkIfScrollReachedTheEnd, isScrollReachedTheEnd } =
    useTrackScrollToChangeBottomGradientVisibility(!!vcPrepared, scrollableCredentialContainerRef);

  useEffect(() => {
    if ('vcPrepared' in vcData) {
      setvcPrepared(vcData.vcPrepared);
    } else {
      const vcRawData = vcData as VcRawData;
      const credential = mapToDescriptorsDetails(
        vcRawData.vc,
        vcRawData.descriptor,
        vcRawData.issuer,
        locale,
      );
      setvcPrepared(credential);
    }
  }, [locale, mapToDescriptorsDetails, vcData]);

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
                issuerName={vcPrepared?.summary.issuerName}
                issuerLogo={vcPrepared?.summary.issuerLogo}
              />
              <img id="logoBig" src={vcPrepared?.summary.logo} alt={vcPrepared?.summary.title} />
              <TagsContainer>
                <CredentialCategory category={categoryTitle || 'Career Credential'} />
                <CredentialStatus isDetails status={vcStatus || VcStatusEnum.VERIFIED} />
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
                  <Title variant="h2">{vcPrepared?.summary.title}</Title>
                  {vcPrepared?.summary.subTitle && (
                    <SubTitle variant="h4">{vcPrepared?.summary.subTitle}</SubTitle>
                  )}
                  {vcPrepared?.summary.summaryDetail && (
                    <Description variant="pS">{vcPrepared?.summary.summaryDetail}</Description>
                  )}
                </Summary>
                {!!vcPrepared?.details?.length && (
                  <DetailFields id="vcDetailsFields">
                    <FieldList fields={vcPrepared.details} aria-label="credential-details" />
                    <Attachments vcPrepared={vcPrepared} />
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
