import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { usePrepareCredentialSummary } from '../../hooks';
import { theme } from '../../theme';
import {
  CredentialsSummaryRendererProps,
  CredentialsRawData,
  CredentialPrepared,
} from '../../types';
import { CredentialCard } from './components/CredentialCard';
import { List } from './styles';

/**
 * Renders credentials summary cards
 * @param {CredentialsData} credentialsData - expects or raw data object with credentials,
 * descriptors and issuers keys or prepered data object with credentialsPrepared key
 * @param {CredentialsStatus} credentialsStatus - object where key is credential id and value is credential status
 * @param {string} locale - locale string
 * @param {Styles} style - object with styles
 * @param {React.FC} Footer - card actions component, for example share button
 * @param {boolean} isSelectable - if true, cards will have a tick element
 * @param {Function} onClick - function to handle card click and pass to handler credential id
 * @param {Function} onSelect - function to handle card select and pass to handler credential id
 * @param {Dictionary<boolean>} credentialsSelected - object where key is credential id and value is boolean
 * @param {Dictionary<boolean>} recentlyAddedCredentials - object where key is credential id and value is boolean
 * @returns - React.FC
 */

export const CredentialsSummaryRenderer: React.FC<CredentialsSummaryRendererProps> = ({
  credentialsData,
  credentialsStatus,
  locale = 'en-US',
  style,
  Footer,
  isSelectable,
  onClick,
  onSelect,
  credentialsSelected = {},
  recentlyAddedCredentials = {},
}: CredentialsSummaryRendererProps) => {
  const [credentialsPrepared, setCredentialsPrepared] = useState<CredentialPrepared[]>([]);
  const mapToDescriptorsSummaries = usePrepareCredentialSummary(locale);

  useEffect(() => {
    const credentials =
      'credentialsPrepared' in credentialsData
        ? credentialsData.credentialsPrepared
        : mapToDescriptorsSummaries(
            (credentialsData as CredentialsRawData).credentials,
            (credentialsData as CredentialsRawData).descriptors,
            (credentialsData as CredentialsRawData).issuers,
            locale,
          ).map((summary) => ({ summary }));

    setCredentialsPrepared((prev) =>
      JSON.stringify(prev) === JSON.stringify(credentials) ? prev : credentials,
    );
  }, [
    locale,
    mapToDescriptorsSummaries,
    credentialsData,
    credentialsSelected,
    recentlyAddedCredentials,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <List>
        {credentialsPrepared.map(({ summary }) => (
          <CredentialCard
            {...summary}
            key={summary.id}
            id={summary.id!}
            logo={summary.logo}
            title={summary.title}
            status={credentialsStatus[summary.id!]}
            selected={credentialsSelected[summary.id!]}
            subtitle={summary.subTitle}
            description={summary.summaryDetail}
            showTickElement={isSelectable}
            onClick={onClick}
            onSelect={onSelect}
            Footer={Footer}
            style={style}
            isNewCredential={recentlyAddedCredentials[summary.id!]}
          />
        ))}
      </List>
    </ThemeProvider>
  );
};
