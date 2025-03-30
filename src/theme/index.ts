import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { CredentialStatusEnum, CredentialCategoryEnum } from '../types';

export type ThemeType = typeof theme;
declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      blue: string;
      lightBlue: string;
      shadow1: string;
      shadow2: string;
      blackDisabled: string;
      blackInactive: string;
      black20: string;
      black40: string;
      black100: string;
      white: string;
      yellow: string;
      red: string;
      mainBlue: string;
      mainBlueOpacity02: string;
      backDropGray: string;
      yellowLink: string;
      backgroundHover: string;
      green: string;
      paperDark: string;
      blackDefault: string;

      [key: string]: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      [key: string]: string;
    };
  }

  interface StatusPalette {
    [CredentialStatusEnum.REVOKED]: string;
    [CredentialStatusEnum.VERIFIED]: string;
    [CredentialStatusEnum.SELF_REPORTED]: string;
    [CredentialStatusEnum.OFFERED]: string;
    [CredentialStatusEnum.REPLACED]: string;
    [CredentialStatusEnum.DELETED]: string;
    [CredentialStatusEnum.EXPIRED]: string;
    [CredentialStatusEnum.FAILED]: string;
  }

  interface CategoryPalette {
    [CredentialCategoryEnum.IDENTITY]: string;
    [CredentialCategoryEnum.EDUCATION]: string;
    [CredentialCategoryEnum.EMPLOYMENT_HISTORY]: string;
    [CredentialCategoryEnum.CERTIFICATIONS_AND_LICENSES]: string;
    [CredentialCategoryEnum.TRAINING_AND_DEVELOPMENT]: string;
    [CredentialCategoryEnum.ASSESSMENTS]: string;
    [CredentialCategoryEnum.BADGES_AND_ACHIEVEMENTS]: string;
    [CredentialCategoryEnum.GIG_WORKS]: string;
    [CredentialCategoryEnum.HEALTH]: string;
    [CredentialCategoryEnum.DOCUMENTS]: string;
    [CredentialCategoryEnum.CONTACTS]: string;
  }

  interface Palette {
    border: Palette['primary'];
    separator: Palette['primary'];
    status: StatusPalette;
    category: CategoryPalette;
  }
  interface PaletteOptions {
    border: PaletteOptions['primary'];
    separator: PaletteOptions['primary'];
    status: StatusPalette;
    category: CategoryPalette;
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: '#F4F4F4',
    },
    primary: {
      main: '#FFD713',
      light: '#F0C000',
      dark: '#E0B300',
    },
    secondary: {
      main: colors.common.white,
      dark: colors.common.black,
    },
    border: {
      main: '#697079',
      dark: colors.common.black,
      light: 'rgba(118, 118, 128, 0.2)',
    },
    warning: {
      main: '#FF9500',
    },
    success: {
      main: '#34C759',
    },
    error: {
      main: '#F44853',
    },
    text: {
      primary: colors.common.black,
      secondary: '#697079',
    },
    separator: {
      main: 'rgba(118, 118, 128, 0.20)',
    },
    status: {
      [CredentialStatusEnum.REVOKED]: '#FF3824',
      [CredentialStatusEnum.VERIFIED]: '#34C759',
      [CredentialStatusEnum.SELF_REPORTED]: '#20222866',
      [CredentialStatusEnum.OFFERED]: '#007AFF',
      [CredentialStatusEnum.REPLACED]: '#FF9500',
      [CredentialStatusEnum.DELETED]: '#FF3824',
      [CredentialStatusEnum.EXPIRED]: '#FF3824',
      [CredentialStatusEnum.FAILED]: '#FF3824',
    },
    category: {
      [CredentialCategoryEnum.IDENTITY]: 'rgb(0 122 255 / 40%)',
      [CredentialCategoryEnum.EDUCATION]: 'rgb(88 86 215 / 40%)',
      [CredentialCategoryEnum.EMPLOYMENT_HISTORY]: 'rgb(255 44 85 / 40%)',
      [CredentialCategoryEnum.CERTIFICATIONS_AND_LICENSES]: 'rgb(90 200 250 / 40%)',
      [CredentialCategoryEnum.TRAINING_AND_DEVELOPMENT]: 'rgb(255 149 0 / 40%)',
      [CredentialCategoryEnum.ASSESSMENTS]: 'rgb(90 200 250 / 40%)',
      [CredentialCategoryEnum.BADGES_AND_ACHIEVEMENTS]: 'rgb(255 204 2 / 40%)',
      [CredentialCategoryEnum.GIG_WORKS]: 'rgb(175 82 222 / 40%)',
      [CredentialCategoryEnum.HEALTH]: 'rgb(60 225 146 / 40%)',
      [CredentialCategoryEnum.DOCUMENTS]: 'rgb(0 122 255 / 40%)',
      [CredentialCategoryEnum.CONTACTS]: 'rgb(0 122 255 / 40%)',
    },
  },
  customColors: {
    blue: '#007AFF',
    lightBlue: '#007AFF33',
    shadow1: 'rgba(164, 171, 181, 0.30)',
    shadow2: 'rgba(159, 177, 201, 0.20)',
    blackDefault: '#231E28',
    blackDisabled: '#20222866',
    blackInactive: '#697079',
    black20: '#221E2826',
    black40: '#221E284D',
    black100: '#000000',
    white: '#FFFFFF',
    yellow: '#FFD713',
    yellowLink: '#C7A80F',
    red: 'rgba(255, 56, 36, 1)',
    mainBlue: 'rgba(0, 122, 255)',
    mainBlueOpacity02: 'rgba(0, 122, 255, 0.2)',
    backDropGray: 'rgba(0, 0, 0, 0.3)',
    backDropGrayLight: 'rgba(0, 0, 0, 0.1)',
    backgroundHover: 'rgba(0, 0, 0, 0.04)',
    green: '#32D74B',
    paperDark: '#EEEEEE',
  },
  typography,
});
