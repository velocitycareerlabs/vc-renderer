import React from 'react';
import { StatusBox } from './styles';
import { Check, Replaced, Revoked, Expired } from '../../../assets/svg';
import { VcStatusEnum } from '../../../types';

const iconsMap = {
  [VcStatusEnum.OFFERED]: <Check />,
  [VcStatusEnum.REPLACED]: <Replaced />,
  [VcStatusEnum.REVOKED]: <Revoked />,
  [VcStatusEnum.VERIFIED]: <Check />,
  [VcStatusEnum.EXPIRED]: <Expired />,
  [VcStatusEnum.FAILED]: <Expired />,
  [VcStatusEnum.DELETED]: null,
  [VcStatusEnum.SELF_REPORTED]: null,
};

type CredentialStatusType = {
  status: VcStatusEnum;
  isDetails?: boolean;
};

export const CredentialStatus: React.FC<CredentialStatusType> = ({ status, isDetails }) => {
  return (
    <StatusBox status={status} data-testid={status} isDetails={isDetails}>
      {iconsMap[status]} <span>{status}</span>
    </StatusBox>
  );
};
