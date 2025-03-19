import { Credential } from './Credential';
import { DisplayDescriptors } from './DisplayDescriptors';
import { Dictionary } from './Dictionary';

export type VcsRawData = {
  vcs: Credential[];
  descriptors: DisplayDescriptors;
  issuers: Dictionary<any>;
};
