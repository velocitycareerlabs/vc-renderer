import baseConfig from '../rollup.config.mjs';

export default {
  ...baseConfig,
  input: 'src/components/CredentialRendererPDF/index.tsx',
  output: {
    file: './dist/CredentialRendererPDF.integration.mjs',
    format: 'es',
  },
};
