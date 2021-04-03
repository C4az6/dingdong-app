<template>
	<div>
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
			<text v-if="hasLabelClass" class="iconfont font-md position-absolute" :class="isSelf?'text-chat-item chat-right-icon':'text-white chat-left-icon'">{{isSelf?'&#xe640;':'&#xe609;'}}</text>
			<div class="p-2 rounded" style="max-width: 500rpx;" :class="labelClass" @longpress="long">
				<!-- 文字内容 -->
				<text v-if="item.type === 'text'" class="font-md">{{item.data}}</text>
				<!-- 表情包 -->
				<image 
					v-else-if="item.type === 'emoticon' || item.type === 'image'" 
					class="rounded" 
					:src="item.data" 
					lazy-load 
					:style="'width:' + w + 'px;height: ' + h + 'px;'"
					@click="$emit('previewImage', item)"
					@load="loadImage"
				></image>
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
			return {
				w: 100,
				h: 100
			}
		},
		computed: {
			// 是否需要气泡样式
			hasLabelClass() {
				// 短路运算，如果前者为true则返回前者的表达式，如果前者为false，则返回后者的表达式,只有 text 和 audio 类型才需要气泡
				return this.item.type === 'text' || this.item.type === 'audio'
			},
			
			// 气泡样式
			labelClass() {
				let label = this.hasLabelClass ? 'mr-3 bg-chat-item': 'mr-3 border'
				return this.isSelf ? label : 'bg-white ml-3'
			},
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
		mounted() {},
		methods: {
			// 聊天信息的图片加载完成
			loadImage(e) { 
				console.log("e: ", e)
				let w = e.detail.width
				let h = e.detail.height
				// 最大宽度作为基准的写法
				// let maxW = uni.upx2px(500)
				// if( w <= maxW ) {
				// 	// 使用原来的宽和高
				// 	this.w = w
				// 	this.h = h
				// 	return;
				// }
				// /* 
				// 	计算公式：
				// 	w / h = maxW / maxH
				// 	maxH = maxW * h/w
				//  */
				// this.w = maxW
				// this.h = maxW * (h/w)
				
				// 最大高度作为基准的写法
				let maxW = uni.upx2px(500)
				let maxH = uni.upx2px(350)
				if (h <= maxH) {
					this.h = h
					this.w = w <= maxW ? w : maxW
					return
				}
				this.h = maxH
				// 计算等比例的最大宽度，赋值给w2变量
				let w2 = maxH * (w / h)
				// 如果等比例最大宽度小于之前定义的最大宽度则使用w2，否则使用之前定义的最大宽度
				this.w = w2 <= maxW ? w2 : maxW
			},
			// 长按事件
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
