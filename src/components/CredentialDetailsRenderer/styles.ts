import { Box, Typography, IconButton, styled, BoxProps } from '@mui/material';
import { Styles } from '../../types';
import vcHeader from '../../assets/png/vcHeader.png';

export const Content: any = styled(Box)<{ hasScrollBar: boolean; style: Styles }>`
  outline: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 32px;
  position: relative;
  padding: 0;
  padding-bottom: 40px;
  max-width: 996px;
  width: 100%;
  box-shadow: 0px 1px 2px 0px rgba(159, 177, 201, 0.2);
  ${({ theme }) => theme.breakpoints.down('sm')} {
    border-radius: 0px;
  }
  ${({ style }) => ({ ...style })}
`;

export const ModalContent: any = styled(Box)<{ hasScrollBar: boolean }>`
  outline: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 32px;
  box-sizing: border-box;
  padding: 56px 40px 8px 40px;
  position: relative;
  max-width: 996px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    border-radius: 0px;
    margin: 16px;
    height: 100%;
    padding: 0px;
    width: unset;
  }
`;

export const BottomGradient: any = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  marginLeft: '55px',
  left: 0,
  width: 'calc(100% - 110px)',
  height: '60px',
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.17) 0%, #FFF 100%)',
  zIndex: 9999,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const IconsBlock: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginRight: '-41px',
  marginLeft: '-32px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px',
  },
}));

export const Summary: any = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
}));

export const CategoryName: any = styled(Typography)(({ theme: { customColors } }) => ({
  color: customColors.blackInactive,
  marginBottom: '20px',
}));

export const Title: any = styled(Typography)(() => ({
  marginBottom: '12px',
}));

export const SubTitle: any = styled(Typography)(() => ({
  marginBottom: '12px',
}));

export const Description: any = styled(Typography)(({ theme }) => ({
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '12px',
  },
}));

export const HeaderContent: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '10px',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
  },
  '& #logoBig': {
    height: '167px',
    maxHeight: '167px',
    width: '167px',
    zIndex: 2,
    border: `6px solid ${theme.customColors.white}`,
    borderRadius: '24px',
    boxSizing: 'border-box',
    background: '#fafafa',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '105px',
      maxHeight: '105px',
      border: `4px solid ${theme.customColors.white}`,
      borderRadius: '16px',
    },
  },
  '& #logoSmall': {
    height: '57px',
    width: 'auto',
    border: `1px solid ${theme.customColors.white}`,
    borderRadius: '12px',
    boxSizing: 'border-box',
    background: '#fafafa',
    [theme.breakpoints.down('sm')]: {
      height: '24px',
      borderRadius: '4px',
    },
  },
}));

export const CloseIcon: any = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '0px',
  right: '0px',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DetailFields: any = styled(Box)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-bottom: 12px;
  }
`;

export const ModalHeader: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '56px 40px 28px 40px',
  backgroundImage: `url(${vcHeader})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '32px 32px 0 0',
  height: '195px',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    padding: '24px 16px 7px',
    borderRadius: '0',
  },
}));

export const ScrollableContent: any = styled(Box)<{ hasScrollBar: boolean }>`
  height: 100%;
  max-height: 590px;
  overflow-y: auto;
  margin-right: 5px;
  display: flex;
  @-moz-document url-prefix() {
    padding-right: 10px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-height: 80vh;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-height: none;
    flex-direction: column-reverse;
  }
`;

export const TagsContainer: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  flexBasis: '100%',
  marginTop: '-85px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'flex-end',
    flexBasis: '50%',
    marginTop: 0,
    justifyContent: 'flex-start',
  },
}));

export const SideBarContainer: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    [theme.breakpoints.down('sm')]: {
      width: 'unset !important',
      margin: '16px !important',
    },
  },
}));

export const ContentContainer: any = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));
