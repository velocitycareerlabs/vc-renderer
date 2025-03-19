import { get } from 'lodash-es';

import { credentialValueFromJSONPath } from './credentialValueFromJSONPath';
import { getLocale } from './dates';
import { Issuer, CredentialSummary, DisplayDescriptor, Credential } from '../types';

export const buildCredentialsSummary = (
  credential: Credential,
  displayDescriptor: DisplayDescriptor,
  issuer: Issuer | null,
  localeSelected?: string,
): CredentialSummary => {
  const locale = localeSelected || getLocale();

  const issuerPrepared = issuer?.name
    ? issuer
    : { name: credential.issuer.id, id: credential.issuer.id, logo: '' };

  const credentialWithIssuer = {
    ...credential,
    hasCredential: {
      ...(credential.hasCredential || credential.credentialSubject.hasCredential),
      issuer: issuerPrepared,
    },
  };

  const logoFromCredential = credentialValueFromJSONPath(
    displayDescriptor,
    credentialWithIssuer,
    locale,
    'logo',
  ).value;

  return {
    title: credentialValueFromJSONPath(displayDescriptor, credentialWithIssuer, locale, 'title')
      .value,
    subTitle: credentialValueFromJSONPath(
      displayDescriptor,
      credentialWithIssuer,
      locale,
      'subtitle',
    ).value,
    summaryDetail: credentialValueFromJSONPath(
      displayDescriptor,
      credentialWithIssuer,
      locale,
      'summary_detail',
    ).value,
    logo:
      logoFromCredential === '-' || !logoFromCredential
        ? get(issuerPrepared, 'logo')
        : logoFromCredential,
    issuerLogo: get(issuerPrepared, 'logo'),
    issuerName: get(issuerPrepared, 'name'),
    id: credential.id,
    did: credential.did,
    credential,
    type: credential.type!,
  };
};
