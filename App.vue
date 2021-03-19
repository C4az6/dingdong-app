<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-NVUE
			// 加载公共图标库 只有在NVUE环境下才加载
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				src: "url('https://at.alicdn.com/t/font_1365296_vumpzwvr0z.ttf')"
			});
			
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont2",
				src: "url('https://at.alicdn.com/t/font_2432092_p4ksawxi55q.ttf')"
			});
			// #endif
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/free.css");
	@import url("./common/common.css");
	/* #ifndef APP-PLUS */
	@import url("./common/free-icon.css");
	/* #endif */
</style>
