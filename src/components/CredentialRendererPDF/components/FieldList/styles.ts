import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  fieldListContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  fields: {
    borderRadius: '9.56px',
    border: '0.6px solid #e6e6e6',
    padding: '16px',
    boxSizing: 'border-box',
    width: '100%',
    margin: '0',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    '& > div:last-child': {
      marginBottom: 0,
      justifyItems: 'flex-start',
    },
    '& > div:nth-last-of-type(1)': {
      marginBottom: 0,
    },
  },
  accordion: {
    padding: '0px',
  },
  accordionSummary: {
    backgroundColor: '#e6e6e6',
    borderTopLeftRadius: '9.56px',
    borderTopRightRadius: '9.56px',
    padding: '16px',
    paddingBottom: '10px',
  },
  accordionTitle: {
    color: '#000',
    fontSize: 12,
    fontWeight: 700,
    wordWrap: 'break-word',
  },
  accordionDetails: {
    padding: '16px',
  },
});
