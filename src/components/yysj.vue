<template>
	<div class="clearfix">
		<div id="yysj_navation" class="yysj_content">
			<ul>
				<li><router-link to="/yysj/">实时数据</router-link></li>
				<li><router-link to="/yysj/yybg">运营报告</router-link></li>
				<li class="last-list"><router-link to="/yysj/sfbz">收费标准</router-link></li>
			</ul>
		</div>
		<div class="yysj_content">
			<router-view/>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.yysj_content{
		display:inline-block;
		float:left;
	}
	#yysj_navation{
		width:170px;
		box-sizing:border-box;
		padding:0 30px;
		background-color:#fff;
		font-size:16px;
		text-align:center;
		margin-right:20px;
		li{
			height:70px;
			line-height:70px;
			box-sizing:border-box;
			border-bottom:1px solid #e1e1e1;
		}
		.last-list{
			border-bottom:none;
		}
		a{
			color:#333;
		}
		.router-link-exact-active{
		
			color:#f55046;
		}
	}
</style>