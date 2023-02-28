<template>
	<view>
		<u-navbar title="项目列表" :background="background" title-color="#717171" back-icon-color="#717171" ></u-navbar>
		<view class="content admine">
			<view v-for="(item,index) in dataArr" :key="index" @click="Jump(item)">
				<view class="ullibox ullibox1" :style="{background:item.colos}" >
					<view>
						<img class="leftImg" :src="'https://xcx.menghn.com/uploads/'+item.picture" alt="">
						<view class="righttxt">{{item.name}}</view>
					</view>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataArr:[],
				background: {
					background: 'url(https://images.menghn.com/imgs/2022/04/deac08f288f37f99.jpg) no-repeat',
					backgroundSize: 'cover'
				}
			}
		},
		onLoad() {
			this.getall()
		},
		methods: {
		getall(){
			// #ifdef MP-WEIXIN
			uni.request({
			    url: 'https://xcx.menghn.com/api/project_list',
				method:'POST',
			    success: (res) => {
					this.dataArr = res.data.reverse();//倒序
			    }
			});
			//#endif
			this.$http.project_list().then((res) => {
				this.dataArr = res.data.reverse();//倒序
			})
		},
		Jump(item){
			uni.navigateTo({
			    url: '/pages/details/details?id=' + item.id
			});
		},
			
		}
	}
</script>

<style scoped>
	.daeexx{
		margin: 0 5px;
	}
.ullibox{
	margin: 10px;
	border-radius: 10px;
	padding: 20px 10px;
	overflow: hidden;
	animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
	animation-duration: 2s; /* don't forget to set a duration! */
}
.ullibox1{
	background: #0086B3;
	box-shadow:2px 3px 10px #D19EE4;
}
.leftImg{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	box-shadow:2px 1px 10px #fff;
	float: left;
}
.righttxt{
	font-size: 15px;
	font-weight: bold;
	margin-left: 60px;
	color: #fff;
	line-height: 30px;
	
}
.ddsxdda image{
	width: 100%;
}
.slot-wrap{
	margin-left: 10px;
}

</style>
