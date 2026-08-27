import { Buffer } from 'node:buffer';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import { inflateSync } from 'node:zlib';
import React from 'react';
import { Document, renderToBuffer } from '@react-pdf/renderer';

const bundlePath = process.env.CREDENTIAL_RENDERER_PDF_BUNDLE;
if (!bundlePath) {
  throw new Error('CREDENTIAL_RENDERER_PDF_BUNDLE is required');
}

const { CredentialRendererPDF } = await import(pathToFileURL(bundlePath).href);

const extractTextFromPdf = (buffer) => {
  const pdfSource = buffer.toString('latin1');
  const streamPattern = /stream\r?\n([\s\S]*?)\r?\nendstream/g;

  return [...pdfSource.matchAll(streamPattern)]
    .map((match) => {
      try {
        return inflateSync(Buffer.from(match[1], 'latin1')).toString('latin1');
      } catch {
        return '';
      }
    })
    .flatMap((stream) => [...stream.matchAll(/BT([\s\S]*?)ET/g)])
    .flatMap((match) => [...match[1].matchAll(/<([\da-f]+)>/gi)])
    .map((match) => Buffer.from(match[1], 'hex').toString('utf8'))
    .join('');
};

const createCredential = (id, title) => ({
  details: [
    {
      isImgLink: false,
      label: 'Result',
      schema: {},
      value: 'Verified',
    },
  ],
  summary: {
    credential: {},
    id,
    issuerLogo: '',
    issuerName: 'Synthetic Issuer',
    logo: '',
    subTitle: 'Synthetic credential',
    summaryDetail: 'August 26, 2026',
    title,
    type: [],
  },
});

const credentialsPrepared = [
  createCredential('education', 'Synthetic Degree'),
  createCredential('employment', 'Synthetic Employment'),
];
const buffer = await renderToBuffer(
  React.createElement(
    Document,
    null,
    React.createElement(CredentialRendererPDF, {
      applicantName: 'Synthetic Applicant',
      appLogo: null,
      categoriesTitle: {
        education: 'Education',
        employment: 'Employment History',
      },
      credentialsData: { credentialsPrepared },
      credentialsStatus: {
        education: 'Verified',
        employment: 'Verified',
      },
      userName: 'Synthetic Verifier',
    }),
  ),
);

process.stdout.write(
  JSON.stringify({
    header: buffer.subarray(0, 5).toString(),
    length: buffer.length,
    pageCount: (buffer.toString('latin1').match(/\/Type\s*\/Page\b/g) ?? [])
      .length,
    text: extractTextFromPdf(buffer),
  }),
);
