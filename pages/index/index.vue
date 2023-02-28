<template>
	<view class="content">
		<view class="poxiBox">
			<view class="posixkd">
				<view class="useemdid">
					<img class="imgera" src="../../static/img/3.png" alt="">
					<view class="nameuserx" @click="Jump('visit')">{{dataArr.name}}</view></br>
					<span class="iconcolor">Code & Input & Output</span>
				</view>
				<!-- end 布局 未登录 -->
				<view class="boeul" v-if="userlogin">
					<view class="lilist floatleft iconbacb1" @click="getuser('resume')">
						<i>
							<img class="imgicon" src="https://images.menghn.com/imgs/2022/04/00954fc9c9f7a8f9.png">
						</i>
						<span class="gioex">个</span>
						<span class="loxpo">人简历</span>
					</view>
					<view class="lilist floatright iconbacb2" @click="getuser('professional')">
						<i>
							<img class="imgicon" src="https://images.menghn.com/imgs/2022/04/30b1865e4776e48d.png">
						</i>
						<span class="gioex">工</span>
						<span class="loxpo">作经历</span>
					</view>
					<view class="lilist floatleft iconbacb3" @click="getuser('project')">
						<i>
							<u-icon name="grid" color="#fff" size="50"></u-icon>
						</i>
						<span class="gioex">项</span>
						<span class="loxpo">目经验</span>
					</view>
					<view class="lilist floatright iconbacb4" @click="getuser('work')">
						<i>
							<u-icon name="bookmark" color="#fff" size="50"></u-icon>
						</i>
						<span class="gioex">职</span>
						<span class="loxpo">业技能</span>
					</view>
				</view>
				<!-- 已登录 -->
				<view class="boeul" v-if="!userlogin">
					<view class="lilist floatleft iconbacb1" @click="Jump('resume')">
						<i>
							<img class="imgicon" src="https://images.menghn.com/imgs/2022/04/00954fc9c9f7a8f9.png">
						</i>
						<span class="gioex">个</span>
						<span class="loxpo">人简历</span>
					</view>
					<view class="lilist floatright iconbacb2" @click="Jump('professional')">
						<i>
							<img class="imgicon" src="https://images.menghn.com/imgs/2022/04/30b1865e4776e48d.png">
						</i>
						<span class="gioex">工</span>
						<span class="loxpo">作经历</span>
					</view>
					<view class="lilist floatleft iconbacb3" @click="Jump('project')">
						<i>
							<u-icon name="grid" color="#fff" size="50"></u-icon>
						</i>
						<span class="gioex">项</span>
						<span class="loxpo">目经验</span>
					</view>
					<view class="lilist floatright iconbacb4" @click="Jump('work')">
						<i>
							<u-icon name="bookmark" color="#fff" size="50"></u-icon>
						</i>
						<span class="gioex">职</span>
						<span class="loxpo">业技能</span>
					</view>
				</view>
			</view>
		</view>
		<!-- end滑动 -->
		<hqs-popup :from="popFrom" v-model="showPop" height="100vh">
			<view class="boxpoax">
				<view class="boxpoax1">
					<view class="nameuser">{{dataArr.name}}</view>
					<view class="malxod">{{dataArr.expected_position}}</view>
					<view class="textcer">e n t e r</view>
					<u-icon class="clikmind" name="arrow-right-double"></u-icon>
				</view>
			</view>

		</hqs-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPop: true,
				popFrom: 'top',
				maskClick: true,
				dataArr: [],
				userlogin: true
			}
		},
		onLoad() {
			this.getAll();
			this.inspectCache();

		},
		methods: {
			Jump(url) {
				uni.navigateTo({
					url: '/pages/' + url + '/' + url
				});
			},
			getAll() {
				// #ifdef MP-WEIXIN
				uni.request({
					url: 'https://xcx.menghn.com/api/self_info',
					method: 'POST',
					success: (res) => {
						this.dataArr = res.data[0]
					}
				});
				//#endif
				this.$http.banner().then((res) => {
					this.dataArr = res.data[0]
				})
			},
			getuser(url) {
				let that = this;
				// #ifdef MP-WEIXIN
				wx.getUserProfile({
					desc: '用于展示记录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						uni.request({
							url: 'https://xcx.menghn.com/api/record_add',
							method: 'POST',
							data: {
								name: res.userInfo.nickName,
								sex: res.userInfo.gender,
								photo: res.userInfo.avatarUrl
							},
							success: (res) => {
								that.Jump(url);
								console.log(res)
							}
						});
						// 缓存登录
						uni.setStorage({
							key: 'storage_key',
							data: 'hello',
							success: function() {
								that.userlogin = false;
							}
						});
					}
				})
				//#endif
				let data = {
					name: '在H5上访问',
					sex: '0',
					photo: 'https://xcx.menghn.com/vendor/dcat-admin/images/logo.png'
				}
				this.$http.record_add(data).then((res) => {
					that.Jump(url);
				})
				// 缓存登录
				uni.setStorage({
					key: 'storage_key',
					data: 'hello',
					success: function() {
						that.userlogin = false;
					}
				});

			},
			// 检查用户信息
			inspectCache() {
				const value = uni.getStorageSync('storage_key');
				if (value) {
					// this.userlogin = false;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		background-image: url('../../static/img/index.jpg');
		height: 100vh;
	}

	.poxiBox {
		width: 90%;
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.drawer {
		background-color: rgba(0, 0, 0, .9);
		height: 100vh;
	}

	.container {
		background-color: #19BE6B;
		width: 750rpx;
	}

	.boxpoax {
		background: rgba(0, 0, 0, .9);
		height: 100vh;
		position: relative;
	}

	.nameuser {
		color: #fff;
		text-align: center;
		font-size: 50rpx;
		font-size: 100;
	}

	.boxpoax1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.malxod {
		margin: 30px 0;
		font-size: 35rpx;
		display: inline-block;
		animation: flipInY;
		/* referring directly to the animation's @keyframe declaration */
		animation-duration: 2s;
		/* don't forget to set a duration! */
		color: #fff;
	}

	.textcer {
		text-align: center;
		color: #fff;
		margin-top: 150rpx;
		font-size: 35rpx;
	}

	.clikmind {
		color: #fff;
		position: absolute;
		top: 150%;
		left: 40%;
		transform: rotate(270deg);
		font-size: 30px;
	}

	.posixkd {}

	.imgera {
		font-size: 25px;
		float: left;
		width: 130rpx;
		height: 130rpx;
	}

	.nameuserx {
		font-size: 25px;
	}

	.useemdid {
		padding: 0 40px;
		box-sizing: border-box;
	}

	.iconcolor {
		color: #fff;
	}

	.boeul {
		width: 100%;
		overflow: hidden;
	}

	.boeul .lilist {
		width: 45%;
		padding: 10px 10px;
		box-sizing: border-box;
		border-radius: 10rpx;
		text-align: center;
		font-size: 15px;
		margin-bottom: 20px;
		color: #fff;
		background-size: 100px;
		// #ifdef H5
		padding-bottom: 30px;
		//#endif
	}

	.floatleft {
		float: left;
	}

	.floatright {
		float: right;
	}

	.gioex {
		font-size: 20px;
	}

	.loxpo {
		border-bottom: 1rpx solid #fff;
		padding-bottom: 2px;
	}

	.loxpo::after {
		content: '11';
		opacity: 0;
	}

	.iconbacb1 {
		background: #4dbcb6 url('https://images.menghn.com/imgs/2022/04/5168854eda584eab.png') no-repeat center center;
	}

	.iconbacb2 {
		background: #3282ff url('https://images.menghn.com/imgs/2022/04/5168854eda584eab.png') no-repeat center center;
	}

	.iconbacb3 {
		background: #653bb7 url('https://images.menghn.com/imgs/2022/04/5168854eda584eab.png') no-repeat center center;
	}

	.iconbacb4 {
		background: #9d2cb2 url('https://images.menghn.com/imgs/2022/04/5168854eda584eab.png') no-repeat center center;
	}

	.lilist i {
		font-size: 30px;
	}

	.imgicon {
		width: 25px;
		height: 25px;
	}
</style>
