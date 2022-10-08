import type { RouterOptions } from '@nuxt/schema'
import { resolve } from 'path'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterOptions>{
  scrollBehavior: () => ({ left: 0, top: 0 }),
}
