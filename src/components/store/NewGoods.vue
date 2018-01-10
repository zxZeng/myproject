<template>
    <div class="newGoods">
      <div class="newBox">
        <div class="newText">
          <p :class="newObj.newClass" style="color: #f57474;"></p>
          <p>{{newObj.newTitle}}</p>
          <router-link :to="'/GoodsList/'+newObj.newTitle" tag="p" class="iconfont icon-jiantou-copy-copy"></router-link>
        </div>
        <div class="newImg">
          <router-link tag="div" :to="'/GoodsDetails/'+newObj.newSrc1.g_id">
            <img :src="'/img/'+newObj.newSrc1.g_img" alt=""/>
          </router-link>
          <router-link tag="div" :to="'/GoodsDetails/'+newObj.newSrc2.g_id">
            <img :src="'/img/'+newObj.newSrc2.g_img" alt=""/>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script type="es6">
    export default{
        name: '',
        data: function(){
          return {

          }
        },
      props:['newObj'],
      created(){

      }
    }

</script>

<style scoped lang="less">
  @import "../../assets/css/Store/index.css";
</style>
