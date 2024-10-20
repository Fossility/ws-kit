import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    ignores: [
      'coverage/',
      'public/',
      'dist/',
      'pnpm-lock.yaml',
      'pnpm-workspaces.yaml',
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier.recommended,
  sonarjs.configs.recommended,
  {
    plugins: {
      sonarjs,
    },
  },
];
