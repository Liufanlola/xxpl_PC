<template>
	<div class="zzxx_box">
		<h1>股东信息</h1>
		<div class="gd_content">
			<div class="gd_list">
				<img src="../../static//images/person.png">
				<span class="gd_name">李雨轩</span>
				<span>占股比例：99%</span>
			</div>
			<div class="gd_list">
				<img src="../../static//images/person.png">
				<span class="gd_name">王雷</span>
				<span>占股比例：1%</span>
			</div>
		</div>
	</div>
</template>
<style scoped lang="less">
.zzxx_box{
	display:inline-block;
	background-color:#fff;
	width:1000px;
	height:800px;
	box-sizing:border-box;
	padding:0 50px;
}
.gd_content{
	padding:0 55px 0 54px;
}
.gd_list{
	display:inline-block;
	float:left;
	box-sizing:border-box;
	width:386px;
	padding:0 133px;
	text-align:center;
	img{
		padding-bottom:5px;
	}
	span{
		display:block;
	}
	.gd_name{
		height:58px;
		line-height:58px;
	}
}
</style>