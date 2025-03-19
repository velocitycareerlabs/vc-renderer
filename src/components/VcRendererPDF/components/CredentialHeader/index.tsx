import { Text, View, Image } from '@react-pdf/renderer';
import { CredentialCategory } from '../CredentialCategory';
import { CredentialStatus } from '../CredentialStatus';
import { style } from './styles';

export const CredentialHeader = ({ vcPrepared, vcsStatus, categoriesTitle }) => {
  return (
    <View style={style.headerContainer}>
      {vcPrepared?.summary.logo && (
        <Image style={style.headerLogo} src={vcPrepared?.summary.logo} />
      )}
      <View style={style.headerRight}>
        <View style={style.issuer}>
          <Text>{vcPrepared?.summary.issuerName}</Text>
          {vcPrepared?.summary.issuerLogo && (
            <Image style={style.issuerLogo} src={vcPrepared?.summary.issuerLogo} />
          )}
        </View>
        <View style={style.tags}>
          <CredentialCategory categoryTitle={categoriesTitle[vcPrepared?.summary.id || '']} />
          <CredentialStatus status={vcsStatus[vcPrepared?.summary.id || '']} />
        </View>
      </View>
    </View>
  );
};
