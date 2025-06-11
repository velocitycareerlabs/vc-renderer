import { useMemo } from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import { get } from 'lodash-es';
import { getFileName } from '../../../common/Attachments';
import PNGFile from '../../../../assets/png/png-file.png';
import PDFFile from '../../../../assets/png/pdf-file.png';
import JPGFile from '../../../../assets/png/jpg-file.png';
import SVGFile from '../../../../assets/png/svg-file.png';
import FallbackFile from '../../../../assets/png/fallback-file.png';
import { style } from './styles';

export const Attachments = ({ credentialsPrepared }) => {
  const attachments = useMemo(
    () => get(credentialsPrepared, 'summary.credential.relatedResource', []),
    [credentialsPrepared],
  );
  return attachments.length > 0 ? (
    <View style={style.container} wrap={false}>
      <Text style={style.label}>Attachments</Text>
      {attachments.map((attachment) => (
        <View key={attachment.id} style={style.attachment}>
          <Image src={getIconSrc(attachment.mediaType)} style={style.image} />
          <a href={attachment.id} target="_blank" rel="noreferrer">
            <Text style={style.text}>{getFileName(attachment)}</Text>
          </a>
        </View>
      ))}
    </View>
  ) : null;
};

export const getIconSrc = (mediaType: string) => {
  switch (mediaType) {
    case 'application/pdf':
      return PDFFile;
    case 'image/jpeg':
      return JPGFile;
    case 'image/png':
      return PNGFile;
    case 'image/svg+xml':
      return SVGFile;
    default:
      return FallbackFile;
  }
};
