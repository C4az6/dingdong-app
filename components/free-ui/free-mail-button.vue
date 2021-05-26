<template>
	<view class="py-1 px-2 rounded mr-2" :class="disabled ? 'bg-light border' : 'main-bg-color'" @click="clickEvent">
		<text class="font" :class="disabled ? 'text-light-muted' : 'text-white'">{{name}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: ""
			},
			disabled: {		// 是否禁用发送按钮
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		methods: {
			clickEvent() {
				// 禁用状态为false的时候才发送点击事件给父组件
				if(!this.disabled) {
					this.$emit('click')
				}
			}
		}
	}
</script>

<style scoped>

</style>