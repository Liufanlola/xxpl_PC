<template>
<div class="zzxx_box">
	<div>
		<h1>团队成员</h1>
		<div class="tdcy_content">
			<div class="td_list clearfix">
				<span class="td_name">
					<strong>郑强</strong>
					<em>CEO</em>
				</span>
				<ul class="td_info">
					<li><span>毕业于上海对外贸易大学</span></li>
					<li><span>曾任职于大润发</span></li>
				</ul>
				<ul>
					<li><span>拥有5年以上互联网金融行业从业经验</span></li>
				</ul>
			</div>
			<div class="td_list clearfix">
				<span class="td_name">
					<strong>刘吉庆</strong>
					<em>业务总监</em>
				</span>
				<ul class="td_info">
					<li><span>毕业于上海航空航天大学</span></li>
					<li><span>曾任职于华宇物流</span></li>
				</ul>
				<ul>
					<li><span>拥有3年以上互联网金融行业从业经验</span></li>
				</ul>
			</div>
			<div class="td_list clearfix">
				<span class="td_name">
					<strong>王玉贵</strong>
					<em>CTO</em>
				</span>
				<ul class="td_info">
					<li><span>毕业于桂林航天工业学院</span></li>
					<li><span>曾任职于日本NTT Data, 饕餮图像</span></li>
					<li><span>拥有4年以上互联网金融行业从业经验</span></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="cyry">
		<h1>从业人员</h1>
		<div>
			<span class="cyry_intro">从业人员信息改下“截止2018年3月，往来金服的从业人员共17位，硕士生3位，本科毕业11位，专科生3位”</span>
			<div class="clearfix" style="display:none">
				<span class="fan"><img src="../../static/images/fan.png"></span>
				<ul>
					<li><span class="ss">硕士及以上</span><em>0.9%</em></li>
					<li><span class="bk">本科协力</span><em>16.4%</em></li>
					<li><span class="zk">专科学历</span><em>46.5%</em></li>
					<li><span class="qt">其他</span><em>33.2%</em></li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>
<style scoped lang="less">
.zzxx_box{
	display:inline-block;
	background-color:#fff;
	width:1000px;
	height:1500px;
	box-sizing:border-box;
	padding:0 50px;
}
.td_list{
	padding:52px 0;
	border-bottom:1px dashed #e5e5e5;
	.td_name{
		display:inline-block;
		width:160px;
		float:left;
		margin-top:-15px;
	}
	strong{
		font-size:30px;
		font-weight:bold;
		display:block;
		line-height:62px;
	}
	em{
		display:inline-block;
		font-size:18px;
		line-height:24px;
	}
	ul{
		display:inline-block;
		float:left;
	}
	.td_info{
		padding-right:20px;
	}
	li{
		font-size:14px;
		color:#666;
		height:34px;
		line-height:34px;
		list-style: disc;
		span{
			padding-right:20px;
		}
	}
}
.cyry_intro{
	display:block;
	font-size:16px;
	color:#333;
	padding-bottom:58px;
}
.fan{
	width:418px;
	box-sizing:border-box;
	display:inline-block;
	padding:0 78px;
	float:left;
	img{
		width:100%;
	}
}
.cyry{
	ul{
		display:inline-block;
		float:left;
		padding:65px 0;
	}
	li{
		height:53px;
		line-height:53px;
		em{
			color:#999;
			padding-left:130px;
			float:right;
		}
	}
	span:before{
		content:"";
		width:6px;
		height:6px;
		display:inline-block;
		margin-right:13px;
		top:-2px;
		position:relative;
	}
	.ss:before{
		background-color:#FFD121;
	}
	.bk:before{
		background-color:#3E64FF;
	}
	.zk:before{
		background-color:#5EAAFD;
	}
	.qt:before{
		background-color:#FC9F1A;
	}
}
</style>