import { fixupConfigRules } from '@eslint/compat';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig([
  // eslint-config-next's react, import, and jsx-a11y plugins still call
  // rule-context APIs that ESLint 10 removed (e.g. context.getFilename()).
  // fixupConfigRules shims those APIs back in.
  ...fixupConfigRules([...nextVitals, ...nextTs]),
  {
    // Next only enables a handful of jsx-a11y rules; turn on the full
    // recommended set. The plugin itself is registered by nextVitals above.
    files: ['**/*.{jsx,tsx}'],
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  {
    // The RPG ipsum page still needs these exceptions (lowercase component
    // name, plain <a> to "/", unescaped apostrophes). Remove them once that
    // page is cleaned up.
    files: ['pages/rpgIpsum.tsx', 'components/ipsum/**'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
