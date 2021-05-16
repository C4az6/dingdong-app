<template>
	<!-- 渐变式导航栏组件 -->
		<!-- 导航栏 -->
		<view class="fixed-top" :style="navBarStyle">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx">
				<!-- 左边标题部分 -->
				<view class="flex align-center">
					<!-- 返回按钮 -->
					<view
						class="flex align-center justify-center" 
						hover-class="bg-hover-light" @click="back"
						style="height: 90rpx;width: 90rpx;"
					>
						<text class="iconfont font-lg" :style="buttonStyle">{{'\ue60d'}}</text>
					</view>
					<!-- 标题 -->
					<text v-if="title" class="font-md ml-3">{{title}}</text>
				</view>
				<!-- 右边图标部分 -->
				<view class="flex align-center">
						<view
							class="flex align-center justify-center" 
							hover-class="bg-hover-light"
							style="height: 90rpx;width: 90rpx;"
						>
							<text class="iconfont font-lg" :style="buttonStyle">{{'\ue682'}}</text>
						</view>
				</view>
			</view>
		</view>
</template>

<script>
	import FreeIconButton from '@/components/free-ui/free-icon-button.vue'
	export default {
		name: 'FreeNavBar',
		components: {
			FreeIconButton
		},
		props: {
			// 是否显示标题
			title: {
				type: [String,Boolean],
				default:false
			},
			scrollTop: {
				type: [Number,String],
				default:0
			}
		},
		data() {
			return {
				navBarHeight: 0, // 状态栏高度+导航栏高度
				statusBarHeight: 0 // 状态栏高度
			}
		},

		computed: {
			// 颜色的透明度变化 0 ~ 1
			changeNumber() {
				// 500和620是从设计稿得来的，页面顶部距离开始渐变的位置的高度是500rpx，结束渐变的位置为620rpx，这里我们需要转换成px方便后续计算
				let start = uni.upx2px(500)
				let end = uni.upx2px(620)
				// 结束渐变和开始渐变的高度差
				let h = end - start
				// 存储透明度的值,0 ~ 1
				let num = 0
				if(this.scrollTop > start) {
					// 用户滑动到了需要开始渐变的位置  计算透明度比例公式：(用户已滚动的距离 - 开始渐变距离) / 渐变距离差(结束渐变距离 - 开始渐变距离)
					num = (this.scrollTop - start) / h
				}
				console.log("num: ", num)
				return num > 1 ? 1 : num
			},
			
			// 导航条颜色
			navBarStyle() {
				return `background-color: rgba(255,255,255,${this.changeNumber})`
			},
			
			// 图标按钮颜色
			buttonStyle() {
				if(this.changeNumber > 0) {
					return `color: rgba(0,0,0,${this.changeNumber})`
				}
				return 'color: #ffffff'
			}
		},
		watch: {},
		created() {},
		mounted() {
			// NVUE环境下获取系统状态栏的高度
			// #ifdef APP-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			/* 
				这里使用uni.upx2px的原因是因为我们获取的statusBarHeight是px单位，要进行相加
				需要转换成相同的单位才行.
			 */
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		methods: {
			// 返回上一页
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="less">
</style>
