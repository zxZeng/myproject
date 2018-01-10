<template>
    <div>
      <mu-paper class="bottomBar">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="home" title="首页">
            <span v-show="bottomNav=='home'"><i class="iconfont icon-shouye1"></i></span>
            <span v-show="bottomNav!='home'"><i class="iconfont icon-shouye"></i></span>
          </mu-bottom-nav-item>
          <mu-bottom-nav-item value="classify" title="全部分类" icon="" >
            <span v-show="bottomNav=='classify'"><i class="iconfont icon-leimupinleifenleileibie"></i></span>
            <span v-show="bottomNav!='classify'"><i class="iconfont icon-leimupinleifenleileibie1"></i></span>
          </mu-bottom-nav-item>
          <mu-bottom-nav-item value="cart" title="购物车" icon="">
            <span v-show="bottomNav=='cart'"><i class="iconfont icon-gouwuche1"></i></span>
            <span v-show="bottomNav!='cart'"><i class="iconfont icon-gouwuche3"></i></span>
          </mu-bottom-nav-item>
          <mu-bottom-nav-item value="personal" title="个人中心" icon="">
            <span v-show="bottomNav=='personal'"><i class="iconfont icon-gerenzhongxin"></i></span>
            <span v-show="bottomNav!='personal'"><i class="iconfont icon-gerenzhongxin2"></i></span>
          </mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-paper>
    </div>
</template>


<script type="es6">
    export default {
        name: '',
        data: function () {
            return {
              bottomNav:'home'
            }
        },
      methods:{
        handleChange(val){
          //console.log(val);
          this.bottomNav=val;
          if(val=='home'){
            this.$router.push('/Index')
          }else if(val=='classify'){
            this.$router.push('/GoodsClass')
          }else if(val=='cart'){
            this.$router.push('/ShoppingCart')
          }else if(val=='personal'){
            this.$router.push('/personal')
          }
        }
      }
    }
</script>

<style scoped>

</style>
