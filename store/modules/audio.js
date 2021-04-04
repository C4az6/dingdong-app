export default {
	state: {
		events: []
	},
	// 同步操作写在这里
	mutations: {
		// 注册全局事件
		regEvent(state, event) {
			state.events.push(event)
		}
	},
	// 异步操作写在这里
	actions: {
		// 分发注册全局事件
		$on({commit, event}) {
			console.log("receive event: ", event)
			commit('regEvent')
		}
	}
}