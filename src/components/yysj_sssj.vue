<template>
	<div class="yysj_box">
	<div>
		<div><h1>实时数据</h1><span></span></div>
		<span class="data_time">数据统计周期：截止至 2018-02-07</span>
		<div class="sssj_listAll sssj_list">
			<div class="sssj_list1">
				<span>
					<em>累计借贷金额</em>
					<strong>45,355,633,99</strong>
				</span>
				<span>
					<em>累计为出借人赚取(元)</em>
					<strong>2,355,633,99</strong>
				</span>
				<span>
					<em>借贷余额(元)</em>
					<strong>45,355,633,99</strong>
				</span>
			</div>
			<div class="sssj_list2">
				<span>
					<em>累计借贷笔数</em>
					<strong>577</strong>
				</span>
				<span>
					<em>借贷余额笔数(笔)</em>
					<strong>577</strong>
				</span>
			</div>
		</div>
	</div>
	<div>
		<h1>其他数据</h1>
		<div class="sssj_list sssj_list3 sssj_dashed">
			<span>
				<em>累计出借人数量(人)</em>
				<strong>1235</strong>
			</span>
			<span>
				<em>累计借款人数量(人)</em>
				<strong>459</strong>
			</span>
			<span>
				<em>当前出借人数量(人)</em>
				<strong>1235</strong>
			</span>
			<span>
				<em>当前借款人数量(人)</em>
				<strong>459</strong>
			</span>
		</div>
		<div class="sssj_list sssj_listSame sssj_dashed">
			<span>
				<em>前十大借款人待还金额占比(%)</em>
				<strong>1235</strong>
			</span>
			<span>
				<em>最大单一借款人待还金额占比(%)</em>
				<strong>459</strong>
			</span>
		</div>
		<div class="sssj_list sssj_listSame sssj_dashed">
			<span>
				<em>关联关系借款余额(元)</em>
				<strong>123526.36</strong>
			</span>
			<span>
				<em>关联关系借款笔数(笔)</em>
				<strong>459</strong>
			</span>
		</div>
		<div class="sssj_list sssj_listSame sssj_dashed">
			<div class="sssj_yq">
				<span>
					<em>逾期金额(元)</em>
					<strong>123526.36</strong>
				</span>
				<span>
					<em>逾期笔数(笔)</em>
					<strong>459</strong>
				</span>
			</div>
			<div>
				<span>
					<em>逾期90天(不含)以上金额(元)</em>
					<strong>123526.36</strong>
				</span>
				<span>
					<em>逾期90天(不含)以上笔数(笔)</em>
					<strong>459</strong>
				</span>
			</div>
		</div>
		<div class="sssj_list sssj_listSame sssj_dashed">
			<span>
				<em>累计代偿金额(元)</em>
				<strong>123526.36</strong>
			</span>
			<span>
				<em>累计代偿笔数(笔)</em>
				<strong>459</strong>
			</span>
		</div>
	</div>
	</div>
</template>
<style scoped lang="less">
@font-face
{
	font-family: PT;
	src: url('../../static/font/PT.ttf'),
}
.yysj_box{
	display:inline-block;
	background-color:#fff;
	width:1000px;
	height:1400px;
	box-sizing:border-box;
	padding:0 50px;
	h1{
		border-bottom:1px solid #ccc;
	}
	.data_time{
		color:#666;
		line-height:63px;
	}
	.sssj_listAll{
		box-shadow:0 0 15px #f8f8f8;
	}
	.sssj_list{
		span{
			display:inline-block;
			text-align:center;
		}
		em{
			font-size:16px;
			color:#666;
			height:33px;
			line-height:33px;
			display:block;
		}
		strong{
			font-size:32px;
			color:#333;
			font-weight:bold;
			height:39px;
			line-height:39px;
			font-family:PT;
		}
	}
	.sssj_list1{
		padding:51px 46px 38px 22px;
		span:nth-child(1){
			width:281px;
		}
		span:nth-child(2){
			width:264px;
		}
		span:nth-child(3){
			width:277px;
		}
	}
	.sssj_list2{
		padding:0 175px 46px;
		span{
			width:270px;
		}
	}
	.sssj_dashed{
		border-bottom:1px dashed #E1E1E1;
	}
	.sssj_list3{
		padding:13px 0 45px 0;
		em{
			height:30px;
			line-height:30px;
		}
		strong{
			height:35px;
			line-height:35px;
		}
		span{
			width:150px;
			padding-right:92px;
		}
		span:last-child{
			padding-right:0;
		}
	}
	.sssj_listSame{
		padding:29px 0;
		span{
			width:332px;
			padding-left:77px;
		}
		span:last-child{
			padding-right:77px;
		}
	}
	.sssj_listSame:last-child{
		border-bottom:none;
	}
	.sssj_yq{
		padding-bottom:29px;
	}
}
</style>