import React from 'react';
import { VcData } from './VcData';
import { VcStatusEnum } from './VcStatusEnum';
import { Dictionary } from './Dictionary';

export type VcDetailsRendererProps = {
  vcData: VcData;
  vcStatus?: VcStatusEnum;
  categoryTitle?: string;
  locale?: string;
  style?: Dictionary<any>;
  Footer?: React.FC;
  Sidebar?: React.FC;
  onClose?: () => void;
};
