import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import { CredentialCategory } from '../CredentialCategory';
import { CredentialStatus } from '../CredentialStatus';
import FallbackImage from '../../../../assets/png/fallback.png';
import { useImageUrls } from '../../hooks/useImageUrls';
import { style } from './styles';

export const CredentialHeader = ({
  credentialPrepared,
  credentialsStatus,
  categoriesTitle,
  imageProxyUrl,
}) => {
  const { logoSrc, issuerLogoSrc } = useImageUrls(credentialPrepared, imageProxyUrl);

  return (
    <View style={style.headerContainer}>
      {logoSrc && (
        <View style={style.headerLogoContainer}>
          <Image style={style.headerLogo} src={logoSrc} />
          <Image style={style.fallbackImage} src={FallbackImage} />
        </View>
      )}
      <View style={style.headerRight}>
        <View style={style.issuer}>
          <Text>{credentialPrepared?.summary.issuerName}</Text>
          {issuerLogoSrc && (
            <View style={style.issuerLogoContainer}>
              <Image style={style.issuerLogo} src={issuerLogoSrc} />
              <Image style={style.issuerLogoFallback} src={FallbackImage} />
            </View>
          )}
        </View>
        <View style={style.tags}>
          <CredentialCategory
            categoryTitle={categoriesTitle[credentialPrepared?.summary.id || '']}
          />
          <CredentialStatus status={credentialsStatus[credentialPrepared?.summary.id || '']} />
        </View>
      </View>
    </View>
  );
};
