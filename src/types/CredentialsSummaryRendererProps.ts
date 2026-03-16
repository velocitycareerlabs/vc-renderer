import React, { ReactNode } from 'react';
import { CredentialsStatus } from './CredentialsStatus';
import { CredentialsData } from './CredentialsData';
import { Dictionary } from './Dictionary';
import type { Styles } from './Styles';

export type CredentialsSummaryRendererProps = {
  credentialsData: CredentialsData;
  credentialsStatus: CredentialsStatus;
  rightIcon?: ReactNode;
  locale?: string;
  style?: Styles;
  Footer?: React.FC<{ credentialId: string }>;
  isSelectable?: boolean;
  onClick: (id?: string) => void;
  onSelect?: (id?: string) => void;
  credentialsSelected?: Dictionary<boolean>;
  recentlyAddedCredentials?: Dictionary<boolean>;
};
