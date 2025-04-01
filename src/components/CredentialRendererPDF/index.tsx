import React, { useEffect, useState } from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { usePrepareCredentialDetails } from '../../hooks';
import { PageHeader } from './components/PageHeader';
import { Attachments } from './components/Attachments';
import { CredentialHeader } from './components/CredentialHeader';
import { CredentialSidebar } from './components/CredentialSidebar';
import { CredentialRendererPDFProps, CredentialsRawData, CredentialPrepared } from '../../types';
import { style } from './styles';
/**
 * PDF renderer component for Verifiable Credentials
 * @param {Dictionary<Array<React.ReactNode>>} sidebarItems Object with key as vc id and value as array of React.ReactNode
 * @param {CredentialsData} credentialsData Raw or prepared vcs data
 * @param {string} applicantName Name of the vcs applicant
 * @param {string} userName Name of the logged in user
 * @param {string} appLogo Application logo URL
 * @param {Dictionary<string>} categoriesTitle Object with key as vc id and value as vc category
 * @param {Dictionary<CredentialStatusEnum>} props.credentialsStatus Object with key as vc id and value as vc status
 * @param {string} [props.locale='en-US'] Locale for formatting
 * @returns {JSX.Element} Rendered PDF component
 */

export const CredentialRendererPDF: React.FC<CredentialRendererPDFProps> = ({
  sidebarItems,
  credentialsData,
  applicantName,
  userName,
  appLogo,
  categoriesTitle,
  credentialsStatus,
  locale = 'en-US',
}) => {
  const [credentialsPrepared, setCredentialsPrepared] = useState<CredentialPrepared[]>();
  const mapToDescriptorsDetails = usePrepareCredentialDetails(locale);

  useEffect(() => {
    if ('credentialsPrepared' in credentialsData) {
      setCredentialsPrepared(credentialsData.credentialsPrepared);
    } else {
      const credentialsRawData = credentialsData as CredentialsRawData;
      const credentials = credentialsRawData.vcs.map((vc) => {
        const issuer = credentialsRawData.issuers[vc.issuer.id];
        const descriptor = credentialsRawData.descriptors[vc.type[0]];
        return mapToDescriptorsDetails(vc, descriptor, issuer, locale);
      });
      setCredentialsPrepared(credentials);
    }
  }, [categoriesTitle, locale, mapToDescriptorsDetails, credentialsData]);

  return credentialsPrepared ? (
    <>
      {credentialsPrepared.map((credentialPrepared) => (
        <Page size="A4" style={style.page} wrap key={credentialPrepared.summary.id}>
          <PageHeader applicantName={applicantName} loggedInUser={userName} logo={appLogo} />
          <CredentialHeader
            credentialPrepared={credentialPrepared}
            credentialsStatus={credentialsStatus}
            categoriesTitle={categoriesTitle}
          />
          <View style={style.container}>
            <View style={style.content}>
              <View style={style.containerSummary}>
                <Text style={style.title}>{credentialPrepared?.summary.title}</Text>
                <Text style={style.subTitle}>{credentialPrepared?.summary.subTitle}</Text>
                <Text style={style.subTitle}>{credentialPrepared?.summary.summaryDetail}</Text>
              </View>
              {credentialPrepared?.details?.length && (
                <View style={[style.containerDetails]}>
                  {credentialPrepared?.details.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <View style={style.containtItem} key={`${item.label} ${item.value} ${index}`}>
                      <Text style={style.value}>{item.value}</Text>
                      <Text style={style.label}>{item.label}</Text>
                    </View>
                  ))}
                  <Attachments credentialsPrepared={credentialPrepared} />
                </View>
              )}
            </View>
            <CredentialSidebar id={credentialPrepared.summary.id} sidebarItems={sidebarItems} />
          </View>
        </Page>
      ))}
    </>
  ) : null;
};
