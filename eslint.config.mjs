export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Add your custom rules here
  },
};

// import { FlatCompat } from '@eslint/eslintrc';
// import eslintConfigNext from 'eslint-config-next';
// import eslintPluginPrettier from 'eslint-plugin-prettier';
// import eslintPluginReact from 'eslint-plugin-react';
// import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// export default [
//   ...compat.config({
//     extends: [
//       'next',
//       'next/core-web-vitals',
//       'plugin:react/recommended',
//       'plugin:react-hooks/recommended',
//       'plugin:prettier/recommended'
//     ],
//     plugins: ['react', 'react-hooks', 'prettier'],
//     rules: {
//       'prettier/prettier': 'error',
//       // Add your custom rules here
//     },
//   }),
// ];

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
// import prettierPlugin from "eslint-plugin-prettier";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals"),
//   {
//     plugins: {
//       prettier: prettierPlugin,
//     },
//     rules: {
//       "react/no-unescaped-entities": "error",
//       "prettier/prettier": "error",
//     },
    
//     // plugins: {
//     //   prettier: pluginObject
//     // },
//   },
// ];

// export default eslintConfig;

// // eslint.config.mjs
// export default {
//   extends: ["next", "next/core-web-vitals"],
//   rules: {
//     semi: "off",
//     quotes: "off"
//   }
// };