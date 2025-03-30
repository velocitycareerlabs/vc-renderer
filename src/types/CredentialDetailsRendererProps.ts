import React from 'react';
import { CredentialData } from './CredentialData';
import { CredentialStatusEnum } from './CredentialStatusEnum';
import { Dictionary } from './Dictionary';

export type CredentialDetailsRendererProps = {
  credentialData: CredentialData;
  credentialStatus?: CredentialStatusEnum;
  categoryTitle?: string;
  locale?: string;
  style?: Dictionary<any>;
  Footer?: React.FC;
  Sidebar?: React.FC;
  onClose?: () => void;
};
