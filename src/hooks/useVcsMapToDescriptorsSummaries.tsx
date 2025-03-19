import { useCallback } from 'react';
import { buildCredentialsSummary } from '../utils/buildCredentialsSummary';
import { VcsMapToDescriptorsSummaries, CredentialSummary } from '../types';

/**
 * Renders credential summary cards
 * @param {Credential[]} vcs - expects raw credentials array
 * @param {DisplayDescriptors} descriptors - expects display-descriptor objects array.
 * Its is an application resposobility to provide all nessary descriptors
 * @param {Issuers} issuers - object with issuers data where key is an issuer did and value is issuer object
 * @param {string} locale - locale string. Default is 'en-US'
 * @returns {CredentialSummary[]} - array of CredentialSummary objects
 */

export const useVcsMapToDescriptorsSummaries = () => {
  return useCallback<VcsMapToDescriptorsSummaries>(
    (vcs, descriptors, issuers, locale): CredentialSummary[] => {
      return vcs.map((credential) => {
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
    },
    [],
  );
};
