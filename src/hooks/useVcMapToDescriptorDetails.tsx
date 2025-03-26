import { useCallback } from 'react';
import { buildCredentialsSummary } from '../utils/buildCredentialsSummary';
import { buildCredentialDetails } from '../utils/buildCredentialDetails';
import { VcMapToDescriptorDetails, Issuer } from '../types';

/**
 * Renders credential details cards
 * @param {Dictionary<any>[]} vcs - expects raw credentials array
 * @param {Dictionary<any>[]} descriptors - expects display-descriptor objects array.
 * It is an application resposobility to provide all nessary descriptors
 * @param {string} locale - locale string. Default is 'en-US'
 * @returns {VcPrepared} - object with summary and details keys
 */

export const useVcMapToDescriptorDetails = () => {
  return useCallback<VcMapToDescriptorDetails>((vc, descriptor, issuer, locale) => {
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
  }, []);
};
