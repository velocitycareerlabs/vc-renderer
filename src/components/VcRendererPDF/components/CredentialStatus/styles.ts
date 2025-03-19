import { StyleSheet } from '@react-pdf/renderer';
import { VcStatusEnum } from '../../../../types';

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
  },
});

export const fallbackBackground = 'rgb(0 122 255 / 40%)';

export const statusColor = {
  [VcStatusEnum.REVOKED]: '#FF3824',
  [VcStatusEnum.VERIFIED]: '#34C759',
  [VcStatusEnum.SELF_REPORTED]: '#20222866',
  [VcStatusEnum.OFFERED]: '#007AFF',
  [VcStatusEnum.REPLACED]: '#FF9500',
  [VcStatusEnum.DELETED]: '#FF3824',
  [VcStatusEnum.EXPIRED]: '#FF3824',
};
