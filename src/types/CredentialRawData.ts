import { Credential } from './Credential';
import { DisplayDescriptor } from './DisplayDescriptor';
import { Issuer } from './Issuer';

export type CredentialRawData = {
  credential: Credential;
  descriptor: DisplayDescriptor;
  issuer: Issuer;
};
