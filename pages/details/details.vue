<template>
	<view>
		<u-navbar title="项目详情" :background="background" title-color="#717171" back-icon-color="#717171" ></u-navbar>
		<view class="content admine">
			<u-parse :content="dataArr"></u-parse>
		</view>	
	</view>
</template>

<script>
	import uParse from "@/components/feng-parse/parse.vue"
	export default {
		components:{
			uParse
		},
		data() {
			return {
				dataArr:'',
				background: {
					background: 'url(https://images.menghn.com/imgs/2022/04/eadada82d64ce17b.jpg) no-repeat',
					backgroundSize: 'cover'
				},
			}
		},
		onLoad(id) {
			// #ifdef MP-WEIXIN
			uni.request({
			    url: 'https://xcx.menghn.com/api/project_list',
				method:'POST',
			    success: (res) => {
					let reslist = res.data;
					const resData = reslist.filter(item => item.id == id.id);
					this.dataArr = resData[0].content;
			    }
			});
			//#endif
			this.$http.project_list().then((res) => {
				let reslist = res.data;
				const resData = reslist.filter(item => item.id == id.id);
				this.dataArr = resData[0].content;
			})
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.admine{
	padding: 10px;
	box-sizing: border-box;
}
</style>
