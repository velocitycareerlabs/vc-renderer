/**
 * Root ESLint configuration
 *
 * This module provides:
 * 1. Default config for server/package JavaScript files (used by servers/, packages/, etc.)
 * 2. Shared exports for TypeScript + React apps via createTypeScriptReactConfig()
 * 3. Reusable rule sets and plugin configurations
 */
import js from '@eslint/js';
import globals from 'globals';
import { fixupPluginRules } from '@eslint/compat';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import betterMutation from 'eslint-plugin-better-mutation';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

// =============================================================================
// SHARED EXPORTS - for use by apps, packages, and samples
// =============================================================================

// Re-export core modules
export {
  js,
  globals,
  fixupPluginRules,
  prettierPlugin,
  prettierConfig,
  importPlugin,
  betterMutation,
  reactPlugin,
  reactHooksPlugin,
  tseslint,
  unusedImports,
};

// Base plugins object for server/package JS files
export const basePlugins = {
  prettier: prettierPlugin,
  'better-mutation': fixupPluginRules(betterMutation),
  import: fixupPluginRules(importPlugin),
};

// Common plugins for React apps
export const sharedReactPlugins = {
  ...basePlugins,
  react: reactPlugin,
  'react-hooks': fixupPluginRules(reactHooksPlugin),
  'unused-imports': unusedImports,
};

// Common React rules
export const reactRules = {
  ...reactPlugin.configs.recommended.rules,
  ...reactPlugin.configs['jsx-runtime'].rules,
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/require-default-props': 'off',
  'react/prop-types': 'off',
  'react/jsx-props-no-spreading': 0,
  'react/react-in-jsx-scope': 'off',
  'react/display-name': 'off',
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  // Additional React rules from airbnb
  'react/no-array-index-key': 'error',
  'react/no-string-refs': 'error',
  'react/self-closing-comp': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/no-is-mounted': 'error',
  'react/no-deprecated': 'error',
  'react/no-unknown-property': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
  'react/no-danger': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-find-dom-node': 'error',
  'react/void-dom-elements-no-children': 'error',
  'react/no-typos': 'error',
  'react/no-access-state-in-setstate': 'error',
  'react/no-this-in-sfc': 'error',
  'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
  'react/jsx-boolean-value': ['error', 'never', { always: [] }],
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' },
  ],
};

// Common TypeScript rules
export const typescriptRules = {
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { variables: false, classes: true, functions: true },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unsafe-function-type': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-empty-object-type': 'off',
};

// =============================================================================
// SHARED AIRBNB-BASE RULES - used by both React apps and server/package configs
// =============================================================================

// Best practices from airbnb-base
export const bestPracticesRules = {
  'block-scoped-var': 'error',
  'grouped-accessor-pairs': 'error',
  'max-classes-per-file': ['error', 1],
  'no-alert': 'warn',
  'no-case-declarations': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-return-await': 'error',
  'no-self-assign': ['error', { props: true }],
  'no-unused-labels': 'error',
  'no-useless-backreference': 'error',
  'no-unreachable-loop': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'no-else-return': ['error', { allowElseIf: false }],
  curly: ['error', 'all'],
  'default-case': ['error', { commentPattern: '^no default$' }],
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': ['error', { allowKeywords: true }],
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-implied-eval': 'error',
  'no-iterator': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-proto': 'error',
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  radix: 'error',
  yoda: 'error',
  'array-callback-return': ['error', { allowImplicit: true }],
  'consistent-return': 'error',
  'no-constructor-return': 'error',
  'no-empty-pattern': 'error',
  'no-redeclare': 'error',
  'no-await-in-loop': 'error',
  'no-constant-condition': 'error',
  'no-empty-function': [
    'error',
    { allow: ['arrowFunctions', 'functions', 'methods'] },
  ],
  'no-multi-str': 'error',
  'no-octal-escape': 'error',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],
  'no-useless-escape': 'error',
  'guard-for-in': 'error',
  'no-caller': 'error',
  'no-global-assign': 'error',
  strict: ['error', 'never'],
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  'no-restricted-globals': [
    'error',
    { name: 'isFinite', message: 'Use Number.isFinite instead' },
    { name: 'isNaN', message: 'Use Number.isNaN instead' },
  ],
};

// Variables rules from airbnb-base
export const variablesRules = {
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-undef-init': 'error',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
};

