import { setFallbackImage } from '../../../../utils/images';
import { IssuerContainer, IssuerName } from './styles';

export const Issuer = ({
  issuerName,
  issuerLogo,
}: {
  issuerName?: string;
  issuerLogo?: string;
}) => (
  <IssuerContainer>
    <IssuerName>{issuerName}</IssuerName>
    {issuerLogo && (
      <img id="logoSmall" src={issuerLogo} alt={issuerName} onError={setFallbackImage} />
    )}
  </IssuerContainer>
);
