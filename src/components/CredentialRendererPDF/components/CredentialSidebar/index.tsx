import { View } from '@react-pdf/renderer';
import { style } from './styles';

export const CredentialSidebar = ({ sidebarItems, id }) => {
  return sidebarItems && sidebarItems[id] ? (
    <View style={style.sideBar}>{...sidebarItems[id]}</View>
  ) : null;
};
