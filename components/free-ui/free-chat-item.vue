<template>
	<div @longpress="long">
		<!-- 时间显示 -->
		<view v-if="showTime" class="flex align-center justify-center py-3">
			<text class="font-sm text-muted">{{showTime}}</text>
		</view>
		
		<!-- 撤回消息 -->
		<view 
			v-if="item.isRemove"
			ref="isRemove"
			class="flex align-center justify-center pb-4 pt-2 chat-animate"
		>
			<text class="font-sm text-light-muted">你撤回了一条信息</text>
		</view>
		<view v-else :key="index" class="flex position-relative mb-3" :class="isSelf?'align-start justify-end ':'align-start justify-start'">
			<free-avatar size="70" :src="item.avatar" v-if="!isSelf" />
			<!-- 箭头图标 -->
			<text class="iconfont font-md position-absolute" :class="isSelf?'text-chat-item chat-right-icon':'text-white chat-left-icon'">{{isSelf?'&#xe640;':'&#xe609;'}}</text>
			<div class="p-2 rounded" style="max-width: 500rpx;" :class="isSelf?'mr-3 bg-chat-item':'ml-3 bg-white'">
				<text class="font-md">{{item.data}}</text>
			</div>
			<free-avatar size="70" :src="item.avatar" v-if="isSelf" />
		</view>
	</div>
</template>

<script>
	import FreeAvatar from '@/components/free-ui/free-avatar.vue'
	import $T from "@/common/free-lib/time.js"
	export default {
		name: 'FreeChatItem',
		components: {
			FreeAvatar
		},
		props: {
			item: {
				type: Object,
				required: true
			},
			index: {
				type: [Number, String],
				required: true
			},
			pretime: {
				type: [Number, String],
				required: true,
				default: 0
			}
		},
		data() {
			return {}
		},
		computed: {
			// 利用计算属性减少模版的判断代码，例如v-if
			isSelf() {
				let id = 1; // 假设用户本身的id为1
				return this.item.user_id === id
			},
			// 显示时间
			showTime() {
				return $T.getChatTime(this.item.create_time, this.pretime)
			}
		},
		watch: {
			// 监听是否撤回消息
			'item.isRemove': {
				handler: function (newValue, oldValue) {
					// #ifdef APP-NVUE
					if(newValue) {
						const animation = weex.requireModule('animation')
						this.$nextTick(()=>{
							animation.transition(this.$refs.isRemove, {
								styles: {
									opacity: 1
								},
								duration: 300,
								timingFunction: 'ease',
							})
						})
					}
					// #endif
				},
				immediate: true
			}
		},
		created() {},
		mounted() {
		},
		methods: {
			long(e) {
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
				
				this.$emit('long', {x,y,index: this.index})
			}
		}
	}
</script>

<style scoped lang="less">
	.chat-left-icon {
		left: 80rpx;
		top: 20rpx;
	}

	.chat-right-icon {
		right: 80rpx;
		top: 20rpx;
	}
	
	.chat-animate {
		/* #ifdef APP-NVUE */
		opacity: 0;
		/* #endif */
	}
</style>
