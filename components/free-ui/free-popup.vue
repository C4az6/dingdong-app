<template>
	<!-- 弹出层 -->
	<div style="z-index: 9999;overflow:hidden;" v-if="status">
		<!-- 蒙版层 -->
		<div v-if="mask" class="position-fixed top-0 left-0 right-0 bottom-0" :style="setMaskColor" @click="hide">
		</div>

		<!-- 弹出框内容 -->
		<div class="position-fixed bg-white" :class="setBodyClass" :style="setBodyStyle">
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
				x: -1,	// popup x轴的显示位置
				y: -1,  // popup y轴的显示位置
				status: false // 弹出层是否显示
			}
		},
		computed: {
			// 设置蒙版层透明度的计算属性
			setMaskColor() {
				let opacity = this.maskColor ? 0.5 : 0
				return `background-color: rgba(0,0,0,${opacity})`
			},
			// 设置蒙版层是否底部显示的计算属性
			setBodyClass() {
				let bottom = this.bottom ? 'left-0 right-0 bottom-0': 'rounded border'
				return bottom
			},
			// 设置蒙版层自定义位置的计算属性
			setBodyStyle() {
				if(!this.bottom) {
					let top = this.x > -1 ? `top:${this.x}rpx;` : ''
					let left = this.y > -1 ? `left:${this.y}rpx;` : ''
					return top+left
				}
			}
		},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			show(x=-1,y=-1) {
				this.x = x
				this.y = y
				this.status = true
			},
			hide() {
				this.status = false
			}
		}
	}
</script>

<style scoped lang="less"></style>
