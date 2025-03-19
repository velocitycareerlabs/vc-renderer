import React, { ReactNode } from 'react';
import { VcsStatus } from './VcsStatus';
import { VcsData } from './VcsData';
import { Dictionary } from './Dictionary';

export type VcsSummaryRendererProps = {
  vcsData: VcsData;
  vcsStatus: VcsStatus;
  rightIcon?: ReactNode;
  locale?: string;
  style?: Dictionary<any>;
  Footer?: React.FC<{ credentialId: string }>;
  isSelectable?: boolean;
  onClick: (id?: string) => void;
  onSelect?: (id?: string) => void;
  vcsSelected?: Dictionary<boolean>;
  vcsRecentlyAdded?: Dictionary<boolean>;
};
