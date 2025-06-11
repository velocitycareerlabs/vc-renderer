import { StyleSheet } from '@react-pdf/renderer';
import { CredentialStatusEnum } from '../../../../types';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px 10px',
    borderRadius: '44px',
    height: '18px',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexBasis: 'auto',
  },
  icon: {
    width: '8px',
  },
  text: {
    fontSize: '8px',
    fontWeight: 400,
    letterSpacing: '0.1px',
    marginLeft: '5px',
    padding: '0 16px 0 0px',
    color: '#ffffff',
    verticalAlign: 'sub',
  },
});

export const fallbackBackground = 'rgb(0 122 255 / 40%)';

export const statusColor = {
  [CredentialStatusEnum.REVOKED]: '#FF3824',
  [CredentialStatusEnum.VERIFIED]: '#34C759',
  [CredentialStatusEnum.SELF_REPORTED]: '#20222866',
  [CredentialStatusEnum.OFFERED]: '#007AFF',
  [CredentialStatusEnum.REPLACED]: '#FF9500',
  [CredentialStatusEnum.DELETED]: '#FF3824',
  [CredentialStatusEnum.EXPIRED]: '#FF3824',
  [CredentialStatusEnum.FAILED]: '#FF3824',
};
