import { View } from '@react-pdf/renderer';

export const Footer = ({ id, footerItems }) =>
  footerItems && footerItems[id] ? <View>{footerItems[id]}</View> : null;
