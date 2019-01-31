<template>
  <div class="search-own">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>信息查询</el-breadcrumb-item>
      <el-breadcrumb-item>街道统计</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-table
        :data="model.obj"
        stripe
        style="width: 100%">
        <el-table-column
          prop="village_count"
          label="小区数">
        </el-table-column>
        <el-table-column
          prop="people_count"
          label="住户数（户）">
        </el-table-column>
        <el-table-column
          prop="total_bill"
          label="总账单（元）">
        </el-table-column>
        <el-table-column
          prop="had_pay"
          label="已交账单（元）">
        </el-table-column>
        <el-table-column
          prop="ratio"
          label="收费率（%）">
        </el-table-column>
      </el-table>
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
      model: state => state.StreetCountStore
    }),
    created: function () {
      this.$store.dispatch({
        type: 'StreetCountStore/reqData',
        payload: {
          page: this.model.currentPage,
          rows: this.model.rows
        }
      })
    },
    methods: {
      paginationChange (current) {
        this.$store.dispatch({
          type: 'StreetCountStore/reqData',
          payload: {
            page: current,
            rows: this.model.rows
          }
        })
        this.$store.commit({
          type: 'StreetCountStore/concat',
          payload: {
            currentPage: current
          }
        })
      }
    }
  }
</script>

<style lang="less">

</style>
