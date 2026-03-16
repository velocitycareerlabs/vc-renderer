import { Box, type BoxProps, CardActionArea, IconButton, Typography, styled } from '@mui/material';
import type { CSSObject } from '@mui/material/styles';
import type { Styles } from '../../../../types';
import { NewCredential } from '../NewCredential';

const shouldForwardSelectedProp = (prop: PropertyKey) =>
  prop !== 'selected' && prop !== 'styleOverrides';

interface CustomBoxProps extends BoxProps {
  selected?: boolean;
  styleOverrides?: Styles;
}
export const Container: any = styled(Box, {
  shouldForwardProp: shouldForwardSelectedProp,
})<CustomBoxProps>(({ selected, styleOverrides }) => ({
  position: 'relative',
  overflowWrap: 'anywhere',
  width: '352px',
  border: selected ? 'none' : '1px solid transparent',
  ...(styleOverrides as CSSObject | undefined),
}));

export const ActionContainer: any = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  border-radius: 12px;
  height: 100%;
  border: ${({ selected }) => (selected ? 2 : 1)}px solid
    ${({ theme, selected }) =>
      selected ? theme.palette.primary.main : theme.palette.separator.main};
  background: ${({ theme }) => theme.palette.background.default};

  &:hover {
    box-shadow:
      0px 2px 10px 0px ${({ theme }) => theme.customColors.shadow1},
      0px 1px 2px 0px ${({ theme }) => theme.customColors.shadow2};
  }
  position: relative;
`;

export const Logo: any = styled('img')`
  width: 68px;
  height: 36px;
  object-fit: contain;
  object-position: left;
`;

export const TopBox: any = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const FooterBox: any = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 10px;
`;

export const SubTitle: any = styled(Typography)`
  margin-top: 6px;
`;

export const Description: any = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Content: any = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleBox: any = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-right: 6px;
  align-items: flex-start;
  text-align: left;
`;

export const IconBox: any = styled(Box)`
  margin-right: -15px;
`;

export const CheckIconBox: any = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>`
  box-sizing: content-box;
  position: absolute;
  right: 0px;
  bottom: -1px;

  &.MuiButtonBase-root {
    background: none;
    padding: 0;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    &.MuiButtonBase-root {
      background: none;
      padding: 25px;
    }
    right: -25px;
    bottom: -26px;
  }
`;

export const CheckIconContent: any = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${({ theme, selected }) =>
    selected ? theme.palette.primary.main : theme.palette.background.default};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.palette.primary.main : theme.palette.separator.main};
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  color: ${({ theme, selected }) =>
    selected ? theme.palette.text.primary : theme.palette.separator.main};
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    &.hovered {
      background: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.text.primary};
      border: 1px solid transparent;
      opacity: 0.8;
    }
  }

  ${({ selected }) =>
    selected &&
    `
  margin-right: 1px;
  margin-bottom: 1px;
`}
`;

export const NewCredentialStatusBox: any = styled(NewCredential)`
  margin-right: 11px;
`;
