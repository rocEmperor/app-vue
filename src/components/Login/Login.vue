<template>
  <div class="login" @keyup="onKeyUp">
    <div class="layout">
      <span class="logoSpan">物业缴费查询系统</span>
      <div class="contents">
        <h1 class="title">登录</h1>
        <el-form :model="formData" ref="formData" class="demo-ruleForm" @validate="validateFn">
          <el-form-item
            prop="name"
            :rules="[ 
              { required: true, message: '姓名不能为空'},
              { min: 5, max: 15, message: '长度在 5 到 15 个字符'}
            ]"
          >
            <el-input type="name" v-model="formData.name" autocomplete="off" placeholder='请输入姓名' @input="(val) => setFormData(val, 'name')"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            :rules="[ { 
                required: true,
                message: '密码不能为空'
              }, {
                pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,
                message: '请输入6-20位密码（不能是纯数字， 纯字母）'
              }
            ]"
          >
            <el-input type="password" v-model="formData.password" autocomplete="off" placeholder='请输入密码'></el-input>
          </el-form-item>
        </el-form>
        <div class="forget">
          <router-link to="forget" class="forget-btn">忘记密码</router-link>
        </div>
        <div style="color: yellowgreen; margin-bottom: 10px">
          姓名：admin；  密码：lu123456
        </div>
        <el-row>
          <el-button type="primary" @click="onSubmit('formData')" id="login-btn">登录</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'Login',
    computed: mapState({
      formData: state => state.LoginStore.formData
    }),
    created () {
      window.sessionStorage.removeItem('defaultActive');
      window.sessionStorage.removeItem('defaultOpeneds');
      this.$store.commit({
        type: 'LoginStore/concat',
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
            let formData = { ...this.formData };
            let { password, name } = formData;
            if (name !== 'admin') {
              this.$message({
                message: '用户名不存在，请重新输入',
                type: 'warning'
              });
              return false;
            }
            if (password !== 'lu123456') {
              this.$message({
                message: '密码错误，请重新输入',
                type: 'warning'
              });
              return false;
            }
            this.$store.dispatch({
              type: 'LoginStore/submit',
              payload: formData
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      setFormData (val, key) { // 监听姓名；密码输入
        let payload = {};
        payload[key] = val;
        let formData = { ...this.formData };
        this.$store.commit({
          type: 'LoginStore/concat',
          payload: {
            formData: { ...formData, ...payload }
          }
        })
      },
      onKeyUp (e) {
        if (e.keyCode == 13) {
          this.onSubmit('formData');
        }
      }
    }
  }
</script>

<style lang="less">
  @import './Login.less';
</style>

