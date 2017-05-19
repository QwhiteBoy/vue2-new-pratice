<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>数据管理</template>
						<el-menu-item index="userList">用户列表</el-menu-item>
						<el-menu-item index="adminList">玩转Vuex全家桶</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-edit"></i>添加数据</template>
						<el-menu-item index="addShop">添加商铺</el-menu-item>
						<el-menu-item index="addGoods">添加商品</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>图表</template>
						<el-menu-item index="visitor">访问数据</el-menu-item>
						<el-menu-item index="newMember">用户数据</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<router-view></router-view>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
    	name: 'manage',
		computed: {
			// 当前激活菜单的 index, 得到当前 路由 传入 $route
			defaultActive: function() {
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../../style/mixin';
	.manage_page{
		
	}
</style>
