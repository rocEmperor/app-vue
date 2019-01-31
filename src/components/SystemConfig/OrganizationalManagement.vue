<template>
  <div class="search-own">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>机构管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form ref="searchForm" :model="model.searchList">
        <el-row type="flex" class="row-bg">
          <el-col :span="6" style="padding-right: 10px">
            <el-form-item label="机构名称：" label-width="76px">
              <el-input v-model="model.searchList.outfit_name" placeholder="请输入机构名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="padding-right: 10px">
            <el-form-item label="联系人：" label-width="76px">
              <el-input v-model="model.searchList.people" placeholder="请输入联系人"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="padding-right: 10px">
            <el-form-item label="机构类型：" label-width="76px">
              <el-select v-model="model.searchList.outfit_type" placeholder="请选择机构类型">
                <el-option
                  v-for="item in model.outfit_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="padding-right: 10px">
            <el-form-item label="状态：" label-width="76px">
              <el-select v-model="model.searchList.status" placeholder="请选择状态">
                <el-option
                  v-for="item in model.status_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="text-align: right; padding-right: 10px">
            <el-button type="primary" @click="onSearch" size="small" class="search-btn">查询</el-button>
            <el-button size="small" class="search-btn" @click="onReset('searchForm')">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <div class="add-outfit">
        <el-button type="primary" size="small" @click="goToAdd">
          新增机构
        </el-button>
      </div>
      <el-table
        :data="model.currentData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="key"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="date"
          label="账单日期">
        </el-table-column>
        <el-table-column
          prop="should"
          label="应缴金额（元）">
        </el-table-column>
        <el-table-column
          prop="had_pay"
          label="已缴金额（元）">
        </el-table-column>
        <el-table-column
          prop="owe"
          label="欠费金额（元）">
        </el-table-column>
        <el-table-column
          prop="name"
          label="小区名称">
        </el-table-column>
        <el-table-column
          prop="home_info"
          label="房屋信息">
        </el-table-column>
      </el-table>
      <div class="pagination-box">
        <span class="pagination-totals">共 {{model.totals}} 条</span>
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="paginationChange"
          :total="model.totals">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'SearchOwn',
    computed: mapState({
      model: state => state.OrganizationalManagementStore
    }),
    created: function () {
      this.$store.dispatch({
        type: 'OrganizationalManagementStore/reqData',
        payload: {
          page: this.model.currentPage,
          rows: this.model.rows
        }
      })
    },
    methods: {
      paginationChange (current) {
        this.$store.dispatch({
          type: 'OrganizationalManagementStore/reqData',
          payload: {
            page: current,
            rows: this.model.rows
          }
        })
        this.$store.commit({
          type: 'OrganizationalManagementStore/concat',
          payload: {
            currentPage: current
          }
        })
      },
      onSearch () {
        console.log(this.model.searchList, '.........')
      },
      onReset (formName) { // 重置
        this.$store.commit({
          type: 'OrganizationalManagementStore/concat',
          payload: {
            searchList: {
              outfit_name: '',
              people: '',
              outfit_type: '',
              status: ''
            }
          }
        })
      },
      goToAdd () {
        window.location.href = '#/organizationalAddEdit';
      }
    }
  }
</script>

<style lang="less">
  .search-own {
    .search-btn {
      margin-top: 4px;
    }
  }
</style>
