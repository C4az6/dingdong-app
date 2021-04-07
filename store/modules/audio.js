export default {
	state: {
		events: []		// 存放的都是Function的类型,直接加()就能调用了
	},
	// 同步操作写在这里
	mutations: {
		// 注册全局事件
		regEvent(state, event) {
			console.log('注册事件: ', state.events.length);
			state.events.push(event)
		},
		// 执行全局事件
		doEvent(state, params) {
			state.events.forEach(e=>{
				e(params)		// 这里传递的参数会被组件中的$on(res=>{})的res接收
			})
		}
	},
	// 异步操作写在这里
	actions: {
		// 分发注册全局事件
		$on({commit}, event) {
			console.log("receive event: ", event)
			commit('regEvent', event)
		},
		// 分发执行全局函数
		$emit({commit}, params) {
			commit('doEvent', params)
		}
	}
}