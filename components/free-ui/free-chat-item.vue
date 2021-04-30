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
				<FreeImage
					v-else-if="item.type === 'emoticon' || item.type === 'image'" 
					:src="item.data"
					image-class="rounded"
					@click="$emit('previewImage', item)"
				>
				</FreeImage>
				<!-- 语音部分 -->
				<view v-else-if="item.type === 'audio'" class="flex align-center" @click="openAudio">
					<image 
						v-if="isSelf"
						:src="!audioPlaying ? '/static/images/audio/audio3.png' : '/static/images/audio/audio.gif'" style="width: 50rpx; height: 50rpx;"
						class="mx-1"
					></image>
					<text class="font">300'</text>
					<image
						v-if="!isSelf"
						:src="!audioPlaying ? '/static/images/audio/audio3.png' : '/static/images/audio/audio.gif'" style="width: 50rpx; height: 50rpx;"
						class="mx-1"
					></image>
				</view>
				
				<!-- 视频 -->
				<view 
					v-else-if="item.type === 'video'"
					class="position-relative rounded flex justify-center align-center"
					@click="openVideo"
				>
					<!-- 视频封面 -->
					<free-image 
						:src="item.options.poster"
						imageClass="rounded"
						:maxWidth="350"
						:maxHeight="350"
						@load="loadPoster"
					>
					</free-image>
					
					<!-- 播放图标 -->
					<text class="iconfont text-white position-absolute" style="font-size: 80rpx;width: 80rpx;height: 80rpx;" :style="posterIconStyle">&#xe737;</text>
				</view>
			</div>
			<free-avatar size="70" :src="item.avatar" v-if="isSelf" />
		</view>
	</div>
</template>

<script>
	import FreeAvatar from '@/components/free-ui/free-avatar.vue'
	import FreeImage from '@/components/free-ui/free-image.vue'
	import $T from "@/common/free-lib/time.js"
	import {mapState, mapActions} from 'vuex'
	export default {
		name: 'FreeChatItem',
		components: {
			FreeAvatar,
			FreeImage
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
				innerAudioContext: null,
				audioPlaying: false,		// 音频是否播放
				// 视频封面默认的宽高
				poster: {
					w: 100,
					h: 100
				}
			}
		},
		computed: {
			// 短视频封面图标位置
			posterIconStyle () {
				let w = (this.poster.w - uni.upx2px(80))/2
				let h = (this.poster.h - uni.upx2px(80))/2
				return `left: ${w}px;top: ${h}px;`
			},
			
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
		mounted() {
		},
		destroyed() {
			// 如果是音频类型，就注销事件
			this.item.type === 'audio' && this.$off(this.handlePlayAudio)
			// 销毁当前的音频实例
			this.innerAudioContext && this.innerAudioContext.destroy()
		},
		methods: {
			// 点击视频封面跳转视频播放页面函数
			openVideo() {
				console.log(111)
				uni.navigateTo({
					url: `/pages/chat/video/video?url=${this.item.data}`,
					fail: e => {
						console.log("error: ", e)
					}
				})
			},
			
			// 封面图片加载完成函数
			loadPoster (e) {
				console.log("video poster loaded...", e)
				this.poster.w = e.w
				this.poster.h = e.h
			},
			
			// ...mapActions(['$audioOn', '$audioEmit', '$audioOff']),
			// 监听播放音频全局事件
			handlePlayAudio(index) {
				if(this.innerAudioContext) {
					if (this.index !== index) {
						this.innerAudioContext.stop()
					} 
				}
			},
			
			// 播放音频函数
			openAudio() {
				// 通知其他音频停止播放，传递的参数是当前点击的音频的索引
				// this.$audioEmit(this.index)
				this.$emit('audioEmit', this.index)
				if(!this.innerAudioContext) {
					// 创建音频对象
					this.innerAudioContext = uni.createInnerAudioContext();
					// 设置音频播放地址
					this.innerAudioContext.src = this.item.data;
					// 播放音频
					this.innerAudioContext.play()
					
					// 监听播放
					this.innerAudioContext.onPlay(_=>{
						this.audioPlaying = true
					})
					// 监听暂停
					this.innerAudioContext.onPause(_=>{
						this.audioPlaying = false
					})
					// 监听停止
					this.innerAudioContext.onStop(_=>{
						this.audioPlaying = false
					})
					// 监听错误
					this.innerAudioContext.onError(_=>{
						this.audioPlaying = false
					})
				}else {
					// 重新播放
					this.innerAudioContext.stop()
					this.innerAudioContext.play()
				}
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
