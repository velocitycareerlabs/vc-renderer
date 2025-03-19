import { Credential } from './Credential';
import { DisplayDescriptors } from './DisplayDescriptors';
import { Dictionary } from './Dictionary';

export type VcsMapToDescriptorsProps = {
  vcs: Credential[];
  descriptors: DisplayDescriptors;
  issuers: Dictionary<any>;
  locale?: string;
};
