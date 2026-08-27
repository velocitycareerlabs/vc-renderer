import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

describe('CredentialRendererPDF integration', () => {
  it('renders verified education and employment credentials to a PDF', () => {
    const packageRoot = resolve(__dirname, '..');
    const temporaryDirectory = mkdtempSync(
      resolve(packageRoot, 'node_modules/.credential-renderer-pdf-'),
    );
    const esModuleBundle = resolve(temporaryDirectory, 'CredentialRendererPDF.integration.mjs');

    let output: string;
    try {
      execFileSync(
        'pnpm',
        [
          'exec',
          'rollup',
          '--config',
          'test/rollup.CredentialRendererPDF.config.mjs',
          '--file',
          esModuleBundle,
        ],
        {
          cwd: packageRoot,
          stdio: 'pipe',
        },
      );
      output = execFileSync(
        process.execPath,
        [resolve(__dirname, 'renderCredentialRendererPDF.mjs')],
        {
          cwd: packageRoot,
          encoding: 'utf8',
          env: {
            ...process.env,
            CREDENTIAL_RENDERER_PDF_BUNDLE: esModuleBundle,
          },
        },
      );
    } finally {
      rmSync(temporaryDirectory, { force: true, recursive: true });
    }

    const renderedReport = JSON.parse(output) as {
      header: string;
      length: number;
      pageCount: number;
      text: string;
    };

    expect(renderedReport).toMatchObject({
      header: '%PDF-',
      pageCount: 2,
    });
    expect(renderedReport.length).toBeGreaterThan(0);
    expect(renderedReport.text).toContain('Synthetic Applicant');
    expect(renderedReport.text).toContain('Synthetic Degree');
    expect(renderedReport.text).toContain('Synthetic Employment');
    expect(renderedReport.text.match(/ResultVerified/g)).toHaveLength(2);
  }, 60_000);
});
