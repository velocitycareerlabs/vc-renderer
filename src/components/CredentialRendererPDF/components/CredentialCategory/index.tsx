import { View, Text, Image } from '@react-pdf/renderer';
import { categoryIconsMap, fallbackImage } from '../../../common/CredentialCategory';
import { style, categoryColors } from './styles';

export const CredentialCategory = ({ categoryTitle }) => (
  <View
    style={[
      style.credentialCategoryContainer,
      {
        backgroundColor: categoryColors[categoryTitle] || 'rgb(0 122 255 / 40%)',
      },
    ]}
  >
    <Image
      style={style.credentialCategoryIcon}
      src={categoryIconsMap[categoryTitle] || fallbackImage}
    />
    <Text style={style.credentialCategoryText}>{categoryTitle || 'Career Credential'}</Text>
  </View>
);
