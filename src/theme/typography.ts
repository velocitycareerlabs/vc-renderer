import React from 'react';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h3Bold: React.CSSProperties;
    h4Bold: React.CSSProperties;
    pL: React.CSSProperties;
    pLBold: React.CSSProperties;
    pM: React.CSSProperties;
    pMBold: React.CSSProperties;
    pS: React.CSSProperties;
    pSBold: React.CSSProperties;
    buttonText: React.CSSProperties;
    smallSubHeading: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h3Bold?: React.CSSProperties;
    h4Bold?: React.CSSProperties;
    pSBold?: React.CSSProperties;
    pL?: React.CSSProperties;
    pLBold?: React.CSSProperties;
    pM?: React.CSSProperties;
    pMBold?: React.CSSProperties;
    pS?: React.CSSProperties;
    buttonText?: React.CSSProperties;
    smallSubHeading: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h3Bold: true;
    h4Bold: true;
    pSBold: true;
    pL: true;
    pLBold: true;
    pM: true;
    pMBold: true;
    pS: true;
    buttonText: true;
    smallSubHeading: true;
  }
}

const defaultTheme = createTheme({});

export const typography = {
  h1: {
    fontSize: 42,
    fontWeight: 700,
    lineHeight: '110%',
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: 36,
      letterSpacing: 0.35,
      lineHeight: '34px',
    },
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  h2: {
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: 0.15,
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: 28,
    },
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '26px',
      letterSpacing: 0.4,
    },
  },
  h3Bold: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '26px',
    letterSpacing: 0.4,
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: 24,
    },
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  h3: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: '26px',
    [defaultTheme.breakpoints.down('md')]: {
      letterSpacing: 0.4,
      fontWeight: 400,
    },
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  h4Bold: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '26px',
    letterSpacing: 0.4,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  h4: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: 0.4,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  pL: { fontSize: 19, fontWeight: 400, lineHeight: '140%', letterSpacing: 0.15 },
  pLBold: { fontSize: 19, fontWeight: 700, lineHeight: 24, letterSpacing: 0.4 },
  pM: {
    fontSize: 17,
    fontWeight: 400,
    lineHeight: '150%',
  },
  pMBold: { fontSize: 17, fontWeight: 700, lineHeight: '140%' },
  pS: { fontSize: 15, fontWeight: 400, lineHeight: '150%' },
  pSBold: { fontSize: 15, fontWeight: 600, lineHeight: '150%' },
  buttonText: {
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  smallSubHeading: {
    fontSize: 12,
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    lineHeight: '130%',
    letterSpacing: 0.1,
  },
  fontFamily: ['SF Pro Display'].join(','),
};
