const { resolve } = require('path');
const { defaults: tsjPreset } = require('ts-jest/presets/index.js');
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
    '^.+\\.png$': '<rootDir>/test/mocks/fileMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^lodash-es$': 'lodash',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(jsonpath-plus)|(uuid)|(mui-one-time-password-input)|(mui-tel-input)/)',
    '/node_modules/(?!(lodash-es)/)',
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
        outputName: `${packagejson.name.split('/')[1]}-junit.xml`,
        outputDirectory: '<rootDir>/../../test-results',
        ancestorSeparator: ' › ',
        suiteNameTemplate: '{filepath}',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
  ],
};
