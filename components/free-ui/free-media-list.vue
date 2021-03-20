<template>
	<view :class="item.isTop ? 'bg-light' : 'bg-white'" hover-class="bg-hover-light" v-if="item">
		<!-- 列表 -->
		<div class="flex" @click="onClick" @longpress="long(item,index,$event)">
			<!-- 左侧 -->
			<view class="flex align-center justify-center position-relative" style="width: 145rpx">
				<free-avatar :src="item.avatar" size="92" />
				<!-- 角标 -->
				<free-badge :value="item.noreadnum" badgeClass="position-absolute" badgeStyle="top: 15rpx;right:15rpx" />
			</view>
			<!-- 右侧 -->
			<view class="flex flex-column border-bottom flex-1 py-3 pr-3 border-light-secondary">
				<view class="flex align-center justify-between mb-1">
					<text class="font-md">{{item.nickname}}</text>
					<text class="font-sm text-light-muted">{{item.update_time | formatTime}}</text>
				</view>
				<text class="font-sm text-ellipsis text-light-muted">{{item.data}}</text>
			</view>
		</div>
	</view>
</template>

<script>
	import freeBase from '@/common/mixin/free-base.js'
	import FreeAvatar from '@/components/free-ui/free-avatar.vue'
	import FreeBadge from '@/components/free-ui/free-badge.vue'
	export default {
		mixins: [freeBase],
		name: 'FreeMediaList',
		components: {
			FreeAvatar,
			FreeBadge
		},
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			onClick() {
				uni.navigateTo({
					url: '/pages/chat/chat/chart'
				})
			},
			long(item, index, e) {
				let x = 0
				let y = 0
				// #ifdef APP-NVUE
				if(Array.isArray(e.changedTouches) && e.changedTouches.length > 0) {
					x = e.changedTouches[0].screenX
					y = e.changedTouches[0].screenY
				}
				// #endif
				
				// #ifdef MP-WEIXIN
				x = e.target.x
				y = e.target.y
				// #endif
				
				this.$emit('long', {x,y,item,index})
			}
		}
	}
</script>

<style scoped lang="less">
	.bg-hover-light {
		background-color: #f7f7f7;
	}
</style>
