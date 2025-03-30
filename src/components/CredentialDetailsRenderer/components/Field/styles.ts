import { Typography, styled, Box } from '@mui/material';

export const FieldName: any = styled(Typography)(({ theme }) => ({
  paddingBottom: '8px',
  color: theme.palette.text.secondary,
  justifyItems: 'flex-start',
}));

export const FieldValue: any = styled(Typography)(() => ({
  wordBreak: 'break-word',
  textAlign: 'left',
}));

export const FieldContainer: any = styled(Box)(() => ({
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));
