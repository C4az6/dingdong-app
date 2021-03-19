<template>
	<view class="flex bg-white" hover-class="bg-light" @click="$emit('click')">
		<!-- 左侧图片 -->
		<view 
			class="flex justify-center align-center py-2 px-3" 
			style="width: 132rpx; height: 104rpx;"
		>
			<image v-if="cover" style="width: 76rpx; height: 76rpx;" :src="cover" mode="widthFix"></image>
		</view>

		<!-- 右侧内容 -->
		<view class="flex-1 flex align-center border-bottom">
			<text class="font-md text-dark">{{title}}</text>
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
			}
		},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {
			console.log(123)
		},
		methods: {}
	}
</script>

<style scoped lang="less"></style>
