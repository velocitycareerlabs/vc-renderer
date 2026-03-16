import React from 'react';
import { CredentialData } from './CredentialData';
import { CredentialStatusEnum } from './CredentialStatusEnum';
import type { Styles } from './Styles';

export type CredentialDetailsRendererProps = {
  credentialData: CredentialData;
  credentialStatus?: CredentialStatusEnum;
  categoryTitle?: string;
  locale?: string;
  style?: Styles;
  Footer?: React.FC;
  Sidebar?: React.FC;
  onClose?: () => void;
};
