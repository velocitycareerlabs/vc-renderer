import { get } from 'lodash-es';
import { Issuer, CredentialSummary, DisplayDescriptor, Credential } from '../types';
import { credentialValueFromJSONPath } from './credentialValueFromJSONPath';
import { getLocale } from './dates';

// eslint-disable-next-line complexity
export const buildCredentialsSummary = (
  credential: Credential,
  displayDescriptor: DisplayDescriptor,
  issuer: Issuer | null,
  localeSelected?: string,
): CredentialSummary => {
  const locale = localeSelected || getLocale();

  const issuerPrepared = issuer?.name
    ? issuer
    : {
        name: credential.issuer.id,
        id: credential.issuer.id,
        logo: '',
      };

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

  const brandLogoFromCredential = credential.issuer?.image;
  const brandNameFromCredential = credential.issuer?.name;

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
        ? brandLogoFromCredential || get(issuerPrepared, 'logo')
        : logoFromCredential,
    issuerLogo: brandLogoFromCredential || get(issuerPrepared, 'logo'),
    issuerName: brandNameFromCredential || get(issuerPrepared, 'name'),
    id: credential.id,
    did: credential.did,
    credential,
    type: credential.type!,
  };
};
