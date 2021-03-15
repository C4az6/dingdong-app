<template>
  <view
		class="flex align-center justify-center" 
		hover-class="bg-hover-light" @click="$emit('click')"
		style="height: 90rpx;width: 90rpx;">
		<text class="iconfont font-md">{{iconValue}}</text>
	</view>
</template>

<script>
export default {
  name: 'FreeIconButton',
  components: {},
  props: {
		iconValue: {
			type: String,
			required: true
		}
	},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
	},
  mounted () {},
  methods: {},
	onLoad() {
		console.log("onload...")
	}
}
</script>

<style scoped lang="less"></style>
