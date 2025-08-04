import { View } from '@react-pdf/renderer';

export const Footer = ({ id, footerItems }) => {
  return footerItems && footerItems[id] ? <View>{footerItems[id]}</View> : null;
};
