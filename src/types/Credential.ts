import { Dictionary } from './Dictionary';

export type Credential = {
  credentialSubject: Dictionary<any>;
  did?: string;
  id: string;
  type: string[];
  [key: string]: any;
};
