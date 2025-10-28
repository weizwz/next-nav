/** @type {import('prettier').Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss", "@ianvs/prettier-plugin-sort-imports"],
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  semi: false,
  trailingComma: "none",
  bracketSpacing: true,
  endOfLine: "lf",
  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    "^react$", // React 核心
    "^next", // Next.js 相关
    "<THIRD_PARTY_MODULES>", // 其他第三方依赖
    "^@/components/(.*)$", // 自定义路径别名
    "^[./]" // 相对路径
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
