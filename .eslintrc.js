module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'autofix'],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'simple-import-sort/exports': 'error',
    'autofix/no-debugger': 'error',
    'vue/no-v-for-template-key': 'off',
  },
}
