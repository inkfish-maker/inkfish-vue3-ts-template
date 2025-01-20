/*
 * @Author: inkfish-maker
 * @Date: 2025-01-20 22:34:30
 * @LastEditors: inkfish-maker
 * @LastEditTime: 2025-01-20 22:34:34
 * @Description: 统一包管理器工具为pnpm
 */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
