<template>
  <text 
		class="bg-danger text-white rounded-circle font-sm free-badge"
		:class="badgeClass"
		:style="badgeStyle"
	>{{value}}</text>
</template>

<script>
export default {
  name: 'FreeBadge',
  components: {},
  props: {
		// 角标样式类名
		badgeClass: {
			type: String,
			default: ""
		},
		// 角标行内样式
		badgeStyle: {
			type: String,
			default: ""
		},
		// 角标内容
		value: {
			type: [String, Number],
			default: ""
		}
	},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
	.free-badge {
		padding: 6rpx 14rpx;
	}
</style>
