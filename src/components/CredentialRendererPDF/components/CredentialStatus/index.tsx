import { View, Text, Image } from '@react-pdf/renderer';
import { fallbackImage } from '../../../common/CredentialCategory';
import { CredentialStatusEnum } from '../../../../types';
import Check from '../../../../assets/png/check.png';
import Replaced from '../../../../assets/png/replaced.png';
import Expired from '../../../../assets/png/expired.png';
import Revoked from '../../../../assets/png/revoked.png';
import { style, statusColor, fallbackBackground } from './styles';

const iconsMap = {
  [CredentialStatusEnum.OFFERED]: Check,
  [CredentialStatusEnum.REPLACED]: Replaced,
  [CredentialStatusEnum.REVOKED]: Revoked,
  [CredentialStatusEnum.VERIFIED]: Check,
  [CredentialStatusEnum.EXPIRED]: Expired,
  [CredentialStatusEnum.FAILED]: Expired,
  [CredentialStatusEnum.DELETED]: null,
  [CredentialStatusEnum.SELF_REPORTED]: null,
};

export const CredentialStatus = ({ status }) => {
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: statusColor[status] || fallbackBackground,
        },
      ]}
    >
      <Image style={style.icon} src={iconsMap[status] || fallbackImage} />
      <Text style={style.text}>{status}</Text>
    </View>
  );
};
