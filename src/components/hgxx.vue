<template>
	<div class="hgxx_box">
		<div class="hgxx_content">
			<h1>备案信息</h1>
			<div class="hgxx_list">
				<div><span>备案登记信息</span><span>办理中</span></div>
				<div><span>电信业务经营许可信息</span><span>办理中</span></div>
				<div><span>资金存管信息</span><a href="javaScript:;">已签订协议</a></div>
				<div><span>公安机关核发的网站备案图标及编号</span><span>办理中</span></div>
				<div><span>风险管理信息</span><span>办理中</span></div>
				<div style="display:none"><span>信息安全测试</span><a href="javaScript:;">点击查看</a></div>
			</div>
		</div>
		<div class="hgxx_content">
			<h1>审核信息</h1>
			<div class="hgxx_list">
				<div><span>财务审核报告</span><span>待披露</span></div>
				<div><span>经营合规重点环节的审计结果</span><span>待披露</span></div>
				<div><span>合规性审查报告</span><span>待披露</span></div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.hgxx_content{
		box-sizing:border-box;
		padding:0 60px;
		background-color:#fff;
		font-size:16px;
	}
	h1{
		padding-left:250px;
	}
	.hgxx_content:nth-child(2){
		padding-bottom:200px;
	}
	.hgxx_list{
		div{
			height:36px;
			line-height:36px;
			span{
				display:inline-block;
			}
			span:nth-child(1){
				width:650px;
				box-sizing:border-box;
				padding-left:280px;
			}
		}
		a{
			color:#0083FD;
		}
	}
</style>