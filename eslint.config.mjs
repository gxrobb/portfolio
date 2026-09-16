import { fixupConfigRules } from '@eslint/compat';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  // eslint-config-next's react, import, and jsx-a11y plugins still call
  // rule-context APIs that ESLint 10 removed (e.g. context.getFilename()).
  // fixupConfigRules shims those APIs back in.
  ...fixupConfigRules([...nextVitals, ...nextTs]),
  {
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
