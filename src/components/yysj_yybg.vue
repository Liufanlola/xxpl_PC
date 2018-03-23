<template>
	<div class="yybg_box">
		<h1>运营报告</h1>
		<div class="report_list">
			<ul class="clearfix">
				<li><router-link to="/yysj/yybg/">2018</router-link></li>
				<li><router-link to="/yysj/yybg/2017">2017</router-link></li>
				<li><router-link to="/yysj/yybg/2016">2016</router-link></li>
			</ul>
		</div>
		<router-view/>
	</div>
</template>
<style scoped lang="less">
.yybg_box{
	display:inline-block;
	background-color:#fff;
	width:1000px;
	height:1200px;
	box-sizing:border-box;
	padding:0 50px;
}
.report_list{
	font-size:20px;
	ul{
		display:block;
		width:319px;
		margin:0 auto;
	}
	li{
		float:left;
		padding-right:46px;
		a{
			color:#333;
		}
	}
	.router-link-exact-active{
		padding:12px 20px;
		background-color:#F24E43;
		color:#fff;
		border-radius:50px;
	}
}
</style>