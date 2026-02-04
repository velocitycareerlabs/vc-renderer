import { Box, css, styled } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { CredentialStatusEnum } from '../../../types';

const getBoxColor = (theme: Theme, status: CredentialStatusEnum) => theme.palette.status[status];

export const StatusBox: any = styled(Box)<{ status: CredentialStatusEnum; isDetails: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  border-radius: 50px;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
  letter-spacing: 0.1px;

  ${({ theme, status, isDetails }) => {
    const color = getBoxColor(theme, status);
    if (isDetails) {
      return css`
        background: ${color};
        color: ${theme.customColors.white};
        padding: 7px 16px 7px 10px;
      `;
    }
    return css`
      border: 1px solid ${color};
      color: ${color};
    `;
  }}

  svg {
    margin-right: 10px;
  }
`;
