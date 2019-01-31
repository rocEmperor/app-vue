<template>
  <div class="main-nav">
    <el-menu
      :default-active="model.defaultActive"
      class="el-menu-vertical-demo"
      unique-opened
      router
      :default-openeds="model.defaultOpeneds"
      background-color="#001529"
      text-color="#9FA3A8"
      active-text-color="#ffd04b">
      <el-submenu v-for="(item, index) in model.menuList" :index="`${item.id}`" :key="index">
        <template slot="title">
          <i :class="item.menuIcon"></i>
          <span>{{item.menuName}}</span>
        </template>
        <div v-if="item.children && item.children.length" class="b">
          <el-menu-item v-for="(items, indexs) in item.children" :index="items.id" @click="toggleRoute(items.menuUrl)" :key="indexs">
            <span slot="title">
              {{items.menuName}}
            </span>
          </el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'MainNav',
    computed: mapState({
      model: state => state.MainLayoutStore
    }),
    created () {
      let _th = this;
      _th.$store.dispatch({
        type: 'MainLayoutStore/init',
        payload: {
          defaultActive: window.sessionStorage.getItem('defaultActive') || '',
          defaultOpeneds: [window.sessionStorage.getItem('defaultOpeneds') || '00']
        }
      })
      _th.$router.beforeEach((to, from, next) => {
        let currentHash = window.location.hash;
        let menuList = _th.model.menuList;
        menuList.forEach(item => {
          item.children && item.children.forEach(ite => {
            if (currentHash.indexOf(ite.menuUrl) > -1) {
              window.sessionStorage.setItem('defaultActive', ite.id);
              window.sessionStorage.setItem('defaultOpeneds', item.id);
              _th.$store.commit({
                type: 'MainLayoutStore/concat',
                payload: {
                  defaultActive: ite.id,
                  defaultOpeneds: [item.id]
                }
              })
            }
          })
        });
        next();
      })
    },
    methods: {
      toggleRoute (route) {
        window.location.href = `#/${route}`
      }
    }
  }
</script>

<style lang="less">

</style>

