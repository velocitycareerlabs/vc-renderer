import { StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
  page: {
    lineHeight: 1.5,
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 114,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    margin: 24,
  },
  containerSummary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 24,
    gap: 6,
    width: '408px',
  },
  containerDetails: {
    padding: 19,
    borderRadius: '9.56px',
    border: '0.6px solid #e6e6e6',
    width: '408px',
  },
  containtItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '0.2px',
  },
  subTitle: {
    fontSize: '17px',
    fontWeight: 400,
    letterSpacing: '0.2px',
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
