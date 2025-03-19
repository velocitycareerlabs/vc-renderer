import { IssuerContainer, IssuerName } from './styles';

export const Issuer = ({
  issuerName,
  issuerLogo,
}: {
  issuerName?: string;
  issuerLogo?: string;
}) => {
  return (
    <IssuerContainer>
      <IssuerName>{issuerName}</IssuerName>
      {issuerLogo && <img id="logoSmall" src={issuerLogo} alt={issuerName} />}
    </IssuerContainer>
  );
};
