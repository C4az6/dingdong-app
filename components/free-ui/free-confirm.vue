<template>
	<!-- 发送给好友弹出层 -->
	<free-popup ref="confirm" center maskColor transformOrigin="center center">
		<view class="bg-white rounded" style="width: 600rpx;">
			<view class="flex flex-column p-4">
				<text class="font-weight-bold mb-3">发送给:</text>
				<scroll-view scroll-x="true" class="flex" :show-scrollbar="false">
					<free-avatar src="/static/images/mail/friend.png" size="60" class="mr-1" v-for="i in 10">
					</free-avatar>
				</scroll-view>
				<text class="font-md text-muted my-3 rounded p-2 bg-light">[个人名片] 张波</text>
				<input type="text" placeholder="给朋友留言" class="font-md text-muted border-bottom" style="height: 60rpx;">
			</view>
			<!-- 底部 -->
			<view class="border-top flex" style="height: 100rpx;">
				<view class="flex-1 border-right flex align-center justify-center">
					<text class="font-md text-muted">取消</text>
				</view>
				<view class="flex-1 flex justify-center align-center">
					<text class="font-md main-text-color">确定</text>
				</view>
			</view>
		</view>
	</free-popup>
</template>

<script>
	import FreePopup from '@/components/free-ui/free-popup.vue';
	import FreeAvatar from '@/components/free-ui/free-avatar.vue'
	export default {
		name: '',
		components: {
			FreePopup,
			FreeAvatar
		},
		props: {},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods: {}
	}
</script>

<style scoped lang="less"></style>
