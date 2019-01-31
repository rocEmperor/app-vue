<template>
  <div class="forget-box">
    <div class="layout">
      <span class="logoSpan">物业缴费查询系统</span>
      <div class="contents">
        <h1 class="title">忘记密码</h1>
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
                message: '请输入6-20位密码（不能是纯数字，纯字母）'
              }
            ]">
            <el-input v-model="model.formData.new" placeholder="请输入6-20新密码" type="password" @input="resetNewAgain"></el-input>
          </el-form-item>
          <el-form-item
            prop="newAgain">
            <el-input v-model="model.formData.newAgain" placeholder="请输入6-20新密码" type="password"></el-input>
          </el-form-item>
        </el-form>
        <div class="forget">
          <router-link to="login" class="forget-btn">返回登录</router-link>
        </div>
        <el-row>
          <el-button type="primary" @click="onSubmit('formDataRef')">修改密码</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'Forget',
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
      model: state => state.ForgetStore
    }),
    created () {
      this.$store.commit({
        type: 'ForgetStore/concat',
        payload: {
          formData: {
            password: '',
            name: ''
          }
        }
      })
    },
    methods: {
      validateFn: function () {
        // console.log('我是监听表单校验的事件')
      },
      onSubmit: function (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '修改成功，请重新登录',
              type: 'success'
            });
            this.$store.dispatch({
              type: 'ForgetStore/submit',
              payload: {}
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetNewAgain () {
        let formData = this.model.formData;
        formData.newAgain = '';
        this.$store.commit({
          type: 'ForgetStore/concat',
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
  @import './Forget.less';
</style>

