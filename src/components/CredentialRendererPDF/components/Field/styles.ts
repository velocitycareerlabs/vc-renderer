import { StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
  fieldContainer: {
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 9,
    fontWeight: 400,
    color: 'rgba(106, 106, 106, 1)',
  },
  value: {
    fontSize: 9,
    fontWeight: 400,
    color: 'rgba(51, 51, 51, 1)',
  },
});
