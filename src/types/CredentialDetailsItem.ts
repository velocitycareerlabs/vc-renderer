import { Dictionary } from './Dictionary';

export type CredentialDetailsItem = {
  isImgLink?: boolean;
  label?: string;
  schema?: Dictionary<any>;
  value?: string;
  index?: number;
  parent?: string;
};
