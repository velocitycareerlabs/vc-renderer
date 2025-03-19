import { Credential } from './Credential';
import { DisplayDescriptor } from './DisplayDescriptor';
import { Issuer } from './Issuer';

export type VcRawData = {
  vc: Credential;
  descriptor: DisplayDescriptor;
  issuer: Issuer;
};
