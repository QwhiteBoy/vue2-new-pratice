<template>
    <div class="fillcontain">
        <head-top></head-top>
        <el-row style="margin-top: 20px;">
            <el-col :span="20" :offset="2">
                <header class="top">用户列表</header>
                <div class="group">
                    <el-button type="primary" size="small" @click="create">+ 新建</el-button>
                </div>
                <el-table v-loading.body="loading" :data="tableData" style="width: 100%">
                    <el-table-column
                      prop="name"
                      label="人员名称"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="createTime"
                      label="创建时间">
                    </el-table-column>
                    <el-table-column
                      prop="editTime"
                      label="修改时间">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="详细地址">
                    </el-table-column>
                    <el-table-column
                      prop="ip"
                      label="当前IP">
                    </el-table-column>
                    <el-table-column
                      prop="actor"
                      label="有关职业">
                    </el-table-column>
                    <el-table-column
                      prop="remark"
                      label="备注信息">
                    </el-table-column>
                    <el-table-column
                      prop="action"
                      label="操作">
                    </el-table-column>
                  </el-table>
                  
                  <!--新增界面-->
                  <el-dialog title="新增记录" v-model="addFormVisible" :close-on-click-modal="false">
                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                      <el-form-item label="姓名" prop="name">
                        <el-input v-model="addForm.name" auto-complete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="性别">
                        <el-radio-group v-model="addForm.sex">
                          <el-radio class="radio" :label="1">男</el-radio>
                          <el-radio class="radio" :label="0">女</el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="年龄">
                        <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
                      </el-form-item>
                      <el-form-item label="生日">
                        <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
                      </el-form-item>
                      <el-form-item label="地址">
                        <el-input type="textarea" v-model="addForm.addr"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click.native="addFormVisible = false">取消</el-button>
                      <el-button type="primary" @click.native="addSubmit('addForm')" :loading="addLoading">提交</el-button>
                    </div>
                  </el-dialog>
                </el-col>
        </el-row>
    </div>
</template>

<script>

    import { userList } from '../../service/getData'
    import headTop from '../../components/headTop'
    export default {
        data() {
            return {
                tableData: [],
                loading: false,
                addFormVisible: false,// 新增界面是否显示
                addLoading: false,
                addFormRules: {
                  name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                  ]
                },
                // 新增界面数据
                addForm: {
                  name: '',
                  sex: -1,
                  age: 0,
                  birth: '',
                  addr: ''
                },
            };
        },
        mounted() {
            this.initData();
        },
      	components: {
      		headTop,
      	},
        methods: {
            async initData() {
                this.loading = true;
                setTimeout(() => {
                    userList().then(res => {
                        this.tableData = res;
                    })
                    this.loading = false;
                }, 1000)
            },
            create() {
              this.addFormVisible = true;
              this.addForm = {
                name: '',
                sex: -1,
                age: 0,
                birth: '',
                addr: ''
              };
            },
            addSubmit(formName) {
              this.$refs[formName].validate((volid) => {
                if (volid) {
                  let para = Object.assign({}, this.addForm);
                  console.log(para)
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

<style lang="less">
	@import '../../style/mixin';
  .top {
      text-align: center;
      margin-bottom: 10px;
  }
  .group {
      margin-bottom: 10px;
  }
</style>
