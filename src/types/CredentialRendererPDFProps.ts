import React from 'react';
import { CredentialsData } from './CredentialsData';
import { CredentialStatusEnum } from './CredentialStatusEnum';
import { Dictionary } from './Dictionary';

export type CredentialRendererPDFProps = {
  credentialsData: CredentialsData;
  credentialsStatus: Dictionary<CredentialStatusEnum>;
  categoriesTitle: Dictionary<string>;
  style?: Dictionary<any>;
  sidebarItems?: Dictionary<Array<React.ReactNode>>;
  locale?: string;
  applicantName: string;
  userName: string;
  appLogo: string;
  imageProxyUrl?: string;
};
