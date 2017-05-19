<template>
  	<div class="login_page fillcontain">
  		<transition name="form-fade" mode="in-out">
  			<section class="form_contianer" v-show="showLogin">
  				<div class="manage_tip">
  					<p>Vue Cloud 管理系统</p>
  				</div>
				<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
  			</section>
  		</transition>
  	</div>
</template>

<script>
	export default {
	    name: 'login',
		data() {
			return {
				// 判断是否登录
				showLogin: false,
				// 输入信息
				loginForm: {
					username: '',
					password: ''
				},
				// 定义验证规则
				rules: {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					]
				}
			}
		},
		mounted() {
			this.showLogin = true;
		},
		methods: {
			submitForm(formName) {
				// 传入 ref 值，方便获取DOM节点，然后通过ele组件中validate验证其正确性
				this.$refs[formName].validate((volid) => {
					if (volid) {
						this.$router.push('manage')
					} else {
						// 报错
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../style/mixin.less';
	.login_page{
		background-color: #324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
		.wh(320px, 210px);
		.ctp(320px, 210px);
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
