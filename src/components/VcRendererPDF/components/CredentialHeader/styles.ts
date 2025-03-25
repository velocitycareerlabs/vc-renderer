import { StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
  headerContainer: {
    height: 103,
    backgroundColor: 'rgb(17, 17, 17)',
    marginBottom: 11,
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogo: {
    minHeight: '100px',
    width: '100px',
    borderRadius: 16,
    border: '3.6px solid #ffffff',
    background: '#fafafa',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 2,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  issuer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
    color: '#ffffff',
    fontSize: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  issuerLogo: {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    border: '0.6px solid #ffffff',
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },
});
