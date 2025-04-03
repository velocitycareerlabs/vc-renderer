import { useCallback } from 'react';
import { buildCredentialsSummary } from '../utils/buildCredentialsSummary';
import {
  PrepareCredentialSummary,
  CredentialSummary,
  DisplayDescriptors,
  Issuers,
  Credential,
} from '../types';

/**
 * Renders credential summary cards
 * @param {Credential[]} credentials - expects raw credentials array
 * @param {DisplayDescriptors} descriptors - expects display-descriptor objects array.
 * Its is an application resposobility to provide all nessary descriptors
 * @param {Issuers} issuers - object with issuers data where key is an issuer did and value is issuer object
 * @param {string} locale - locale string. Default is 'en-US'
 * @returns {CredentialSummary[]} - array of CredentialSummary objects
 */

const prepareCredentialSummary: PrepareCredentialSummary = (
  credentials: Credential[],
  descriptors: DisplayDescriptors,
  issuers: Issuers,
  locale?: string,
): CredentialSummary[] => {
  return credentials.map((credential) => {
    const type = credential.type[0];
    const descriptor = descriptors[type];
    const issuer = issuers[credential.issuer.id];

    if (!descriptor) {
      return {
        title: credential.type[0],
        subTitle: credential.did || credential.id,
        summaryDetail: credential.createdAt,
        logo: '',
        issuerLogo: issuer?.logo || '',
        issuerName: issuer?.name || credential.issuer.id,
        id: credential.id,
        did: credential.did,
        credential,
        type: credential.type,
      };
    }
    return buildCredentialsSummary(credential, descriptor, issuer, locale);
  });
};

/**
 * @param {string} locale - locale string. Default is 'en-US'
 */
export const usePrepareCredentialSummary = (locale?: string) => {
  return useCallback<PrepareCredentialSummary>(
    (credentials, descriptors, issuers) => {
      return prepareCredentialSummary(credentials, descriptors, issuers, locale);
    },
    [locale],
  );
};
