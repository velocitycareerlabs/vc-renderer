import {
  Box,
  Accordion as AccordionBase,
  AccordionSummary as AccordionSummaryBase,
  AccordionDetails as AccordionDetailsBase,
  Typography,
  styled,
} from '@mui/material';

export const Fields: any = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  border: `1px solid ${theme.palette.separator.main}`,
  padding: '32px',
  boxSizing: 'border-box',
  width: '100%',
  margin: '0',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
  '& > div:last-child': {
    marginBottom: 0,
    justifyItems: 'flex-start',
  },
  '& > div:nth-last-of-type(1)': {
    marginBottom: 0,
  },
}));

export const FieldListContainer: any = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const AccordionSummary: any = styled(AccordionSummaryBase)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  minHeight: 'unset',
  height: '48px',
}));

export const Accordion: any = styled(AccordionBase)(({ theme }) => ({
  borderRadius: '16px',
  border: `1px solid ${theme.palette.separator.main}`,
  boxShadow: 'none',
  backgroundColor: 'transparent',
  marginBottom: '10px',
  '&:before': {
    display: 'none',
  },
  '&:first-of-type': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  '&:last-of-type': {
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },
  '&.Mui-expanded': {
    margin: '0',
    marginBottom: '10px',
  },
  '& h3': {
    display: 'block',
    width: '100%',
  },
  '&.Mui-expanded .MuiAccordionSummary-root': {
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    minHeight: 'unset',
    height: '48px',
  },
}));

export const AccordionTitle: any = styled(Typography)(() => ({
  color: 'black',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '26px',
  letterSpacing: '0.40px',
  wordWrap: 'break-word',
}));

export const AccordionDetails: any = styled(AccordionDetailsBase)(({ theme }) => ({
  padding: '32px',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));
