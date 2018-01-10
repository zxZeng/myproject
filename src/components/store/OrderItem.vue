<template>
  <div id="cartItem">
    <div class="cartImg"><img :src="'/img/'+orderObj.g_img" alt=""/></div>
    <div>
      <p class="goodsName">{{orderObj.g_name}}</p>
      <p>{{orderObj.g_spec}}cm</p>
      <div class="price">
        <p class="goodsName" id="price">￥{{orderObj.g_price}}</p>
        <p class="orderCount">×{{orderObj.c_num}}</p>
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
        props:['orderObj']
    }

</script>

<style scoped lang="less">
@import "../../assets/css/Store/orderlist.css";
</style>
