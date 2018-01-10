<template>
    <div id="cartItem">
      <div class="cartImg"><img :src="'/img/'+cartObj.g_img" alt=""/></div>
      <div>
        <p class="goodsName">{{cartObj.g_name}}</p>
        <p>{{cartObj.g_spec}}cm</p>
        <div class="add">
          <mu-icon-button class="btnCount" @click="minus">
            <i class="iconfont icon-minus"></i>
          </mu-icon-button>
          <input v-model="count" type="number" class="inputCount" min="1" max="100" @blur="countChange"/>
          <mu-icon-button class="btnCount" @click="plus">
            <i class="iconfont icon-jia"></i>
          </mu-icon-button>
        </div>
      </div>
      <div class="price">
        <p class="iconfont icon-X" @click="delCart"></p>
        <p class="goodsName" id="price">￥{{cartObj.g_price}}</p>
      </div>
</div>
</template>

<script type="es6">
    export default{
        name: '',
        data: function(){
          return {
            count:1,
            refresh:true
          }
        },
        props:['cartObj'],
        created(){
            this.count = this.cartObj.c_num;
        },
        methods:{
          minus(){
            if(this.count>1){
             this.count--;
            }
            let cartId= this.cartObj.c_id;
            let num= this.count;
            this.changeCount(cartId,num);
          },
          plus(){
            if (this.count < 100) {
              this.count++;
            }
            let cartId= this.cartObj.c_id;
            let num= this.count;
            this.changeCount(cartId,num);
          },
          countChange(){
            if (this.count > 100) {
              this.count = 100
            } else if (this.count < 1) {
              this.count = 1
            }
            let cartId= this.cartObj.c_id;
            let num= this.count;
            this.changeCount(cartId,num);
          },
          changeCount(cartId,num){
            this.$axios.post('http://172.16.10.22:8888/api/store/cartEdit.do?cartId='+cartId+'&num='+num).then((res)=> {
              console.log(res.data);
              this.$emit('refresh')
            }).catch((err)=> {
              console.log(err)
            })
          },
          delCart(){
            let cartId= this.cartObj.c_id;
            this.$axios.post('http://172.16.10.22:8888/api/store/cartDel.do?cartId='+cartId).then((res)=> {
              this.$emit('refresh')
            }).catch((err)=> {
              console.log(err)
            })
          }
        }
    }

</script>

<style scoped lang="less">
  @import "../../assets/css/Store/shoppingCart.css";
</style>
