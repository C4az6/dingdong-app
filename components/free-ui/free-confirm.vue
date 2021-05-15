<template>
	<!-- 发送给好友弹出层 -->
	<free-popup ref="confirm" center maskColor transformOrigin="center center" :closeOnClickMask="false">
		<view class="bg-white rounded" style="width: 600rpx;">
			<view class="flex flex-column p-4">
				<text class="font-weight-bold mb-3">{{title}}</text>
				<slot></slot>
			</view>
			<!-- 底部 -->
			<view class="border-top flex" style="height: 100rpx;">
				<view class="flex-1 border-right flex align-center justify-center" @click="cancel">
					<text class="font-md text-muted">取消</text>
				</view>
				<view class="flex-1 flex justify-center align-center" @click="confirm">
					<text class="font-md main-text-color">确定</text>
				</view>
			</view>
		</view>
	</free-popup>
</template>

<script>
	import FreePopup from '@/components/free-ui/free-popup.vue';
	export default {
		name: '',
		components: {
			FreePopup
		},
		props: {
			title: {		// 弹出层标题
				type: String,
				default: '提示'
			}
		},
		data() {
			return {
				callback: false
			}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			// 显示
			show(callback = false) {
				this.callback = callback
				this.$refs.confirm.show()
			},
			// 取消
			cancel() {
				this.$refs.confirm.hide('clickCancelBtn')
			},
			// 确定
			confirm() {
				if(typeof this.callback === 'function') {
					this.callback(()=>{
						this.cancel()
					})
				}
			}
		}
	}
</script>

<style scoped lang="less"></style>
