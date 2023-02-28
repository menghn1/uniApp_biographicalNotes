<template>
	<view>
		<u-navbar title="工作经历" :background="background" title-color="#717171" back-icon-color="#717171" ></u-navbar>
		<view class="content admine">
				<u-time-line>
				<view v-for="(item,index) in dataArr" :key="index">
					<u-time-line-item nodeTop="2">
						<!-- 此处自定义了左边内容，用一个图标替代 -->
						<template v-slot:node>
							<view class="u-node" >
								<!-- 此处为uView的icon组件 -->
								<u-icon name="calendar" color="#19be6b" :size="40"></u-icon>
							</view>
						</template>
						<template v-slot:content>
							<view class="borderbod">
								<view class="u-order-title">{{item.title}}</view>
								<view class="u-order-time"><span class="gztime">工作</span><span class="goskdt">{{formatDate(item.timeS)}}-{{formatDate(item.timeE)}}</span></view>
								<view class="u-order-desc">工作内容:{{item.content}}</view>
							</view>
						</template>
					</u-time-line-item>
				</view>		
				</u-time-line>
		</view>	
	</view>
</template>

<script>
	import moment from 'moment'
	export default {
		data() {
			return {
				dataArr:[],
				background: {
					background: 'url(https://images.menghn.com/imgs/2022/04/6dc856bc6cef9bd5.jpg) no-repeat',
					backgroundSize: 'cover'
				},
			}
		},
		onLoad() {
			this.getall()
		},
		methods: {
			getall(){
				// #ifdef MP-WEIXIN
				uni.request({
				    url: 'https://xcx.menghn.com/api/work_list',
					method:'POST',
				    success: (res) => {
						this.dataArr = res.data
				    }
				});
				//#endif
				this.$http.work_list().then((res) => {
					this.dataArr = res.data
				})
			},
			formatDate(time) {
			       return moment(time).format('YYYY年MM月')
			    },
		}
	}
</script>

<style scoped>
.admine{
	margin:10px 20px;
	font-family: '思源黑体';
	color: #717171;
}
.borderbod{
	background: #f0f0f0;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 2px;
}
.u-order-title{
	font-size: 15px;
}
.u-order-desc{
	font-size: 12px;
	line-height: 20px;
}
.gztime{
	background: #4dbcb6;
	color: #fff;
	padding:2px 5px;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}
.goskdt{
	color: #6baea7;
	padding:1px 3px;
	border: 1px solid #6baea7;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	border-left: none;
}
.u-order-time{
	margin: 7px 0;
}
</style>
