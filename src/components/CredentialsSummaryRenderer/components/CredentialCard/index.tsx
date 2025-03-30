import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { CredentialStatus } from '../../../common/CredentialStatus';
import { Check } from '../../../../assets/svg';
import { CredentialStatusEnum } from '../../../../types';
import {
  ActionContainer,
  CheckIconBox,
  CheckIconContent,
  Container,
  Content,
  Description,
  // IconBox,
  Logo,
  NewCredentialStatusBox,
  SubTitle,
  TitleBox,
  TopBox,
  FooterBox,
} from './styles';

export const CredentialCard = ({
  id,
  logo,
  title,
  subtitle,
  description,
  status,
  selected = false,
  onClick,
  onSelect = () => {},
  isShort,
  showTickElement = true,
  Footer,
  style,
  isNewCredential = false,
}: {
  id: string;
  logo?: string;
  title: string;
  subtitle: string;
  description?: string;
  status?: CredentialStatusEnum;
  selected?: boolean;
  onClick: (id?: string) => void;
  onSelect?: (id?: string) => void;
  isShort?: boolean;
  showTickElement?: boolean;
  Footer?: React.FC<{ credentialId: string }>;
  style?: React.CSSProperties;
  isNewCredential?: boolean;
}) => {
  const tickElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tickElement.current?.addEventListener('mouseenter', () =>
      tickElement.current?.classList.add('hovered'),
    );
    tickElement.current?.addEventListener('mouseleave', () =>
      tickElement.current?.classList.remove('hovered'),
    );
  }, []);

  const onClickCallback = () => {
    // wait for ripple effect to finish
    window.setTimeout(() => {
      onClick(id);
    }, 150);
  };
  const onSelectCallback = () => onSelect(id);

  return (
    <Container selected={selected} style={style}>
      <ActionContainer
        onClick={onClickCallback}
        selected={selected}
        aria-label={`Credential ${subtitle} ${title}`}
        aria-describedby="Click to view credential details"
        data-testid="credential-card"
      >
        <TopBox>
          {logo && !isShort ? <Logo src={logo} /> : null}
          <Box display="flex">
            <NewCredentialStatusBox isVisible={isNewCredential} />
            {status && <CredentialStatus status={status} />}
          </Box>
        </TopBox>
        <Content>
          <TitleBox>
            <Typography variant="pMBold">{title}</Typography>
            <SubTitle variant="pS">{subtitle}</SubTitle>
            {isShort ? null : <Description variant="pS">{description}</Description>}
          </TitleBox>
        </Content>

        {Footer && (
          <FooterBox>
            <Footer credentialId={id} />
          </FooterBox>
        )}
      </ActionContainer>
      {showTickElement && (
        <CheckIconBox
          selected={selected}
          role="checkbox"
          aria-checked={selected}
          aria-label="Credential Item Select"
          aria-roledescription={`${selected ? 'Unselect' : 'Select'} ${title} credential`}
          onClick={onSelectCallback}
        >
          <CheckIconContent selected={selected} ref={tickElement}>
            {selected && <Check />}
          </CheckIconContent>
        </CheckIconBox>
      )}
    </Container>
  );
};
