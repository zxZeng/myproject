<template>
    <div id="GoodsContent">
      <router-link :to="'/goodsDetails/'+goodsObj.g_id"><img :src="'/img/'+goodsObj.g_img" alt=""/></router-link>
      <p class="iconfont icon-cart" @click="addCart"></p>
      <p>{{goodsObj.g_name}}</p>
      <div class="price">
        <p >{{goodsObj.g_spec}}cm</p>
        <p>￥{{goodsObj.g_price}}</p>
      </div>
    </div>

</template>

<script type="es6">
    export default{
        name: '',
        data: function(){
          return {
            userId:1
          }
        },
      props:['goodsObj'],
      methods:{
        addCart(){
          let userId = this.userId;
          let goodsId = this.goodsObj.g_id;
          let num = 1;
          this.$axios.get('http://172.16.10.22:8888/api/store/cartAdd.do?userId='+userId+'&goodsId='+goodsId+'&num='+num).then((res)=>{
            console.log(res.data);
          }).catch((err)=>{
            console.log(err)
          })
        }
      },
      created(){
        //this.userId=sessionStorage.getItem('userId');
      }
    }

</script>

<style scoped lang="less">
@import "../../assets/css/Store/goodsList.css";
</style>
