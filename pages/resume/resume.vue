<template>
	<view class="backer">
		<u-navbar title="个人简历" :background="background" title-color="#fff" back-icon-color="#fff" ></u-navbar>
		<view class="content ">
			<view class="backBoxgg">
				<image class="imguser" :src="'https://xcx.menghn.com/uploads/' + dataArr.head_portrait" mode=""></image>
				<view class="potxt">{{dataArr.name}}</view>
				<view class="loxxx">期望职位:<span class="foncolor">{{dataArr.expected_position}}</span></view>
				<view class="potxt"><span class="maexs">男</span><span class="maexs">{{dataArr.age}}岁</span><span class="maexs">{{dataArr.working_years}}年工作经验</span></view>
				<view>
					<span class="iconlea" @click="show = true">
						<u-icon name="chat-fill" color="#2979ff" size="35" class="maexs1"></u-icon> 
						添加微信
					</span>
					<span class="iconlea" @click="clickpohone">
						<u-icon name="phone" color="#2979ff" size="35" class="maexs1"></u-icon> 
						拨打电话
					</span>
					<span class="iconlea" @click="getadd">
						<u-icon name="plus-people-fill" color="#2979ff" size="35" class="maexs1"></u-icon> 
						保存通讯录
					</span>
				</view>
			</view>
			<!-- end  -->
			<view class="backBoxgg">
				<view>
					<u-icon  name="https://images.menghn.com/imgs/2022/04/780abe32b3f1e254.png" color="#717171" size="40"></u-icon>
				</view>
				<view class="bordleft">教育经历</view>
				<view class="fmeleft">
					<view v-html="dataArr.education"></view>
				</view>
			</view>
			<!-- end  -->
			<view class="backBoxgg">
				<view>
					<u-icon  name="thumb-up-fill" color="#2979ff" size="40"></u-icon>
				</view>
				<view class="bordleft">自我评价</view>
				<view class="fmeleft">
					{{dataArr.self_evaluation}}
				</view>
			</view>
		</view>
		<!-- end弹出 -->
		<u-popup v-model="show" mode="center">
			<view>
				<u-icon name="https://images.menghn.com/imgs/2022/04/a4da211322836982.jpg"  size="700"></u-icon>
			</view>
		</u-popup>
		<!-- 添加通讯录 -->
		<u-action-sheet :list="list1" v-model="inpone1" :cancel-btn="true" @click="clickpohone1"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataArr:[],
				background: {
					background: 'url(https://images.menghn.com/imgs/2022/04/ce0e4b82065fc15e.jpg) no-repeat',
					backgroundSize: 'cover'
				},
				show:false,
				inpone1:false,
				list1: [{
					text: '添加到通讯录',
					fontSize: 40
				}],
			}
		},
		onLoad() {
			this.getall();
		},
		methods: {
			getall(){
				// #ifdef MP-WEIXIN
				uni.request({
				    url: 'https://xcx.menghn.com/api/self_info',
					method:'POST',
				    success: (res) => {
						this.dataArr = res.data[0]
				    }
				});
				//#endif
				this.$http.banner().then((res) => {
					this.dataArr = res.data[0]
				})
			},
			clickpohone(){
				uni.makePhoneCall({
				    phoneNumber: this.dataArr.phone
				});
			},
			getadd(){
				this.inpone1 = true;
			},
			clickpohone1(){
				uni.addPhoneContact({
				    nickName: '三七',
				    lastName: '蒙',
				    firstName: '海宁',
				    remark: '',
				    mobilePhoneNumber: this.dataArr.phone,
				    weChatNumber: this.dataArr.we_chat,
				    success: function () {
				    },
				    fail: function () {
				    }
				});
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
	margin: 10px;
	box-shadow:2px 3px 10px #ccc;
	border-radius: 3px;
	padding: 10px;
	box-sizing: border-box;
	text-align: center;
}
.imguser{
	width: 70px;
	height: 70px;
	border-radius: 50%;
	
}
.potxt{
	font-size: 15px;
}
.foncolor{
	color: #19BE6B;
}
.loxxx{
	font-size: 13px;
}
.backBoxgg view{
	margin-bottom: 8px;
}
.maexs{
	margin-right: 10px;
}
.maexs1{
	margin-right: 5px;
}
.iconlea{
	margin-right: 20px;
}

.bordleft{
	position: relative;
}
.bordleft::after{
	content: '';
	display: inline-block;
	width: 35%;
	height: 1rpx;
	background: #dadada;
	position: absolute;
	right:0;
	top: 50%;
	transform: translate(0,-50%);
}
.bordleft::before{
	content: '';
	display: inline-block;
	width: 35%;
	height: 1rpx;
	background: #dadada;
	position: absolute;
	left:0;
	top: 50%;
	transform: translate(0,-50%);
}
.fmeleft{
	text-align: left;
	line-height: 20px;
}
</style>
