import React from 'react';
// import { useTranslation } from 'react-i18next';
import { NewCredentialContainer } from './styles';

export const NewCredential: React.FC<{
  className?: string;
  isVisible?: boolean;
}> = ({ isVisible = false, className }) => {
  // const { t } = useTranslation();

  if (!isVisible) {
    return null;
  }

  return <NewCredentialContainer className={className}>NEW</NewCredentialContainer>;
};