// ES6 rules from airbnb-base
export const es6Rules = {
  'constructor-super': 'error',
  'no-class-assign': 'error',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-new-symbol': 'error',
  'no-this-before-super': 'error',
  'require-yield': 'error',
  'no-var': 'error',
  'prefer-const': [
    'error',
    { destructuring: 'any', ignoreReadBeforeAssign: true },
  ],
  'prefer-template': 'error',
  'object-shorthand': [
    'error',
    'always',
    { ignoreConstructors: false, avoidQuotes: true },
  ],
  'arrow-body-style': [
    'error',
    'as-needed',
    { requireReturnForObjectLiteral: false },
  ],
  'prefer-arrow-callback': [
    'error',
    { allowNamedFunctions: false, allowUnboundThis: true },
  ],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'no-useless-constructor': 'error',
  'no-duplicate-imports': 'off', // handled by import/no-duplicates
  'prefer-numeric-literals': 'error',
  'rest-spread-spacing': ['error', 'never'],
  'symbol-description': 'error',
};

// Style rules from airbnb-base
export const styleRules = {
  'no-lonely-if': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-array-constructor': 'error',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'one-var': ['error', 'never'],
  'prefer-object-spread': 'error',
  'new-cap': [
    'error',
    {
      newIsCap: true,
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],
  'func-names': 'warn',
  camelcase: [
    'error',
    { properties: 'never', ignoreDestructuring: false, allow: ['^en_us$'] },
  ],
  'spaced-comment': ['error', 'always', { markers: ['=', '!', '#', '/'] }],
  'no-bitwise': 'error',
  'no-continue': 'error',
  'no-multi-assign': 'error',
  'no-plusplus': 'error',
  'operator-assignment': ['error', 'always'],
  'prefer-exponentiation-operator': 'error',
  'unicode-bom': ['error', 'never'],
  'class-methods-use-this': 'error',
  'comma-dangle': [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    },
  ],
};

// Node.js rules from airbnb-base
export const nodeRules = {
  'no-buffer-constructor': 'error',
  'no-new-require': 'error',
  'no-path-concat': 'error',
};

// Common import rules (shared between React apps and server/package configs)
export const commonImportRules = {
  'import/order': ['error', { 'newlines-between': 'never' }],
  'import/no-cycle': ['error', { maxDepth: 1 }],
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'import/no-mutable-exports': 'error',
  'import/first': 'error',
  'import/no-duplicates': 'error',
  'import/extensions': [
    'error',
    'ignorePackages',
    { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
  ],
  'import/newline-after-import': 'error',
  'import/no-amd': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-absolute-path': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/no-named-default': 'error',
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/default': 'error',
  'import/namespace': 'error',
  'import/no-dynamic-require': 'warn',
  'import/export': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/e2e/**/*.js',
        '**/e2e/**/*.ts',
        '**/e2e/**/*.jsx',
        '**/e2e/**/*.tsx',
        '**/test/**/*.js',
        '**/test/**/*.ts',
        '**/test/**/*.jsx',
        '**/test/**/*.tsx',
        '**/tests/**/*.js',
        '**/tests/**/*.ts',
        '**/tests/**/*.jsx',
        '**/tests/**/*.tsx',
        '**/setupTests.ts',
        '**/setupTests.js',
        '**/*.config.js',
        '**/*.config.ts',
        '**/*.config.mjs',
        '**/*.config.cjs',
      ],
    },
  ],
};

// Prettier and debugger rules
export const prettierRules = {
  'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
  'no-debugger': 'error',
};

// Common overrides (rules intentionally disabled from airbnb)
export const airbnbOverrides = {
  'no-param-reassign': 0,
  'no-use-before-define': 0,
};

// Common formatting rules
export const formattingRules = {
  'max-depth': ['error', { max: 2 }],
  'max-nested-callbacks': ['error', 3],
  'max-len': ['error', { code: 150 }],
  quotes: [2, 'single', { avoidEscape: true }],
  'no-underscore-dangle': ['error', { allowAfterThis: true, allow: ['_id'] }],
  'prefer-destructuring': [
    'error',
    { array: false, object: true },
    { enforceForRenamedProperties: false },
  ],
};

// Common code style rules for React apps
export const reactCodeStyleRules = {
  ...prettierRules,
  ...formattingRules,
  ...airbnbOverrides,
  ...bestPracticesRules,
  ...variablesRules,
  ...es6Rules,
  ...styleRules,
  'global-require': 0,
  'object-curly-newline': 'off',
  'no-restricted-exports': 'off',
  'no-console': ['error', { allow: ['warn', 'error', 'dir', 'info'] }],
};

