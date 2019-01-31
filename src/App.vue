<template>
  <div id="app">
    <MainHeader></MainHeader>
    <MainNav></MainNav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MainHeader from './common/MainLayout/MainHeder';
  import MainNav from './common/MainLayout/MainNav';

  export default {
    name: 'App',
    data: function () {
      return {}
    },
    components: {
      MainHeader,
      MainNav
    },
    methods: {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #app {
    .content {
      margin-top: 64px;
      margin-left: 200px;
      padding: 10px 30px;
      min-height: calc(100vh - 64px);
      box-sizing: border-box;
    }
  }
  
</style>
