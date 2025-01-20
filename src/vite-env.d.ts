/*
 * @Author: inkfish-maker
 * @Date: 2025-01-20 16:04:24
 * @LastEditors: inkfish-maker
 * @LastEditTime: 2025-01-20 23:34:32
 * @Description:
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<object, object, any>
  export default component
}
