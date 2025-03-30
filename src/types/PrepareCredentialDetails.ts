import { CredentialPrepared } from './CredentialPrepared';
import { Credential } from './Credential';
import { DisplayDescriptor } from './DisplayDescriptor';
import { Issuer } from './Issuer';

export type PrepareCredentialDetails = (
  vc: Credential,
  descriptor: DisplayDescriptor,
  issuer: Issuer,
  locale: string,
) => CredentialPrepared;
