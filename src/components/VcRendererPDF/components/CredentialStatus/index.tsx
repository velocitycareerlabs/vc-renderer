import { View, Text, Image } from '@react-pdf/renderer';
import { fallbackImage } from '../../../common/CredentialCategory';
import { VcStatusEnum } from '../../../../types';
import Check from '../../../../assets/png/check.png';
import Replaced from '../../../../assets/png/replaced.png';
import Expired from '../../../../assets/png/expired.png';
import Revoked from '../../../../assets/png/revoked.png';
import { style, statusColor, fallbackBackground } from './styles';

const iconsMap = {
  [VcStatusEnum.OFFERED]: Check,
  [VcStatusEnum.REPLACED]: Replaced,
  [VcStatusEnum.REVOKED]: Revoked,
  [VcStatusEnum.VERIFIED]: Check,
  [VcStatusEnum.EXPIRED]: Expired,
  [VcStatusEnum.DELETED]: null,
  [VcStatusEnum.SELF_REPORTED]: null,
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
