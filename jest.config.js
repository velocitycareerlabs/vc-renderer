const { resolve } = require('path');
const { defaults: tsjPreset } = require('ts-jest/presets/index');
const packagejson = require('./package.json');

module.exports = {
  ...tsjPreset,
  testEnvironment: resolve(__dirname, './test/setup/jsDomEnvironment.js'),
  transform: {
    '^.+\\.jsx$': ['babel-jest', { configFile: resolve(__dirname, './babel.config.jest.js') }],
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: resolve(__dirname, './tsconfig.json') }],
    '^.+\\.js$': ['babel-jest', { configFile: resolve(__dirname, './babel.config.jest.js') }],
    '^.+\\.ts$': ['ts-jest', { tsconfig: resolve(__dirname, './tsconfig.json') }],
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.svg$': './test/mocks/svgTransformer.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^react$': resolve(__dirname, 'node_modules/react'),
    '^react-dom$': resolve(__dirname, 'node_modules/react-dom'),
    '^.+\\.png$': '<rootDir>/test/mocks/fileMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^lodash-es$': 'lodash',
  },
  transformIgnorePatterns: [
    '/node_modules/.pnpm/(?!(jsonpath-plus|uuid|mui-one-time-password-input|mui-tel-input|lodash-es)@)',
    '/node_modules/(?!(\\.pnpm|jsonpath-plus|uuid|mui-one-time-password-input|mui-tel-input|lodash-es)/)',
  ],
  verbose: true,
  testTimeout: 20000,
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  displayName: packagejson.name,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: 'test-results.junit.xml',
        outputDirectory: '.',
        ancestorSeparator: ' › ',
        suiteNameTemplate: '{filepath}',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
  ],
};
