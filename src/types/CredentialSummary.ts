export type CredentialSummary = {
  title: string;
  subTitle: string;
  summaryDetail: string;
  logo: string;
  issuerLogo: string;
  issuerName: string;
  id: string;
  did?: string;
  credential: any;
  type: string[];
  checked?: boolean;
  isNewCredential?: boolean;
};
