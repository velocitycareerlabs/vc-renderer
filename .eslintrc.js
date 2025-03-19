const eslintConfig = require('../../.eslintrc');

module.exports = {
  ...eslintConfig,
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ].concat(eslintConfig.extends),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ...eslintConfig.parserOptions,
  },
  plugins: eslintConfig.plugins.concat([
    '@typescript-eslint',
    'unused-imports',
    'import',
  ]),
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', 'd.ts'],
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        paths: ['./'],
      },
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  overrides: [
    {
      files: ["test/**/*", "babel.config.jest.js"],
      parserOptions: {
        project: ["tsconfig.test.json"],
      },
    },
    {
      files: ["rollup.config.js", "jest.config.js", "setupTests.ts", ".prettierrc.js",],
      parserOptions: {
        project: ["tsconfig.config.json"],
      },
    },
  ],
  ignorePatterns: ['secrets.js', 'dist', '.eslintrc.js'],
  rules: {
    ...eslintConfig.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'autofix/no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'dir', 'info'] }],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { variables: false, classes: true, functions: true },
    ],
    'no-param-reassign': 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true, allow: ['_id'] }],
    quotes: [2, 'single', { avoidEscape: true }],
    'no-use-before-define': 0,
    'global-require': 0,
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'better-mutation/no-mutation': [
      'error',
      {
        commonjs: true,
        allowThis: true,
        reducers: ['reduce', 'addHook', 'decorate'],
        exceptions: [
          { object: 'draftState' },
          { property: 'current' },
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    complexity: ['error', 10],
  },
};
