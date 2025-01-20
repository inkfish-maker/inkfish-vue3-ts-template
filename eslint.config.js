/*
 * @Author: inkfish-maker
 * @Date: 2025-01-20 22:00:15
 * @LastEditors: inkfish-maker
 * @LastEditTime: 2025-01-20 23:40:30
 * @Description:
 */
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.cjs',
      'scripts/preinstall.js',
      'vue.config.js',
    ],
  },
]
