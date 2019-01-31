<template>
  <div class="search-own">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>信息查询</el-breadcrumb-item>
      <el-breadcrumb-item>房管中心查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form ref="searchForm" :model="model.searchList">
        <el-row type="flex" class="row-bg">
          <el-col :span="6" style="padding-right: 10px">
            <el-form-item label="小区名称：" label-width="76px">
              <el-select v-model="model.searchList.village_name" placeholder="请选择小区">
                <el-option
                  v-for="item in model.village_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="padding-right: 10px">
            <el-form-item label="业主姓名：" label-width="76px">
              <el-input v-model="model.searchList.name" placeholder="请输入业主姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="padding-right: 10px">
            <el-form-item label="身份证号：" label-width="76px">
              <el-input v-model="model.searchList.no" placeholder="请输入身份证号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" style="padding-right: 10px">
            <el-form-item label="日期：" label-width="76px">
              <el-date-picker
                v-model="model.searchList.date"
                type="daterange"
                range-separator="至"
                style="width: 100%"
                value-format="yyyy-MM-dd"
                start-placeholder="开始日期"
                size="small"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="text-align: right; padding-right: 10px">
            <el-button type="primary" @click="onSearch" size="small" class="search-btn">查询</el-button>
            <el-button size="small" class="search-btn" @click="onReset('searchForm')">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="box-card">
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
      model: state => state.HousingManagementListStore
    }),
    created: function () {
      this.$store.dispatch({
        type: 'HousingManagementListStore/reqData',
        payload: {
          page: this.model.currentPage,
          rows: this.model.rows
        }
      })
    },
    methods: {
      paginationChange (current) {
        this.$store.dispatch({
          type: 'HousingManagementListStore/reqData',
          payload: {
            page: current,
            rows: this.model.rows
          }
        })
        this.$store.commit({
          type: 'HousingManagementListStore/concat',
          payload: {
            currentPage: current
          }
        })
      },
      onSearch () {
        console.log(this.model.searchList, '.........')
      },
      onReset (formName) {
        this.$store.commit({
          type: 'HousingManagementListStore/concat',
          payload: {
            searchList: {
              village_name: '',
              no: '',
              name: ''
            }
          }
        })
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
