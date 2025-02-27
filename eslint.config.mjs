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

// eslint.config.mjs
export default {
  extends: ["next", "next/core-web-vitals"],
  rules: {
    semi: "off",
    quotes: "off"
  }
};