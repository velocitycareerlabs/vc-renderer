import { CredentialSummary } from './CredentialSummary';
import { CredentialDetailsItem } from './CredentialDetailsItem';

export type VcPrepared = {
  summary: CredentialSummary;
  details?: CredentialDetailsItem[];
};
