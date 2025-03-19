import { StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 12,
    marginTop: 12,
  },
  attachment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 9,
    fontWeight: 400,
    color: 'rgba(106, 106, 106, 1)',
  },
  text: {
    fontSize: 9,
    fontWeight: 400,
    color: 'rgba(51, 51, 51, 1)',
  },
  image: {
    width: 24,
    height: 24,
  },
});
