<template>
  <div id="app">
    <div id="navgation">
      <ul class="clearfix">
        <li><router-link to="/">公司介绍</router-link></li>
        <li><router-link to="/zzxx">组织信息</router-link></li>
        <li><router-link to="/cooperation">合作伙伴</router-link></li>
        <li><router-link to="/hgxx">合规信息</router-link></li>
        <li><router-link to="/yysj">运营数据</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
      </ul>
    </div>
    <div id="content">
    	<router-view/>
    </div>
  </div>
</template>

<style lang="less" scoped>
	#content{
		width:1200px;
		margin:0 auto;
	}
	#navgation{
		background-color:#fff;
		font-size:16px;
		margin-bottom:20px;
		ul{
			width:1200px;
			margin:0 auto;
		}
		li{
			width:138px;
			height:60px;
			line-height:60px;
			float:left;
		}
		a{
			color:#333;
		}
		.router-link-exact-active{
			color:#f55046;
		}
	}
</style>
