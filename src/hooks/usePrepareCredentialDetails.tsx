import { useCallback } from 'react';
import { buildCredentialsSummary } from '../utils/buildCredentialsSummary';
import { buildCredentialDetails } from '../utils/buildCredentialDetails';
import {
  PrepareCredentialDetails,
  Issuer,
  Credential,
  DisplayDescriptor,
  CredentialPrepared,
} from '../types';

/**
 * Renders credential details card
 * @param {Credential} credential - expects raw credentials array
 * @param {DisplayDescriptor} descriptor - expects display-descriptor objects array
 * @param {Issuer} issuer - issuer data
 * @param {string}  [locale='en-US']  - locale string. Default is 'en-US'
 * @returns {CredentialPrepared} - object with summary and details keys
 */
const prepareCredentialDetails: PrepareCredentialDetails = (
  credential: Credential,
  descriptor: DisplayDescriptor,
  issuer: Issuer,
  locale: string = 'en-US',
  // eslint-disable-next-line complexity
): CredentialPrepared => {
  let vcIssuer: Issuer | null = null;

  if (issuer?.id === credential.issuer.id) {
    vcIssuer = issuer;
  } else if (issuer?.alsoKnownAs?.includes(credential.issuer.id)) {
    vcIssuer = issuer;
  }

  return {
    details: buildCredentialDetails(credential, descriptor, locale),
    summary: buildCredentialsSummary(credential, descriptor, vcIssuer, locale),
  };
};
/**
 * @param {string} [locale='en-US'] - locale string. Default is 'en-US'
 */
export const usePrepareCredentialDetails = (locale: string = 'en-US') =>
  useCallback<PrepareCredentialDetails>(
    (credential, descriptor, issuer) =>
      prepareCredentialDetails(credential, descriptor, issuer, locale),
    [locale],
  );
