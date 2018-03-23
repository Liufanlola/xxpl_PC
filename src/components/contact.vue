<template>
	<div class="contact_content">
		<h1>联系我们</h1>
		<div class="contact_list">
			<div><span>官方网站</span><a href="javaScript:;">www.wanglaijf.com</a></div>
			<div><span class="getTop">免费客服/投诉热线</span><span class="double"><strong></strong><em>(工作时间9:00-17:30)</em></span></div>
			<div><span class="getTop">客服QQ</span><span class="double"><em>QQ：3161313423、3272434140 </em><em>QQ群：524443811</em></span></div>
			<div><span>客服邮箱</span><a href="javaScript:;">service@wanglaijf.com</a></div>
			<div><span>关注微信</span><span>搜索公众号“yonglunjf”或“往来金服”</span></div>
			<div><span>通讯地址</span><span>上海市虹口区公平路18弄太平航运中心5栋5楼</span></div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.contact_content{
		box-sizing:border-box;
		padding:0 60px;
		background-color:#fff;
		font-size:16px;
		padding-bottom:200px;
	}
	h1{
		padding-left:206px;
	}
	.contact_list{
		div{
			position:relative;
			span{
				display:inline-block;
				height:36px;
				line-height:36px;
			}
			span:nth-child(1){
				width:430px;
				box-sizing:border-box;
				padding-left:235px;
			}
			span:nth-child(2){
				width:395px;
				text-align:right;
			}
			strong{
				display:block;
				font-size:30px;
				color:#0083FD;
				font-weight:bold;
				height:36px;
				line-height:36px;
				background:url("../../static/images/phone.png") no-repeat right center;
			}
			em{
				display:block;
				height:36px;
				line-height:36px;
			}
			.double{
				height:72px;
				line-height:36px;
			}
		}
		a{
			display:inline-block;
			width:395px;
			text-align:right;
			color:#0083FD;
		}
		.getTop{
			position:relative;
			top:-36px;
		}
	}
</style>