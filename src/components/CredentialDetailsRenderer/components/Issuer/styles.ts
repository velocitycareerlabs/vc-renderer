import { Box, Typography, styled } from '@mui/material';

export const IssuerContainer: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  paddingBottom: '24px',
  flexBasis: '50%',
  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export const IssuerName: any = styled(Typography)(({ theme }) => ({
  color: theme.customColors.white,
  marginRight: '16px',
  fontSize: '24px',
  padding: '10px 0',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0',
    fontSize: '16px',
  },
}));
