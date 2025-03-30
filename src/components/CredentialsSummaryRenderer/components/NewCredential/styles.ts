import { Box, BoxProps, styled } from '@mui/material';

export const NewCredentialContainer: any = styled(Box)<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  border-radius: 50px;
  padding: 3px 16px;
  height: fit-content;
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
  letter-spacing: 0.1px;
  background-color: ${({ theme }) => theme.customColors.mainBlueOpacity02};
  color: ${({ theme }) => theme.customColors.mainBlue};
`;
