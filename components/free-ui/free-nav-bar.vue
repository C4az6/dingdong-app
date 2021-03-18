<template>
	<view>
		<!-- 导航栏 -->
		<view class="bg-light" :class="fixed?'fixed-top':''">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx">
				<!-- 左边标题部分 -->
				<view class="flex align-center">
					<text v-if="title" class="font-md ml-3">{{titleValue}}</text>
				</view>
				<!-- 右边图标部分 -->
				<view class="flex align-center">
					<free-icon-button :iconValue="'\ue6e3'" />
					<free-icon-button @click="$emit('openPopup')" :iconValue="'\ue682'"/>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="fixed" :style="fixedStyle"></view>
	</view>
</template>

<script>
import FreeIconButton from '@/components/free-ui/free-icon-button.vue'
export default {
  name: 'FreeNavBar',
  components: {
		FreeIconButton,
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
		}
	},
  data () {
    return {
			navBarHeight: 0,		// 状态栏高度+导航栏高度
			statusBarHeight: 0 // 状态栏高度
		}
  },

  computed: {
		fixedStyle() {
			return `height: ${this.navBarHeight}px`
		}
	},
  watch: {},
  created () {},
  mounted () {
		console.log("API获取状态栏高度：", uni.getSystemInfoSync().statusBarHeight)
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
  methods: {},
}
</script>

<style scoped lang="less">
</style>
