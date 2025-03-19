import React, { useMemo } from 'react';
import { get } from 'lodash-es';
import { PDFFile, JPGFile, PNGFile, SVGFile, FallbackFile } from '../../../assets/svg';
import { Container, FieldName, AttachmentItem } from './styles';

export const getFileName = (attachment: any) => {
  if (attachment.name) {
    return attachment.name;
  }
  const urlSplit = attachment.id.split('/');
  const fileName = urlSplit[urlSplit.length - 1];
  if (/^data:/.test(attachment.id)) {
    return `base64 File(${attachment.mediaType.split('/')[1]})`;
  }
  if (/\/[^/]+\.[a-zA-Z0-9]+$/.test(attachment.id)) {
    return fileName;
  }
  return `File(${fileName}).${attachment.mediaType.split('/')[1]}`;
};

export const getIcon = (mediaType: string) => {
  switch (mediaType) {
    case 'application/pdf':
      return <PDFFile width={53} height={48} />;
    case 'image/jpeg':
      return <JPGFile width={53} height={48} />;
    case 'image/png':
      return <PNGFile width={53} height={48} />;
    case 'image/svg+xml':
      return <SVGFile width={53} height={48} />;
    default:
      return <FallbackFile width={53} height={48} />;
  }
};

export const getUrl = (relatedResource: any) => {
  const pdfRegex = /^data:(application\/pdf);(base64,)?/;
  if (pdfRegex.test(relatedResource.id)) {
    const base64Data = relatedResource.id.replace(pdfRegex, '');
    const blob = new Blob([Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0))], {
      type: relatedResource.mediaType,
    });
    return URL.createObjectURL(blob);
  }
  return relatedResource.id;
};

export const Attachments: React.FC<{
  vcPrepared: any;
}> = ({ vcPrepared }) => {
  const attachments = useMemo(
    () => get(vcPrepared, 'summary.credential.relatedResource', []),
    [vcPrepared],
  );
  return attachments.length > 0 ? (
    <Container>
      <FieldName display="block" variant="pM">
        Attachments
      </FieldName>
      {attachments.map((attachment) => (
        <AttachmentItem
          key={attachment.id}
          startIcon={getIcon(attachment.mediaType)}
          onClick={() => {
            window.open(getUrl(attachment), '_blank');
          }}
          aria-label="credential-attachment"
        >
          {getFileName(attachment)}
        </AttachmentItem>
      ))}
    </Container>
  ) : null;
};
