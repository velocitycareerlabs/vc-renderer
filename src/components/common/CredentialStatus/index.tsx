import React from 'react';
import { Check, Replaced, Revoked, Expired } from '../../../assets/svg';
import { CredentialStatusEnum } from '../../../types';
import { StatusBox } from './styles';

const iconsMap = {
  [CredentialStatusEnum.OFFERED]: <Check />,
  [CredentialStatusEnum.REPLACED]: <Replaced />,
  [CredentialStatusEnum.REVOKED]: <Revoked />,
  [CredentialStatusEnum.VERIFIED]: <Check />,
  [CredentialStatusEnum.EXPIRED]: <Expired />,
  [CredentialStatusEnum.FAILED]: <Expired />,
  [CredentialStatusEnum.DELETED]: null,
  [CredentialStatusEnum.SELF_REPORTED]: null,
};

type CredentialStatusType = {
  status: CredentialStatusEnum;
  isDetails?: boolean;
};

export const CredentialStatus: React.FC<CredentialStatusType> = ({ status, isDetails }) => (
  <StatusBox status={status} data-testid={status} isDetails={isDetails}>
    {iconsMap[status]} <span>{status}</span>
  </StatusBox>
);
