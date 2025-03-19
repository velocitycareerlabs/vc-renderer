import { Typography, styled, Box, Button } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  border: `1px solid ${theme.palette.separator.main}`,
  padding: '32px',
  boxSizing: 'border-box',
  marginTop: '0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

export const FieldName: any = styled(Typography)(({ theme }) => ({
  paddingBottom: '9px',
  color: theme.palette.text.secondary,
}));

export const AttachmentItem: any = styled(Button)(({ theme }) => ({
  fontSize: '17px',
  textTransform: 'none',
  textAlign: 'left',
  color: theme.palette.text.primary,
}));
