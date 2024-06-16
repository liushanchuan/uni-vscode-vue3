import {
	defineStore
} from 'pinia'

const userStore = defineStore('user', {
	state: () => {
		return {
			id: '',
			token: '',
			role: '',
			otherInfo: {
				sex: '',
				name: ''
			}
		}
	},
	getters: {},
	actions: {},
	persist: {
		storage: { // 修改存储方式
			getItem: uni.getStorageSync,
			setItem: uni.setStorageSync
		},
		key: 'userInfo', // 本地存储key值
		paths: ['otherInfo.name', 'id'] // 指定持久化的数据，不写默认持久化整个state
	}
})
export {
	userStore
}
