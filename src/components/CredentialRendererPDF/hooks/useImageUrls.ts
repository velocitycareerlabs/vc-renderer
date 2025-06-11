import { useState, useEffect } from 'react';
import { convertSvgToPngDataUrl } from '../../../utils/convertSvgToPngDataUrl';

export const useImageUrls = (credentialPrepared, imageProxyUrl) => {
  const [logoSrc, setLogoSrc] = useState<string | undefined>(undefined);
  const [issuerLogoSrc, setIssuerLogoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const processImage = async (url: string, setter: (val: string) => void) => {
      if (url.endsWith('.svg')) {
        const pngDataUrl = await convertSvgToPngDataUrl(url);
        setter(pngDataUrl);
      } else {
        setter(imageProxyUrl ? `${imageProxyUrl}${encodeURIComponent(url)}` : url);
      }
    };

    const convertLogos = async () => {
      if (credentialPrepared?.summary.logo) {
        await processImage(credentialPrepared.summary.logo, setLogoSrc);
      }
      if (credentialPrepared?.summary.issuerLogo) {
        await processImage(credentialPrepared.summary.issuerLogo, setIssuerLogoSrc);
      }
    };

    convertLogos();
  }, [credentialPrepared, imageProxyUrl]);

  return { logoSrc, issuerLogoSrc };
};
