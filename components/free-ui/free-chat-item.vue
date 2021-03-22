<template>
  <view :key="index" class="flex position-relative mb-3" :class="isSelf?'align-start justify-end ':'align-start justify-start'">
  	<free-avatar size="70" :src="item.avatar" v-if="!isSelf" />
  	<!-- 箭头图标 -->
  	<text 
  		class="iconfont font-md position-absolute" :class="isSelf?'text-chat-item chat-right-icon':'text-white chat-left-icon'"
  	>{{isSelf?'&#xe640;':'&#xe609;'}}</text>
  	<div 
  	class="p-2 rounded"
    style="max-width: 500rpx;"
  	:class="isSelf?'mr-3 bg-chat-item':'ml-3 bg-white'"
  	>
  		<text class="font-md">{{item.data}}</text>
  	</div>
  	<free-avatar size="70" :src="item.avatar" v-if="isSelf"/>
  </view>
</template>

<script>
import FreeAvatar from '@/components/free-ui/free-avatar.vue'
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
		index: [Number, String],
		required: true
	},
  data () {
    return {}
  },
  computed: {
		// 利用计算属性减少模版的判断代码，例如v-if
		isSelf() {
			let id = 1;		// 假设用户本身的id为1
			return this.item.user_id === id
		}
	},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
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
</style>
