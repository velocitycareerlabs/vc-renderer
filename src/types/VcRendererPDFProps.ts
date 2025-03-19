import React from 'react';
import { VcsData } from './VcsData';
import { VcStatusEnum } from './VcStatusEnum';
import { Dictionary } from './Dictionary';

export type VcRendererPDFProps = {
  vcsData: VcsData;
  vcsStatus: Dictionary<VcStatusEnum>;
  categoriesTitle: Dictionary<string>;
  style?: Dictionary<any>;
  sidebarItems?: Dictionary<Array<React.ReactNode>>;
  locale?: string;
  applicantName: string;
  userName: string;
  appLogo: string;
};
