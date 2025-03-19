import { StyleSheet } from '@react-pdf/renderer';

export const style = StyleSheet.create({
  sideBar: {
    width: '115px',
    height: '130px',
    margin: 24,
    backgroundColor: 'rgba(242, 244, 246, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 14.3,
    paddingHorizontal: 12,
    paddingVertical: 9.5,
    borderRadius: '4.8px',
  },
  sideBarItem: {
    fontSize: 8,
    fontWeight: 500,
    color: 'rgb(51, 51, 51)',
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  sideBarIcon: {
    width: '10px',
    height: '10px',
  },
});
