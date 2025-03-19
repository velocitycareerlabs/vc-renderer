import React, { useEffect, useState } from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { useVcMapToDescriptorDetails } from '../../hooks';
import { PageHeader } from './components/PageHeader';
import { Attachments } from './components/Attachments';
import { CredentialHeader } from './components/CredentialHeader';
import { CredentialSidebar } from './components/CredentialSidebar';
import { VcRendererPDFProps, VcsRawData, VcPrepared } from '../../types';
import { style } from './styles';
/**
 * PDF renderer component for Verifiable Credentials
 * @param {Dictionary<Array<React.ReactNode>>} sidebarItems Object with key as vc id and value as array of React.ReactNode
 * @param {VcsData} vcsData Raw or prepared vcs data
 * @param {string} applicantName Name of the vcs applicant
 * @param {string} userName Name of the logged in user
 * @param {string} appLogo Application logo URL
 * @param {Dictionary<string>} categoriesTitle Object with key as vc id and value as vc category
 * @param {Dictionary<VcStatusEnum>} props.vcsStatus Object with key as vc id and value as vc status
 * @param {string} [props.locale='en-US'] Locale for formatting
 * @returns {JSX.Element} Rendered PDF component
 */

export const VcRendererPDF: React.FC<VcRendererPDFProps> = ({
  sidebarItems,
  vcsData,
  applicantName,
  userName,
  appLogo,
  categoriesTitle,
  vcsStatus,
  locale = 'en-US',
}) => {
  const [vcsPrepared, setVcsPrepared] = useState<VcPrepared[]>();
  const mapToDescriptorsDetails = useVcMapToDescriptorDetails();

  useEffect(() => {
    if ('vcsPrepared' in vcsData) {
      setVcsPrepared(vcsData.vcsPrepared);
    } else {
      const vcsRawData = vcsData as VcsRawData;
      const credentials = vcsRawData.vcs.map((vc) => {
        const issuer = vcsRawData.issuers[vc.issuer.id];
        const descriptor = vcsRawData.descriptors[vc.type[0]];
        return mapToDescriptorsDetails(vc, descriptor, issuer, locale);
      });
      setVcsPrepared(credentials);
    }
  }, [categoriesTitle, locale, mapToDescriptorsDetails, vcsData]);

  return vcsPrepared ? (
    <>
      {vcsPrepared.map((vcPrepared) => (
        <Page size="A4" style={style.page} wrap key={vcPrepared.summary.id}>
          <PageHeader applicantName={applicantName} loggedInUser={userName} logo={appLogo} />
          <CredentialHeader
            vcPrepared={vcPrepared}
            vcsStatus={vcsStatus}
            categoriesTitle={categoriesTitle}
          />
          <View style={style.container}>
            <View style={style.content}>
              <View style={style.containerSummary}>
                <Text style={style.title}>{vcPrepared?.summary.title}</Text>
                <Text style={style.subTitle}>{vcPrepared?.summary.subTitle}</Text>
                <Text style={style.subTitle}>{vcPrepared?.summary.summaryDetail}</Text>
              </View>
              {vcPrepared?.details?.length && (
                <View style={[style.containerDetails]}>
                  {vcPrepared?.details.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <View style={style.containtItem} key={`${item.label} ${item.value} ${index}`}>
                      <Text style={style.value}>{item.value}</Text>
                      <Text style={style.label}>{item.label}</Text>
                    </View>
                  ))}
                  <Attachments vcsPrepared={vcPrepared} />
                </View>
              )}
            </View>
            <CredentialSidebar id={vcPrepared.summary.id} sidebarItems={sidebarItems} />
          </View>
        </Page>
      ))}
    </>
  ) : null;
};
