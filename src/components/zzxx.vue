<template>
	<div class="clearfix">
		<div id="zzxx_navation" class="zzxx_content">
			<ul>
				<li><router-link to="/zzxx/">工商信息</router-link></li>
				<li><router-link to="/zzxx/gdxx">股东信息</router-link></li>
				<li><router-link to="/zzxx/zzjg">组织架构</router-link></li>
				<li><router-link to="/zzxx/tdcy">团队成员</router-link></li>
				<li class="last-list"><router-link to="/zzxx/fzjg">分支机构</router-link></li>
			</ul>
		</div>
		<div class="zzxx_content">
			<router-view/>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.zzxx_content{
		display:inline-block;
		float:left;
	}
	#zzxx_navation{
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