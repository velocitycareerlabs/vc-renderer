import { StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
  containers: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 16,
    lineHeight: '1',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  vclLogo: {
    width: '70px',
    height: '42px',
  },
  textContainer: {
    width: '90%',
  },
  textBox: {
    fontSize: '10px',
    width: '70%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  text1: {
    width: '30%',
    fontSize: '10px',
    color: 'gray',
  },
  text2: {
    fontSize: '10px',
  },
  imageContainer: {
    width: '15%',
    marginLeft: '80px',
  },
});
