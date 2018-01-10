<template>
  <div id="app">
    <!--<TopBar Title = "首页" ></TopBar>-->
    <!--<gameIndex></gameIndex>-->
    <router-view/>
    <!--<BottomBar></BottomBar>-->
  </div>
</template>

<script>
  import TopBar from './components/common/topBar.vue'
  import BottomBar from './components/common/bottomBar.vue'
  import gameIndex from './views/games/gameIndex.vue'
export default {
  name: 'app',
  components:{
    gameIndex:gameIndex,
    TopBar:TopBar,
    BottomBar:BottomBar
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-size: 16px;
}
</style>
