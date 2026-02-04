import { FC } from 'react';
import { CredentialCategoryEnum } from '../../../types';
import Badge from '../../../assets/png/category/badge.png';
import Assessments from '../../../assets/png/category/assessment.png';
import Certification from '../../../assets/png/category/certification.png';
import Education from '../../../assets/png/category/education.png';
import Employment from '../../../assets/png/category/employment.png';
import Gig from '../../../assets/png/category/gig.png';
import Health from '../../../assets/png/category/pharmacy.png';
import Training from '../../../assets/png/category/training.png';
import Identity from '../../../assets/png/category/identity.png';
import { CategoryBox } from './styles';

export const categoryIconsMap = {
  [CredentialCategoryEnum.EDUCATION]: Education,
  [CredentialCategoryEnum.EMPLOYMENT_HISTORY]: Employment,
  [CredentialCategoryEnum.ASSESSMENTS]: Assessments,
  [CredentialCategoryEnum.BADGES_AND_ACHIEVEMENTS]: Badge,
  [CredentialCategoryEnum.CERTIFICATIONS_AND_LICENSES]: Certification,
  [CredentialCategoryEnum.GIG_WORKS]: Gig,
  [CredentialCategoryEnum.HEALTH]: Health,
  [CredentialCategoryEnum.CONTACTS]: Identity,
  [CredentialCategoryEnum.DOCUMENTS]: Identity,
  [CredentialCategoryEnum.IDENTITY]: Identity,
  [CredentialCategoryEnum.TRAINING_AND_DEVELOPMENT]: Training,
};

export const fallbackImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGklEQVR4nGP8//8/A7mAiWydo5pHNY9qxg4A4hMDG2DoGRIAAAAASUVORK5CYII=';

export const createIcon = (src) => <img src={src || fallbackImage} alt="Category icon" />;

export const CredentialCategory: FC<{ category: string }> = ({ category }) => (
  // const { t } = useTranslation();

  <CategoryBox category={category} data-testid={category}>
    {createIcon(categoryIconsMap[category])} <span>{category}</span>
  </CategoryBox>
);
