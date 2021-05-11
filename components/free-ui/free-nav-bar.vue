<template>
	<view>
		<!-- 导航栏 -->
		<view :class="setClass">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx">
				<!-- 左边标题部分 -->
				<view class="flex align-center">
					<!-- 返回按钮 -->
					<free-icon-button v-if="showBack" :iconValue="'\ue60d'" @click="back" />
					<!-- 标题 -->
					<text v-if="title" class="font-md ml-3">{{titleValue}}</text>
				</view>
				<!-- 右边图标部分 -->
				<view class="flex align-center" v-if="showRight">
					<slot name="right">
						<!-- 下面的2个组件是 right 插槽默认的元素，如果其他组件手动设置slot=right则下面内容会被覆盖 -->
						<free-icon-button :iconValue="'\ue6e3'" />
						<free-icon-button @click="openPopup" :iconValue="'\ue682'" />
					</slot>
				</view>
			</view>
		</view>
		<!-- 占位元素 -->
		<view v-if="fixed" :style="fixedStyle"></view>

		<!-- 弹出层 拓展菜单 -->
		<free-popup 
			v-if="showRight"
			ref="popupRef" 
			:bodyWidth="320" 
			:bodyHeight="525" 
			bgColor="bg-dark"
			transformOrigin="right top"
		>
			<view class="flex flex-column" style="width:320rpx;height: 525rpx;">
				<view class="flex-1 flex align-center" hover-class="bg-hover-dark" v-for="(item,index) in menus" :key="index"
				 @click="handleMenuItemClick(item.name)">
				 <text class="pl-3 pr-2 font-md text-white" :class="item.name==='帮助与反馈'?'iconfont2':'iconfont'">{{item.icon}}</text>
					<text class="font-md text-white">{{item.name}}</text>
				</view>
			</view>
		</free-popup>
	</view>
</template>

<script>
	import FreeIconButton from '@/components/free-ui/free-icon-button.vue'
	import FreePopup from '@/components/free-ui/free-popup.vue'
	export default {
		name: 'FreeNavBar',
		components: {
			FreeIconButton,
			FreePopup
		},
		props: {
			// 是否显示标题
			title: {
				type: Boolean,
				default: false
			},
			// 标题内容
			titleValue: {
				type: String
			},
			// 是否固定导航栏
			fixed: {
				type: Boolean,
				default: true
			},
			// 导航栏背景颜色
			bgColor: {
				type: String,
				default: "bg-light"
			},
			// 是否显示返回箭头
			showBack: {
				type: Boolean,
				default: false
			},
			// 是否显示右侧按钮
			showRight: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				// 导航栏弹出菜单列表
				menus: [{
						name: '发起群聊',
						event: "",
						icon: "\ue633"
					},
					{
						name: "添加好友",
						event: "",
						icon: "\ue65d"
					},
					{
						name: "扫一扫",
						event: "",
						icon: "\ue614"
					},
					{
						name: "收付款",
						event: "",
						icon: "\ue66c"
					},
					{
						name: "帮助与反馈",
						event: "",
						icon: "\ue632"
					}
				],
				navBarHeight: 0, // 状态栏高度+导航栏高度
				statusBarHeight: 0 // 状态栏高度
			}
		},

		computed: {
			fixedStyle() {
				return `height: ${this.navBarHeight}px`
			},
			setClass() {
				let fixed = this.fixed ? 'fixed-top' : ''
				return `${fixed} ${this.bgColor}`
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
			},
			
			// 显示拓展菜单
			openPopup() {
				this.$refs.popupRef.show(uni.upx2px(415), uni.upx2px(150))
			},
			// 监听菜单点击事件
			handleMenuItemClick(e) {
				console.log(e)
			}
		},
	}
</script>

<style scoped lang="less">
</style>
