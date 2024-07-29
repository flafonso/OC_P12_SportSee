module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["react-app"],
  rules: {
    "semi": ["error", "always"]
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
}
