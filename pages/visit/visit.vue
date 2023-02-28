<template>
	<view>
		<u-navbar title="你好陌生人" :background="background" title-color="#717171" back-icon-color="#717171" ></u-navbar>
		<view class="content admine">
			<view  v-for="(item,index1) in dataArr" :key="index1">
					<view class="ullibox" :class="item.sex == '2'?'ullibox1':'ullibox2'">
						<view>
							<img class="leftImg" :src="item.photo" alt="">
							<view class="righttxt">{{item.name}}</view>
							<view class="righttxt" v-if="item.sex == '2'">一位帅气的小哥哥</view>
							<view class="righttxt" v-else-if="item.sex == '0'">一位漂亮的小姐姐</view>
							<view class="righttxt" v-else-if="item.sex == '1'">一位漂亮的小姐姐</view>
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
					background: 'url(https://images.menghn.com/imgs/2022/04/eadada82d64ce17b.jpg) no-repeat',
					backgroundSize: 'cover'
				},
			}
		},
		onLoad() {
			this.getall()
		},
		methods: {
			// 记录列表
			getall(){
				// #ifdef MP-WEIXIN
				uni.request({
				    url: 'https://xcx.menghn.com/api/record_list',
					method:'POST',
				    success: (res) => {
						this.dataArr = res.data.reverse();//倒序
				    }
				});
				//#endif
				this.$http.record_list().then((res) => {
					this.dataArr = res.data.reverse();//倒序
				})
			}
		}
	}
</script>

<style scoped>
.ullibox{
	margin: 10px;
	border-radius: 10px;
	padding: 15px 10px;
	overflow: hidden;
	animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
	animation-duration: 2s; /* don't forget to set a duration! */
}
.ullibox1{
	background: #0086B3;
	box-shadow:2px 3px 10px #0086B3;
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
.ullibox2{
	background: #e62b76;
	box-shadow:2px 3px 10px #e62b76;
}

</style>
