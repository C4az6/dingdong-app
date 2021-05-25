<template>
	<view class="p-2 flex align-start border-bottom border-light-secondary">
		<!-- 左侧头像 -->
		<free-avatar size="80" src="/static/images/demo/demo6.jpg"></free-avatar>

		<!-- 右侧内容 -->
		<view class="pl-2 flex flex-1 flex-column">
			<!-- 昵称 -->
			<text class="text-hover-primary font-md mb-1">{{item.username}}</text>
			<!-- 内容 -->
			<text class="font-md text-dark mb-1">{{item.context}}</text>
				<view class="py-2 flex flex-wrap" v-if="item.image.length">
					<block v-for="(image, imageIndex) in item.image">
						<!-- 单图 -->
						<free-image v-if="item.image.length === 1" :src="image.src" mode="aspectFill" class="mb-2" @click="previewImage(image.src)"></free-image>
						<!-- 多图 -->
						<image v-else :src="image.src" mode="aspectFill" style="width: 180rpx;height: 180rpx;" :key="index" class="mr-2 mb-2 rounded" @click="previewImage(image.src)">
						</image>
					</block>
				</view>
			<!-- 时间和操作按钮 -->
			<view class="flex justify-between align-center">
				<text class="text-light-muted font-sm">{{item.create_time | timeFormat}}</text>
				<text class="text-hover-primary iconfont font p-1">{{'\ue6fd'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import FreeAvatar from '@/components/free-ui/free-avatar.vue'
	import FreeImage from '@/components/free-ui/free-image.vue'
	import $T from '@/common/free-lib/time.js'
	export default {
		name: '',
		components: {
			FreeAvatar,
			FreeImage,
		},
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {}
		},
		computed: {
			// 预览图片的数组
			previewList() {
				return this.item.image.map(item=>item.src)
			}
		},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			previewImage(src) {
				uni.previewImage({
					current: src,
					urls: this.previewList
				})
			}
		},
		filters: {
			timeFormat(value) {
				return $T.gettime(value)
			}
		}
	}
</script>

<style scoped lang="less"></style>
