# @velocitycareerlabs/vc-renderer

React components and hooks for displaying verifiable credential summaries, details, and PDF pages. Extracted from the Velocity Career Labs monorepo; see [EXTRACTION.md](EXTRACTION.md) for provenance.

## Develop locally

Requires Node.js 22 or newer and pnpm 10.34.5 (CI uses Node.js 24).

```sh
git clone https://github.com/velocitycareerlabs/vc-renderer.git
cd vc-renderer
corepack enable
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
pnpm test:ci
```

The build creates CommonJS and ES module bundles plus TypeScript declarations in `dist/`. The ES module bundle targets browser bundlers; direct Node.js consumers should use the CommonJS entry because Material UI 6 uses directory imports that native Node.js ESM does not resolve. The tests include a real React PDF rendering test that validates the generated PDF header, page count, and extracted text.

## Use in another application

This repository does not publish an npm package. The manifest stays `private: true`. Build a local package archive and install that archive in your consuming application:

```sh
# In this repository (prepack builds dist automatically):
pnpm pack

# In your application, use the path to the generated archive:
pnpm add /path/to/vc-renderer/velocitycareerlabs-vc-renderer-0.5.0-build.tgz
```

Install compatible peer dependencies listed in `package.json`, including React 18, Material UI 6, Emotion, i18next, and React PDF 4. Peer dependencies are also declared as development dependencies so this repository can build and test independently.

## Public exports

| Export | Purpose |
| --- | --- |
| `CredentialsSummaryRenderer` | Credential cards and selection interactions |
| `CredentialDetailsRenderer` | Full credential details |
| `CredentialRendererPDF` | A4 credential pages for a React PDF document |
| `usePrepareCredentialSummary` | Map credentials and descriptors to summaries |
| `usePrepareCredentialDetails` | Map credentials and descriptors to summaries and labelled details |
| `CredentialStatusEnum` | Status values used by renderer components |

## Data contract

Raw renderer input uses these dictionaries:

```ts
const credentialsData = {
  credentials, // Decoded credential objects
  descriptors, // Display descriptors indexed by credential.type[0]
  issuers, // Issuer profiles indexed by credential.issuer.id
};
```

Display descriptors select credential fields through JSONPath and supply labels and formatting hints. The renderer also accepts prepared data as `{ credentialsPrepared }`. Category titles, statuses, sidebar content, and PDF footer content are indexed by credential ID.

## Render a PDF

`CredentialRendererPDF` returns pages. The consuming application owns the enclosing `Document` and the download/print controls:

```tsx
import { Document, PDFDownloadLink } from '@react-pdf/renderer';
import { CredentialRendererPDF } from '@velocitycareerlabs/vc-renderer';

const report = (
  <Document>
    <CredentialRendererPDF
      credentialsData={credentialsData}
      applicantName={applicantName}
      userName={verifierName}
      appLogo={appLogoUrl}
      categoriesTitle={categoriesByCredentialId}
      credentialsStatus={statusesByCredentialId}
      sidebarItems={sidebarByCredentialId}
      footerItems={footerByCredentialId}
      locale="en-US"
      imageProxyUrl="https://your-api.example/download-image?url="
    />
  </Document>
);

<PDFDownloadLink document={report} fileName="credentials.pdf">
  {({ loading, error, url }) =>
    loading ? 'Generating…' : error || !url ? 'PDF unavailable' : 'Download PDF'
  }
</PDFDownloadLink>;
```

The renderer formats supplied data; your application supplies verification results and any server integrations. Verify My Creds-specific cover pages, explanatory pages, API controllers, and download/print controls remain in the monorepo.

## Images and attachments

Credential and issuer logos whose URLs end in `.svg` are converted to PNG data URLs in the browser. Other logos can use the optional image proxy prefix. Attachment entries display filenames and icons; this library does not merge attached documents into the generated PDF.

## License

[Apache-2.0](LICENSE). See [NOTICE](NOTICE).
