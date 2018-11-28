<template>
    <div class="mainpage">
      <div class="header">
        <div class="logo"><img src="http://mat1.gtimg.com/www/mobi/2017/image/logo-text-color_v2.svg" alt="logo" /></div>
        <div class="user-center" @click="enterUsrCenter"></div>
      </div>
      <div class="navs-wrapper" ref="navs">
        <navs></navs>
      </div>
      <div class="main-content">
        <div class="hightlights">
          <highlights></highlights>
        </div>
        <div class="carousel-wrapper">
          <carousel></carousel>
        </div>
        <div class="gap"></div>
        <div class="news-content">
          <div class="limit-highlights">
            <img src="//mat1.gtimg.com/www/mobi/2017/image/section-icon-24hours_v2.svg" width="18" height="18" alt="">
            <span class="limit-text">24小时热点</span>
          </div>
          <news></news>
        </div>
      </div>
    </div>
</template>

<script>
import navs from '@/components/navs/navs'
import highlights from '@/components/highlights/highlights'
import carousel from '@/components/carousel/carousel'
import news from '@/components/news/news'

export default {
  name: 'MainPage',
  components: {
    navs,
    highlights,
    carousel,
    news
  },
  methods: {
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 44) {
        this.$refs.navs.style.position = 'fixed'
      } else {
        this.$refs.navs.style.position = 'static'
      }
    },
    enterUsrCenter () {
      this.$router.push('/login')
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
.mainpage{
  max-width: 1024px;
  margin: 0 auto;
  .header{
    display: flex;
    width: 100%;
    height: 44px;
    align-items: center;
    .logo{
      flex: 1;
      margin-left: 33px;
      text-align: center;
      line-height: 44px;
      img{
        width: 97px;
        height: 26px;
      }
    }
    .user-center{
      width: 22px;
      height: 22px;
      margin-right: 11px;
      background: url("data:image/svg+xml;utf8,<svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M22 11c0 6.074-4.925 11-11 11S0 17.074 0 11 4.925 0 11 0s11 4.926 11 11\" fill=\"%23D4D8DF\"/><path d=\"M19.647 17.8A10.98 10.98 0 0 1 11 22a10.98 10.98 0 0 1-8.647-4.2 6.434 6.434 0 0 1 4.423-2.572l.61-.12a1.095 1.095 0 0 0 .524-1.885l.004-.001a3.945 3.945 0 0 1-1.37-2.99V7.755a4.455 4.455 0 0 1 8.91 0v2.477a3.94 3.94 0 0 1-1.369 2.99h.005a1.096 1.096 0 0 0 .524 1.885l.61.121a6.434 6.434 0 0 1 4.423 2.572z\" fill=\"%23BFC6D1\"/></g></svg>") no-repeat;
    }
  }
  .main-content{
    font-family: "PingFangSC-Medium","Source Han Sans CN",sans-serif;
    .carousel-wrapper{
      margin-top: 12px;
      width: 100%;
    }
    .gap{
      min-height: 7px;
      background-color: rgb(244, 244, 244);
    }
    .news-content{
      .limit-highlights{
        margin: 15px 0 0 12px;
        line-height: 18px;
        img{
          vertical-align: top;
        }
        .limit-text{
          vertical-align: top;
          line-height: 18px;
          font-size: 18px;
          color: #3F4146;
          font-weight: 400;
        }
      }
    }
  }
  .navs-wrapper{
    top: 0;
    z-index: 10;
  }
}

</style>
