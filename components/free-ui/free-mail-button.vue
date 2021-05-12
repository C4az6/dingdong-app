<template>
	<view class="main-bg-color py-1 px-2 rounded mr-2" @click="$emit('click')">
		<text class="font text-white">{{name}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: ""
			}
		},
		data() {
			
		}
	}
</script>

<style scoped>

</style>