<template>
	<view class="backer">
		<u-navbar title="职业技能" :background="background" title-color="#717171" back-icon-color="#717171" ></u-navbar>
		<view class="content ">
			<view class="backBoxgg"  >
				<view class="aloxpaod" v-for="(item,index) in dataArr" :key="index">
					<template v-if="item.type ==0">
						<view class="idoafe">{{item.name}}</view>
						<view class="pxoff" v-html="item.content"></view>
					</template>
				</view>
			</view>
			<u-divider>大漠孤烟直</u-divider>
			<!-- end -->
			<view class="backBoxgg" >
				<view>
					<view class="maoxlod" >
						<view class="aloxpaod" v-for="(item1,index1) in dataArr" :key="index1" >
							<template v-if="item1.type == 1">
								<view class="idoafe">{{item1.name}}</view>
								<u-line-progress :striped="true" :percent="item1.content" :striped-active="true" :active-color="randomRgb()"></u-line-progress>
							</template>
						</view>
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
				  randomRgb() {
					let R = Math.floor(Math.random() * 255);
					let G = Math.floor(Math.random() * 255);
					let B = Math.floor(Math.random() * 255);
					return 'rgb(' + R + ',' + G + ',' + B + ')'
					;
				  },
				background: {
					background: 'url(https://images.menghn.com/imgs/2022/04/a9c2e7cc782a28f4.jpg) no-repeat',
					backgroundSize: 'cover'
				},
			}
		},
		onLoad() {
			this.getall();
		},
		methods: {
			getall(){
				// #ifdef MP-WEIXIN
				uni.request({
				    url: 'https://xcx.menghn.com/api/skill_list',
					method:'POST',
				    success: (res) => {
						this.dataArr = res.data;
				    }
				});
				//#endif
				this.$http.skill_list().then((res) => {
					this.dataArr = res.data;
				})
			}
			
		}
	}
</script>

<style scoped>
.backer{
	height: 100vh;
	font-family: '思源黑体';
	color: #717171;
}
.backBoxgg{
	margin: 10px ;
	box-shadow:2px 3px 10px #ccc;
	border-radius: 3px;
	padding: 10px;
	box-sizing: border-box;
}
.idoafe{
	font-size: 15px;
}
.idoafe::before{
	content: '';
	display: inline-block;
	width: 8px;
	height: 8px;
	background: #18B566;
	border-radius: 50%;
	margin-right: 10px;
}
.pxoff{
	font-size: 13px;
	line-height: 25px;
}
.opooxad{
	margin:10px;
}
.maoxlod{
	margin-bottom: 15px;
}
.aloxpaod{
	margin-bottom: 10px;
}
</style>
