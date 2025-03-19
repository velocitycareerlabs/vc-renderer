import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useVcsMapToDescriptorsSummaries } from '../../hooks';
import { theme } from '../../theme';
import { CredentialCard } from './components/CredentialCard';
import { VcsSummaryRendererProps, VcsRawData, VcPrepared } from '../../types';
import { List } from './styles';

/**
 * Renders credentials summary cards
 * @param {VcsData} vcsData - expects or raw data object with vcs, descriptors and issuers keys or prepered data object with vcsPrepared key
 * @param {VcsStatus} vcsStatus - object where key is credential id and value is credential status
 * @param {string} locale - locale string
 * @param {Styles} style - object with styles
 * @param {React.FC} Footer - card actions component, for example share button
 * @param {boolean} isSelectable - if true, cards will have a tick element
 * @param {Function} onClick - function to handle card click and pass to handler vc id
 * @param {Function} onSelect - function to handle card select and pass to handler vc id
 * @param {Dictionary<boolean>} vcsSelected - object where key is credential id and value is boolean
 * @param {Dictionary<boolean>} vcsRecentlyAdded - object where key is credential id and value is boolean
 * @returns - React.FC
 */

export const VcsSummaryRenderer: React.FC<VcsSummaryRendererProps> = ({
  vcsData,
  vcsStatus,
  locale,
  style,
  Footer,
  isSelectable,
  onClick,
  onSelect,
  vcsSelected = {},
  vcsRecentlyAdded = {},
}: VcsSummaryRendererProps) => {
  const [vcsPrepared, setVcsPrepared] = useState<VcPrepared[]>([]);
  const mapToDescriptorsSummaries = useVcsMapToDescriptorsSummaries();

  useEffect(() => {
    const vcs =
      'vcsPrepared' in vcsData
        ? vcsData.vcsPrepared
        : mapToDescriptorsSummaries(
            (vcsData as VcsRawData).vcs,
            (vcsData as VcsRawData).descriptors,
            (vcsData as VcsRawData).issuers,
            locale,
          ).map((summary) => ({ summary }));

    setVcsPrepared((prev) => (JSON.stringify(prev) === JSON.stringify(vcs) ? prev : vcs));
  }, [locale, mapToDescriptorsSummaries, vcsData, vcsSelected, vcsRecentlyAdded]);

  return (
    <ThemeProvider theme={theme}>
      <List>
        {vcsPrepared.map(({ summary }) => (
          <CredentialCard
            {...summary}
            key={summary.id}
            id={summary.id!}
            logo={summary.logo}
            title={summary.title}
            status={vcsStatus[summary.id!]}
            selected={vcsSelected[summary.id!]}
            subtitle={summary.subTitle}
            description={summary.summaryDetail}
            showTickElement={isSelectable}
            onClick={onClick}
            onSelect={onSelect}
            Footer={Footer}
            style={style}
            isNewCredential={vcsRecentlyAdded[summary.id!]}
          />
        ))}
      </List>
    </ThemeProvider>
  );
};
