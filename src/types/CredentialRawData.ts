import { Credential } from './Credential';
import { DisplayDescriptor } from './DisplayDescriptor';
import { Issuer } from './Issuer';

export type CredentialRawData = {
  vc: Credential;
  descriptor: DisplayDescriptor;
  issuer: Issuer;
};
