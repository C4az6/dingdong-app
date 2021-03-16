<template>
  <image
		:src="src"
		mode="widthFix"
		:style="getStyle"
		:class="type"
	></image>
</template>

<script>
export default {
  name: 'FreeAvatar',
  components: {},
  props: {
		// 图像大小
		size: {
			type: [String, Number],
			default: 90
		},
		// 图像地址
		src: {
			type: String,
			default: ""
		},
		// 图像显示类型，是否圆角显示
		type: {
			type: String,
			default: "rounded"
		}
	},
  data () {
    return {}
  },
  computed: {
		getStyle () {
			return `width: ${this.size}rpx;height: ${this.size}rpx;`
		}
	},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
