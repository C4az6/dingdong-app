<template>
	<view class="flex flex-wrap">
		<view class="flex justify-center align-center position-relative bg-danger" style="width: 230rpx;height: 230rpx;" v-for="(item, index) in imageList" :key="index">
			<image :src="item" class="rounded" mode="aspectFill" style="width: 210rpx;height: 210rpx;" @click="preview(item)"></image>
			
			<!-- 删除图片按钮 -->
			<view 
				class="flex justify-center align-center position-absolute rounded-circle p-3" 
				style="width: 40rpx;height: 40rpx;top: 0; right: 0;background-color: rgba(0,0,0,.4);"
				@click="removeImage(index)"
			>
				<text class="text-white font-small iconfont">{{'&#xe620;'}}</text>
			</view>
		</view>
		
		<view v-if="imageList.length < 9" class="flex justify-center align-center" style="width: 230rpx;height: 230rpx;">
			<view class="flex justify-center align-center bg-light" style="width: 210rpx;height: 210rpx;" @click="uploadImage">
				<text class="text-muted" style="font-size: 100rpx;">+</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
			imageList: []
		}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
		// 预览图片
		preview(item) {
			uni.previewImage({
				current: item,
				urls: this.imageList
			})
		},
 		
		// 删除图片
		removeImage(index) {
			uni.showModal({
				title: '提示',
				content: '确定删除该图片吗?',
				success: res => {
					if(res.confirm) {
						this.imageList.splice(index, 1)
					}
				},
			});
		},
		
		// 上传图片
		uploadImage() {
			uni.chooseImage({
				count: 9 - this.imageList.length,
				sizeType: ['compressed'],
				success: (res) => {
					this.imageList = [...this.imageList, ...res.tempFilePaths]
				}
			})
		}
	}
}
</script>

<style scoped lang="less"></style>
