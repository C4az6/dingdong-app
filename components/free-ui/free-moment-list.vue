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
			
			<!-- 视频部分 -->
			<view class="py-2" v-if="item.video">
				<video :src="item.video.src" :poster="item.video.poster" controls loop style="height: 300rpx;width: 500rpx;"></video>
			</view>
			
			<!-- 时间 | 操作按钮 -->
			<view class="flex justify-between align-center">
				<text class="text-light-muted font-sm">{{item.create_time | timeFormat}}</text>
				<text class="text-hover-primary iconfont font p-1">{{'\ue6fd'}}</text>
			</view>
			
			<!-- 点赞 | 评论部分 -->
			<view class="bg-light" v-if="item.supports.length || item.comments.length">
				<!-- 点赞部分 -->
				<view class="flex align-start border-bottom p-2" v-if="item.supports.length">
					<text class="iconfont font text-hover-primary">&#xe637;</text>
					<view class="flex flex-wrap flex-1">
						<text class="font text-hover-primary ml-2" v-for="s in item.supports">{{s.username}}</text>
					</view>
				</view>
				
				
				<!-- 评论部分 -->
				<view class="flex align-start mt-2 p-2" v-if="item.comments.length">
					<text class="iconfont font-lg text-hover-primary">&#xe64e;</text>
					<view class="flex-1 ml-2">
						<view class="flex mb-2 pb-2 border-bottom" v-for="c in item.comments">
							<text class="font text-hover-primary">{{c.username}} :</text>
							<text class="font text-dark ml-2 flex-1">{{c.content}}</text>
						</view>
					</view>
				</view>
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
