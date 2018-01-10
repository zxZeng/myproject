<template>
    <div>
      <mu-appbar  class="topBar">
        <div class="topBarTitle">{{Title}}</div>
        <div slot="left" @click="$router .back()"  v-if="!noBack"><span class="iconfont icon-llmainpageback"></span></div>
        <slot slot="right"></slot>
      </mu-appbar>
    </div>
</template>


<script type="es6">
    export default {
        name: '',
        data: function () {
            return {}
        },
      props:['Title','noBack']
    }
</script>

<style scoped>
@import "../../assets/css/topBar.css";
</style>