// Common mutation rules
export const mutationRules = {
  'better-mutation/no-mutation': [
    'error',
    {
      commonjs: true,
      allowThis: true,
      reducers: ['reduce', 'addHook', 'decorate'],
    },
  ],
  'better-mutation/no-mutating-functions': 'error',
  'better-mutation/no-mutating-methods': 'error',
};

// Mutation rules with immer/ref exceptions
export const mutationRulesWithExceptions = {
  'better-mutation/no-mutation': [
    'error',
    {
      commonjs: true,
      allowThis: true,
      reducers: ['reduce', 'addHook', 'decorate'],
      exceptions: [
        { object: 'draftState' }, // immer
        { property: 'current' }, // react ref
      ],
    },
  ],
  'better-mutation/no-mutating-functions': 'error',
  'better-mutation/no-mutating-methods': 'error',
};

// Arrow function style rules (core ESLint only)
export const arrowFunctionRules = {
  'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
};

// Unused imports rules
export const unusedImportsRules = {
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],
};

// Common import rules for React apps
export const reactImportRules = {
  ...commonImportRules,
  'import/prefer-default-export': 0,
};

// Test files override rules
export const testFilesRules = {
  'better-mutation/no-mutating-functions': 'off',
  'better-mutation/no-mutating-methods': 'off',
  'better-mutation/no-mutation': 'off',
  'max-nested-callbacks': ['error', 8],
  'import/order': 'off',
  'prefer-regex-literals': 'off',
  'default-param-last': 'off',
  'max-classes-per-file': 'off',
};

// Common ignores
export const commonIgnores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',
];

// Test file patterns
export const testFilePatterns = [
  '**/setupTestEnv.js',
  '**/*.test.js',
  '**/*.test.jsx',
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/test/**/*.js',
  '**/test/**/*.ts',
  '**/tests/**/*.js',
  '**/tests/**/*.ts',
];

export const createTypeScriptReactConfig = (options = {}) => {
  const {
    ignores = [],
    globals: additionalGlobals = {},
    tsconfigPath = './tsconfig.json',
    importResolverProject,
    rules: additionalRules = {},
    complexity = 10,
    useImmerExceptions = false,
    additionalConfigs = [],
    importSettings = {},
  } = options;

  const selectedMutationRules = useImmerExceptions
    ? mutationRulesWithExceptions
    : mutationRules;

  return tseslint.config(
    // Ignore patterns
    {
      ignores: [...commonIgnores, ...ignores],
    },

    // Base configurations
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,

    // TypeScript + React configuration (TypeScript files only)
    {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        globals: {
          ...globals.browser,
          ...globals.es2020,
          ...globals.jest,
          ...additionalGlobals,
        },
        parserOptions: {
          project: tsconfigPath,
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: sharedReactPlugins,
      settings: {
        react: { version: '18.2' },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          ...(importResolverProject
            ? { typescript: { project: [importResolverProject] } }
            : {}),
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            paths: ['./'],
          },
        },
        ...(importSettings.ignore
          ? { 'import/ignore': importSettings.ignore }
          : {}),
      },
      rules: {
        ...reactRules,
        ...typescriptRules,
        ...reactCodeStyleRules,
        ...selectedMutationRules,
        ...arrowFunctionRules,
        ...unusedImportsRules,
        ...reactImportRules,
        complexity: ['error', complexity],
        ...additionalRules,
      },
    },

    // JavaScript + React configuration (JS files without TypeScript project parsing)
    {
      files: ['**/*.js', '**/*.jsx'],
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        globals: {
          ...globals.browser,
          ...globals.es2020,
          ...globals.jest,
          ...additionalGlobals,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: sharedReactPlugins,
      settings: {
        react: { version: '18.2' },
        'import/resolver': {
          ...(importResolverProject
            ? { typescript: { project: [importResolverProject] } }
            : {}),
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            paths: ['./'],
          },
        },
        ...(importSettings.ignore
          ? { 'import/ignore': importSettings.ignore }
          : {}),
      },
      rules: {
        ...reactRules,
        ...reactCodeStyleRules,
        ...selectedMutationRules,
        ...arrowFunctionRules,
        ...unusedImportsRules,
        ...reactImportRules,
        complexity: ['error', complexity],
        ...additionalRules,
      },
    },

    // Test files override
    {
      files: testFilePatterns,
      rules: testFilesRules,
    },

    // Additional configs
    ...additionalConfigs,
  );
};

