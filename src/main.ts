import { createSSRApp } from "vue"
import uviewPlus, { setConfig } from "uview-plus"
import Pinia from './configure/usePinia';
import App from "./App.vue"

// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在app.use(uview-plus)之后执行
setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    unit: 'rpx',
  },
  // 修改$u.props对象的属性
  props: {
    // 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
    radio: {
      size: 15,
    },
    // 其他组件属性配置
    // ......
  },
})
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)

  return {
    app,
		Pinia, // 此处必须将 Pinia 返回
  }
}
