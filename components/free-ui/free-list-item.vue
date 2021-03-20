<template>
	<view class="flex bg-white" hover-class="bg-light" @click="$emit('click')">
		<!-- 左侧图片 -->
		<view 
			class="flex justify-center align-center py-2 px-3" 
			style="width: 132rpx; height: 104rpx;"
		>
			<slot name="icon"></slot>
			<image v-if="cover" style="width: 76rpx; height: 76rpx;" :src="cover" mode="widthFix"></image>
		</view>

		<!-- 右侧内容 -->
		<view class="flex-1 flex align-center border-bottom justify-between pr-3">
			<text class="font-md text-dark">{{title}}</text>
			<view v-if="rightIconShow" class="flex align-center">
				<!-- 朋友圈右侧头像 -->
				<slot name="right"></slot>
				<!-- 右侧箭头 -->
				<text class="iconfont font-lg text-light-muted">&#58892;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FreeListItem',
		components: {},
		props: {
			// 封面
			cover: {
				type: String,
				default: ""
			},
			// 标题
			title: {
				type: String,
				default: ""
			},
			// 是否显示右侧箭头
			rightIconShow: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {
		},
		methods: {}
	}
</script>

<style scoped lang="less"></style>
