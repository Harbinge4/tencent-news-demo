<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-content">
    <swiper-slide class="slide-item">
      <img src="https://inews.gtimg.com/newsapp_ls/0/6539182202_640330/0?tp=webp" alt="" class="slide-img">
    </swiper-slide>
    <swiper-slide class="slide-item">
      <img src="https://inews.gtimg.com/newsapp_ls/0/6532888718_640330/0?tp=webp" alt="" class="slide-img">
    </swiper-slide>
    <swiper-slide class="slide-item">
      <img src="https://inews.gtimg.com/newsapp_ls/0/6539182202_640330/0?tp=webp" alt="" class="slide-img">
    </swiper-slide>
    <swiper-slide class="slide-item">
      <img src="https://inews.gtimg.com/newsapp_ls/0/6539182202_640330/0?tp=webp" alt="" class="slide-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carousel',
  data () {
    return {
      swiperOption: {
        // width: '92.5%',
        // height: '52%',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          autoplay: true,
          delay: 5000
        },
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
.swiper-content /deep/ .swiper-pagination-bullet-active{
  background: #8C8D90;
}
.swiper-content /deep/ .swiper-pagination-bullet{
  background: #D9DADB;
}
.swiper-content{
  width: 100%;
  .slide-item{
    width: 100%;
    text-align: center;
    .slide-img{
      width: 92.5%;
      border-radius: 3px;
      overflow: hidden;
    }
  }
}

</style>
