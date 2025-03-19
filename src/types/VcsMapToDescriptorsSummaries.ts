import { DisplayDescriptors } from './DisplayDescriptors';
import { Issuers } from './Issuers';
import { CredentialSummary } from './CredentialSummary';
import { Credential } from './Credential';

export type VcsMapToDescriptorsSummaries = (
  vcs: Credential[],
  descriptors: DisplayDescriptors,
  issuers: Issuers,
  locale?: string,
) => CredentialSummary[];
