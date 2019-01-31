<template>
  <div class="organizational_addEdit">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>
        <router-link to="organizationalManagement">机构管理</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>新增</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form ref="formData" :model="model.formData" label-width="150px">
        <el-form-item 
          prop="outfit_name"
          label="机构名称："
          :rules="[
            { required: true, message: '机构名称不能为空'},
          ]" 
          :style="{width: widthConst}">
          <el-input v-model="model.formData.outfit_name" placeholder="请输入机构名称"></el-input>
        </el-form-item>
        <el-form-item 
          prop="outfit_type"
          label="机构类型：" 
          :style="{width: widthConst}"
          :rules="[
            { required: true, message: '机构类型不能为空'},
          ]">
          <el-select v-model="model.formData.outfit_type" placeholder="请选择机构类型" style="width: 100%">
            <el-option 
              v-for="(item, index) in model.outfit_options"
              :label="item.label"
              :key="index" 
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          prop="people" 
          label="联系人："
          :rules="[
            { required: true, message: '联系人不能为空'},
          ]" 
          :style="{width: widthConst}">
          <el-input v-model="model.formData.people" placeholder="请输入联系人"></el-input>
        </el-form-item>
        <el-form-item
          prop="phone" 
          label="手机号码："
          :style="{width: widthConst}"
          :rules="[ { 
              required: true,
              message: '手机号码不能为空'
            }, {
              pattern: /^1[34578]\d{9}$/,
              message: '请输入正确手机号码格式'
            }
          ]">
          <el-input v-model="model.formData.phone" placeholder='请输入手机号码'></el-input>
        </el-form-item>
        <el-form-item
          prop="loginNo" 
          label="登录账号："
          :style="{width: widthConst}"
          :rules="[ { 
              required: true,
              message: '登录账号不能为空'
            }, {
              pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,
              message: '请输入登录账号（字母，数字，中文，下划线，6-20位）'
            }
          ]">
          <el-input v-model="model.formData.loginNo" placeholder='请输入登录账号（字母，数字，中文，下划线，6-20个字符）'></el-input>
        </el-form-item>
        <el-form-item
          prop="passwold" 
          label="登录密码："
          :style="{width: widthConst}"
          :rules="[ { 
              required: true,
              message: '登录密码不能为空'
            }, {
              pattern: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,
              message: '请输入登录密码（6-20个字符, 区分大小写）'
            }
          ]"
        >
          <el-input v-model="model.formData.passwold" placeholder='请输入登录密码（6-20个字符, 区分大小写）'></el-input>
        </el-form-item>
        <el-form-item 
          prop="status" 
          label="账号状态："
          :rules="[ { 
              required: true,
              message: '账号状态不能为空'
            } ]">
          <el-radio-group v-model="model.formData.status">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="tree-class">
        <div class="til">小区权限：</div>
        <el-tree
          :data="model.dataTree"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          :default-checked-keys="model.defaultChecked"
          highlight-current>
        </el-tree>
        <div></div>
      </div>
      <div class="submit">
        <el-button type="primary" size="small" @click="submit('formData')">保存</el-button>
        <el-button size="small" @click="cancel('formData')">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'OrganizationalAddEdit',
    data: function () {
      return {
        widthConst: '60%'
      }
    },
    computed: mapState({
      model: state => state.OrganizationalAddEditStore
    }),
    methods: {
      submit (formName) { // 保存
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let checkedKeys = this.$refs.tree.getCheckedKeys();
            let submitData = this.model.formData;
            let submitKeys = checkedKeys || this.model.defaultChecked || []
          } else {
            console.log('表单非空验证未通过!')
          }
        })
      },
      cancel (formName) { // 取消
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
  .organizational_addEdit {
    .tree-class, .submit {
      padding-left: 80px;
    } 
    .submit {
      padding-top: 10px;
    }
    .tree-class {
      .til {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
</style>


