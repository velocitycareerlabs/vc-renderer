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
 * @param {Credential} vc - expects raw credentials array
 * @param {DisplayDescriptor} descriptor - expects display-descriptor objects array
 * @param {Issuer} issuer - issuer data
 * @param {string}  [locale='en-US']  - locale string. Default is 'en-US'
 * @returns {CredentialPrepared} - object with summary and details keys
 */
const prepareCredentialDetails: PrepareCredentialDetails = (
  vc: Credential,
  descriptor: DisplayDescriptor,
  issuer: Issuer,
  locale: string = 'en-US',
): CredentialPrepared => {
  let vcIssuer: Issuer | null = null;

  if (issuer?.id === vc.issuer.id) {
    vcIssuer = issuer;
  } else if (issuer?.alsoKnownAs?.includes(vc.issuer.id)) {
    vcIssuer = issuer;
  }

  return {
    details: buildCredentialDetails(vc, descriptor, locale),
    summary: buildCredentialsSummary(vc, descriptor, vcIssuer, locale),
  };
};
/**
 * @param {string} [locale='en-US'] - locale string. Default is 'en-US'
 */
export const usePrepareCredentialDetails = (locale: string = 'en-US') => {
  return useCallback<PrepareCredentialDetails>(
    (vc, descriptor, issuer) => prepareCredentialDetails(vc, descriptor, issuer, locale),
    [locale],
  );
};
