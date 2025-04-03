import { Text, View, Image } from '@react-pdf/renderer';
import { CredentialCategory } from '../CredentialCategory';
import { CredentialStatus } from '../CredentialStatus';
import FallbackImage from '../../../../assets/png/fallback.png';
import { style } from './styles';

export const CredentialHeader = ({ credentialPrepared, credentialsStatus, categoriesTitle }) => {
  return (
    <View style={style.headerContainer}>
      {credentialPrepared?.summary.logo && (
        <View style={style.headerLogoContainer}>
          <Image style={style.headerLogo} src={credentialPrepared?.summary.logo} />
          <Image style={style.fallbackImage} src={FallbackImage} />
        </View>
      )}
      <View style={style.headerRight}>
        <View style={style.issuer}>
          <Text>{credentialPrepared?.summary.issuerName}</Text>
          {credentialPrepared?.summary.issuerLogo && (
            <View style={style.issuerLogoContainer}>
              <Image style={style.issuerLogo} src={credentialPrepared?.summary.issuerLogo} />
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
