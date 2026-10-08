import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createTypeScriptReactConfig, testFilesRules } from './tooling/eslint-shared.config.mjs';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default createTypeScriptReactConfig({
  tsconfigPath: `${__dirname}/tsconfig.json`,
  ignores: [
    'secrets.js',
    '.prettierrc.js',
    'babel.config.jest.js',
    'rollup.config.mjs',
    'tooling/**',
    'jest.config.js',
    'eslint.config.mjs',
    'test/**',
  ],
  complexity: 6,
  useImmerExceptions: true,
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  additionalConfigs: [
    // Test files override
    {
      files: ['test/**/*'],
      languageOptions: {
        parserOptions: {
          project: [`${__dirname}/tsconfig.test.json`],
        },
      },
    },
    // Config files override
    {
      files: ['setupTests.ts'],
      languageOptions: {
        parserOptions: {
          project: [`${__dirname}/tsconfig.config.json`],
        },
      },
    },
    // Test files rules override
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/test/**/*.ts', '**/tests/**/*.ts'],
      rules: testFilesRules,
    },
  ],
});
