<template>
	<image 
		:class="imageClass" 
		:src="src" 
		:style="setImageStyle"
		@click="$emit('click')"
		@load="loadImage"
		class="bg-hover-light"
	></image>
</template>

<script>
export default {
  name: 'FreeImage',
  components: {},
  props: {
		// 图片路径地址
		src: {
			type: String,
			required: true
		},
		// 样式类名
		imageClass: {
			type: String,
			required: true
		},
		// 最大宽度
		maxWidth: {
			type: [Number, String],
			default: 500
		},
		// 最大高度
		maxHeight: {
			type: [Number, String],
			default: 300
		}
	},
  data () {
		return {
			w: 100,
			h: 100
		}
  },
  computed: {
		// 计算图片的高度和宽度样式
		setImageStyle() {
			return `width: ${this.w}px; height: ${this.h}px;`
		}
	},
  watch: {},
  created () {
	},
  mounted () {},
  methods: {
		loadImage(e) {
			let w = e.detail.width
			let h = e.detail.height
			
			// 最大高度作为基准的写法
			let maxW = uni.upx2px(this.maxWidth)
			let maxH = uni.upx2px(this.maxHeight)
			if (h <= maxH) {
				this.h = h
				this.w = w <= maxW ? w : maxW
				this.$emit('load', {
					w: this.w,
					h: this.h
				})
				return
			}
			this.h = maxH
			// 计算等比例的最大宽度，赋值给w2变量
			let w2 = maxH * (w / h)
			// 如果等比例最大宽度小于之前定义的最大宽度则使用w2，否则使用之前定义的最大宽度
			this.w = w2 <= maxW ? w2 : maxW
			this.$emit('load', {
				w: this.w,
				h: this.h
			})
		}
	}
}
</script>

<style scoped lang="less"></style>
