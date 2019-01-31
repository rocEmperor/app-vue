<template>
  <div class="main-header">
    <div class="title">物业缴费</div>
    <div class="opearte">
      <span class="login-out" @click="onLoginOut">退出登录</span>
      <span class="change-password" @click="changePasswold">修改密码</span>
    </div>
    <el-dialog
      title="修改密码"
      :visible.sync="model.dialogVisible"
      :modal-append-to-body="false"
      @close="resetData"
      width="30%">
      <el-form ref="formDataRef" :model="model.formData" :rules="rulesList">
        <el-form-item
          prop="old"
          :rules="[ { 
              required: true,
              message: '原密码不能为空'
            }
          ]">
          <el-input v-model="model.formData.old" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item
          prop="new"
          :rules="[ { 
              required: true,
              message: '新密码不能为空'
            }, {
              pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,
              message: '请输入6-20位密码（不能是纯数字，纯字母，纯特殊字符）'
            }
          ]">
          <el-input v-model="model.formData.new" placeholder="请输入6-20新密码" type="password" @input="resetNewAgain"></el-input>
        </el-form-item>
        <el-form-item
          prop="newAgain">
          <el-input v-model="model.formData.newAgain" placeholder="请输入6-20新密码" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="opearteDialog" size="small">取 消</el-button>
        <el-button type="primary" @click="opearteDialog('formDataRef')" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'MainHeader',
    data () {
      const validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.model.formData.new) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        rulesList: {
          newAgain: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    computed: mapState({
      model: state => state.MainLayoutStore
    }),
    methods: {
      /**
       * 退出登录
       */
      onLoginOut () {
        this.$confirm('确认退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          window.location.href = '#/';
        }).catch(() => {});
      },
      /**
       * 修改密码
       */
      changePasswold () {
        this.$store.commit({
          type: 'MainLayoutStore/concat',
          payload: {
            dialogVisible: true
          }
        })
      },
      resetData () {
        this.$refs['formDataRef'].resetFields();
        this.$store.commit({
          type: 'MainLayoutStore/concat',
          payload: {
            dialogVisible: false
          }
        })
      },
      opearteDialog (formDataRef) {
        if (formDataRef == 'formDataRef') {
          this.$refs[formDataRef].validate((validate) => {
            if (validate) {
              this.resetData();
            } else {
              console.log('表单验证未通过')
            }
          })
        } else {
          this.resetData();
        }
      },
      resetNewAgain () {
        let formData = this.model.formData;
        formData.newAgain = '';
        this.$store.commit({
          type: 'MainLayoutStore/concat',
          payload: {
            formData: { ...formData }
          }
        })
        this.$refs['formDataRef'].resetFields();
      }
    }
  }
</script>

<style lang="less">
  @import './MainLayout.less';
</style>

