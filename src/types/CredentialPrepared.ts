import { CredentialSummary } from './CredentialSummary';
import { CredentialDetailsItem } from './CredentialDetailsItem';

export type CredentialPrepared = {
  summary: CredentialSummary;
  details?: CredentialDetailsItem[];
};
