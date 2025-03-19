import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: './dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['browser', 'module', 'main'],
    }),
    commonjs({ include: /node_modules/ }),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss(),
    svgr(),
    image({
      include: ['./src/assets/category/*', './src/assets/png/*', './src/assets/png/**/*'],
    }),
  ],
  external: [
    'react',
    'react-dom',
    'typescript',
    'react-i18next',
    'i18next',
    '@mui/material',
    '@mui/system',
    '@emotion/react',
    '@emotion/styled',
    '@mui/icons-material',
    '@react-pdf/renderer',
  ],
};
