import { Box, css, styled } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { CredentialCategoryEnum } from '../../../types';

export const getBoxColor = (theme: Theme, category: CredentialCategoryEnum) =>
  theme.palette.category[category];

export const CategoryBox: any = styled(Box)<{ category: CredentialCategoryEnum }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 50px;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.customColors.white};

  ${({ theme, category }) => {
    const color = getBoxColor(theme, category);

    return css`
      background: ${color};
    `;
  }}

  img {
    width: 24px;
    border-radius: 50%;
  }
  span {
    padding: 0 16px 0 10px;
  }
`;
