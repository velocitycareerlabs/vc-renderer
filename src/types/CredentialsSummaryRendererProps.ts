import React, { ReactNode } from 'react';
import { CredentialsStatus } from './CredentialStatus';
import { CredentialsData } from './CredentialsData';
import { Dictionary } from './Dictionary';

export type CredentialsSummaryRendererProps = {
  credentialsData: CredentialsData;
  credentialsStatus: CredentialsStatus;
  rightIcon?: ReactNode;
  locale?: string;
  style?: Dictionary<any>;
  Footer?: React.FC<{ credentialId: string }>;
  isSelectable?: boolean;
  onClick: (id?: string) => void;
  onSelect?: (id?: string) => void;
  credentialsSelected?: Dictionary<boolean>;
  recentlyAddedCredentials?: Dictionary<boolean>;
};
