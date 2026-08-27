import baseConfig from '../rollup.config.js';

export default {
  ...baseConfig,
  input: 'src/components/CredentialRendererPDF/index.tsx',
  output: {
    file: './dist/CredentialRendererPDF.integration.mjs',
    format: 'es',
  },
};
