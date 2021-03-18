<template>
	<view class="bg-white" hover-class="bg-hover-light" v-if="item">
		<!-- 列表 -->
		<div class="flex" @click="onClick" @longpress="long">
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
				this.$emit('click')
			},
			long(e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped lang="less">
	.bg-hover-light {
		background-color: #f7f7f7;
	}
</style>
