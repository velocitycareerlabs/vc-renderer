import { VcPrepared } from './VcPrepared';
import { Credential } from './Credential';
import { DisplayDescriptor } from './DisplayDescriptor';
import { Issuer } from './Issuer';

export type VcMapToDescriptorDetails = (
  vc: Credential,
  descriptor: DisplayDescriptor,
  issuer: Issuer,
  locale: string,
) => VcPrepared;
