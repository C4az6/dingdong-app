export default {
	state: {
		events: []		// 存放的都是Function的类型,直接加()就能调用了
	},
	// 同步操作写在这里
	mutations: {
		// 注册全局事件
		regEvent(state, event) {
			state.events.push(event)
		},
		// 执行全局事件
		doEvent(state, params) {
			state.events.forEach(e=>{
				e(params)		// 这里传递的参数会被组件中的$on(res=>{})的res接收
			})
		},
		//注销事件
		removeEvent(state, event) {
			let index = state.events.findIndex(item=>{
				return item === event
			})
			index !== -1 && state.events.splice(index, 1)
		}
	},
	// 异步操作写在这里
	actions: {
		// 分发注册全局事件
		$on({commit}, event) {
			commit('regEvent', event)
		},
		// 分发执行全局函数
		$emit({commit}, params) {
			commit('doEvent', params)
		},
		// 分发注销全局事件
		$off({commit}, event) {
			console.log("注销全局事件: ", event)
			commit('removeEvent', event)
		}
	}
}