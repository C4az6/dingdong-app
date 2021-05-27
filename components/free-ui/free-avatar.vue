<template>
	<image :src="src" mode="aspectFill" :style="getStyle" :class="type" @click="handleClickEvent"></image>
</template>

<script>
	export default {
		name: 'FreeAvatar',
		components: {},
		props: {
			// 图像大小
			size: {
				type: [String, Number],
				default: 90
			},
			// 图像地址
			src: {
				type: String,
				default: ""
			},
			// 图像显示类型，是否圆角显示
			type: {
				type: String,
				default: "rounded"
			},
			// 点击类型，是跳转页面呢还是其他
			clickType: {
				type: String,
				default: 'none'
			}
		},
		data() {
			return {}
		},
		computed: {
			getStyle() {
				return `width: ${this.size}rpx;height: ${this.size}rpx;`
			}
		},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			// 监听头像的点击事件
			handleClickEvent() {
				console.log(this.clickType)
				switch (this.clickType) {
					case "navigate":
						uni.navigateTo({
							url: '/pages/mail/user-base/user-base'
						})
						break;
					default:
						this.$emit('click')
						break;
				}
			}
		}
	}
</script>

<style scoped lang="less"></style>
