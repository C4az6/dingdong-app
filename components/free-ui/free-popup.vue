<template>
	<!-- 弹出层 -->
	<div style="z-index: 9999; overflow: hidden;" v-if="status">
		<!-- 蒙版层 -->
		<div v-if="mask" class="position-fixed top-0 left-0 right-0 bottom-0" :style="setMaskColor" @click="hide">
		</div>

		<!-- 弹出框内容 -->
		<div ref="popup" class="position-fixed free-animated" :class="setBodyClass" :style="setBodyStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	// #ifdef APP-NVUE
		const animation = weex.requireModule('animation')
	// #endif
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
			},
			// 弹出层内容宽度
			bodyWidth: {
				type: Number,
				default: 0
			},
			// 弹出层内容高度
			bodyHeight: {
				type: Number,
				default: 0
			},
			// 弹出层背景颜色
			bgColor: {
				type: String,
				default: 'bg-white'
			},
			// 弹出层动画效果中心点
			transformOrigin: {
				type: String,
				default: 'left top'
			}
		},
		data() {
			return {
				maxX: 0, // x轴的边界值
				maxY: 0, // y轴的边界值
				x: -1, // popup x轴的显示位置
				y: -1, // popup y轴的显示位置
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
				let bottom = this.bottom ? 'left-0 right-0 bottom-0' : 'rounded border'
				return `${bottom} ${this.bgColor}`
			},
			// 设置蒙版层自定义位置的计算属性
			setBodyStyle() {
				if (!this.bottom) {
					let left = this.x > -1 ? `left:${this.x}px;` : ''
					let top = this.y > -1 ? `top:${this.y}px;` : ''
					return top + left
				}
			}
		},
		watch: {},
		created() {},
		mounted() {
			// 获取系统信息
			let info = uni.getSystemInfoSync()
			this.maxX = info.windowWidth - uni.upx2px(this.bodyWidth) - 10
			this.maxY = info.windowHeight - uni.upx2px(this.bodyHeight) - 10
		},
		methods: {
			show(x = -1, y = -1) {
				console.log(x)
				console.log("maxX", this.maxX)
				this.x = (x > this.maxX) ? this.maxX : x
				this.y = (y > this.maxY) ? this.maxY : y
				this.status = true
				// #ifdef APP-NVUE
				this.$nextTick(_=>{
					animation.transition(this.$refs.popup, {
						styles: {
							transform: 'scale(1,1)',
							transformOrigin: this.transformOrigin,
							opacity: 1
						},
						duration: 200,	// 单位：ms
						timingFunction: 'ease'
					})
				})
				// #endif
			},
			hide() {
				// #ifdef APP-NVUE
				animation.transition(this.$refs.popup, {
					styles: {
						transform: 'scale(0,0)',
						transformOrigin: this.transformOrigin,
						opacity: 0
					},
					duration: 200,	// 单位：ms
					timingFunction: 'ease'
				}, _=>{
					this.status = false
				})
				// #endif
				// #ifndef APP-NVUE
				this.status = false
				// #endif
			}
		}
	}
</script>

<style scoped lang="less">
	/* #ifdef APP-NVUE */
	.free-animated {
		transform: scale(0,0);
		opacity: 0;
	}
	/* #endif */
</style>
