import {
	createPinia
} from 'pinia'
import {
	createPersistedState
} from 'pinia-plugin-persistedstate'

// 创建 pinia 实例
const pinia = createPinia()
// 使用持久化存储插件
pinia.use(createPersistUni())

/**
 * @description 自定义pinia持久化API存储方式为uni
 */
function createPersistUni() {
	return createPersistedState({
		storage: {
			getItem: uni.getStorageSync,
			setItem: uni.setStorageSync
		}
	})
}

// 默认导出，给 main.js 使用
export default pinia
