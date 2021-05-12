<template>
	<view class="flex bg-white" hover-class="bg-light" @click="$emit('click')">
		<!-- 左侧图片 -->
		<view 
			v-if="leftIconShow"
			class="flex justify-center align-center py-2 pl-3">
			<slot name="icon"></slot>
			<image v-if="cover" class="rounded" :style="setCoverStyle" :src="cover" mode="widthFix"></image>
		</view>

		<!-- 右侧内容 -->
		<view class="flex-1 flex align-center justify-between pr-3 py-3 pl-3" :class="borderBottom?'border-bottom':''">
			<slot><text class="font-md text-dark">{{title}}</text></slot>
			<view v-if="rightIconShow" class="flex align-center">
				<!-- 朋友圈右侧头像 -->
				<slot name="right"></slot>
				<!-- 右侧箭头 -->
				<text v-if="arrows" class="iconfont font-lg text-light-muted">&#58892;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FreeListItem',
		components: {},
		props: {
			// 是否显示下边线
			borderBottom: {
				type: Boolean,
				default: true
			},
			// 封面
			cover: {
				type: String,
				default: ""
			},
			// 封面大小
			coverSize: {
				type: [String, Number],
				default: 75
			},
			// 标题
			title: {
				type: String,
				default: ""
			},
			// 是否显示右侧图标（朋友圈头像 / 箭头）
			rightIconShow: {
				type: Boolean,
				default: false
			},
			// 是否显示左侧图标
			leftIconShow: {
				type: Boolean,
				default: true
			},
			// 是否显示右侧箭头
			arrows: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {}
		},
		computed: {
			setCoverStyle() {
				return `width: ${this.coverSize}rpx; height: ${this.coverSize}rpx;`
			}
		},
		watch: {},
		created() {},
		mounted() {
		},
		methods: {}
	}
</script>

<style scoped lang="less"></style>
