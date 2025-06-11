import { StyleSheet } from '@react-pdf/renderer';
import { CredentialCategoryEnum } from '../../../../types';

export const style = StyleSheet.create({
  credentialCategoryContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px',
    borderRadius: '44px',
    height: '18px',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexBasis: 'auto',
  },
  credentialCategoryIcon: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
  },
  credentialCategoryText: {
    fontSize: '8px',
    fontWeight: 400,
    letterSpacing: '0.1px',
    padding: '0 16px 0 10px',
    color: '#ffffff',
    verticalAlign: 'sub',
  },
});

export const categoryColors = {
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
};
