import { StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
  page: {
    lineHeight: 1.5,
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    margin: '24 24 0 24',
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
});
