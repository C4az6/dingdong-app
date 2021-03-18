<template>
	<!-- 弹出层 -->
	<div style="z-index: 9999;overflow:hidden;" v-if="status">
		<!-- 蒙版层 -->
		<div v-if="mask" class="position-fixed top-0 left-0 right-0 bottom-0" :style="setMaskColor" @click="hide">
		</div>

		<!-- 弹出框内容 -->
		<div class="position-fixed bg-white" :class="getBodyClass">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FreePopup',
		components: {},
		props: {
			// 是否开启蒙版层颜色
			maskColor: {
				type: Boolean,
				default: false
			},
			// 是否开启蒙版
			mask: {
				type: Boolean,
				default: true
			},
			// 是否处于底部
			bottom: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				status: false // 弹出层是否显示
			}
		},
		computed: {
			// 设置蒙版层透明度的计算属性
			setMaskColor() {
				let opacity = this.maskColor ? 0.5 : 0
				return `background-color: rgba(0,0,0,${opacity})`
			},
			// 设置蒙版层样式的计算属性
			getBodyClass() {
				let bottom = this.bottom ? 'left-0 right-0 bottom-0': ''
				return bottom
			}
		},
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
