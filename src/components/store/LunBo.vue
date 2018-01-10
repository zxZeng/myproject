<template>
    <div id="lunbo">
      <swiper :options="swiperOption" ref="mySwiper" class="box" >

        <swiper-slide class="swiper-slide"  v-for="item,index in content1"  :key="index">
          <div :style="{ backgroundImage: 'url(' + item.lunboImg + ')' } " ></div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script type="es6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
    name: '',
    data: function(){
      return {
        swiperOption: {
          effect: 'slide',
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween:0,
          speed:800,
          autoplay:{
            delay:4000,
            disableOnInteraction: false
          },
          paginationClickable: true,
          observeParents: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        content1:[
          {lunboImg:require('../../assets/images/banner1.jpg')},
          {lunboImg:require('../../assets/images/banner2.gif')},
          {lunboImg:require('../../assets/images/banner3.gif')},
          {lunboImg:require('../../assets/images/banner4.jpg')}
        ]
      }
    }
  }

</script>

<style scoped lang="less">

  #lunbo div{
     background-size:100% 100%;
     width: 100%;
     height: 10rem;
     overflow: hidden;
   }

</style>
