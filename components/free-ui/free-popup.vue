<template>
	<!-- 弹出层 -->
	<div style="z-index: 9999;overflow:hidden;" v-if="status">
		<!-- 蒙版层 -->
		<div class="position-fixed top-0 left-0 right-0 bottom-0" style="background-color: rgba(0,0,0,.5);" @click="hide">
		</div>

		<!-- 弹出框内容 -->
		<div class="position-fixed bg-white" style="left: 100rpx;top: 100rpx;">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FreePopup',
		components: {},
		props: {},
		data() {
			return {
				status: false // 弹出层是否显示
			}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			show() {
				this.status = true
			},
			hide() {
				this.status = false
			}
		}
	}
</script>

<style scoped lang="less"></style>
