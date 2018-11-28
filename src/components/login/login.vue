<template>
  <div class="root">
    <div class="header border-bottom">
      <span class="back-btn" @click="backBtn">&#xe611;</span>
      <span class="title">登录腾讯网</span>
    </div>
    <div class="main">
      <div class="user-info">
        <div class="avatar"></div>
        <div class="context">登录阅读个性化资讯</div>
      </div>
      <div class="login-button">
        <div class="login-qq">QQ登录</div>
        <div class="login-wx">微信登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    backBtn () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.root{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(249, 249, 249);
}
.header{
  position: relative;
  width: 100%;
  height: 44px;
  line-height: 46px;
  font-size: 18px;
  text-align: center;
  color: #333;
  background: #fff;
  box-sizing: border-box;
  .back-btn{
    display: inline-block;
    position: absolute;
    left: 0;
    width: 50px;
    height: 44px;
    font-size: 23px;
    font-weight: 600;
    font-family: iconfont;
  }
  .title{
    display: inline-block;
  }
}
.main{
  margin-top: 50px;
  width: 100%;
  .user-info{
    height: 113px;
    .avatar{
      margin: 0 auto;
      width: 82px;
      height: 82px;
      background: url(//mat1.gtimg.com/www/mobi/2017/image/loginavatar.svg) center no-repeat;
    }
    .context{
      margin-top: 15px;
      color: #999;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }
  }
  .login-button{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    .login-qq{
      width: 200px;
      height: 44px;
      border-radius: 4px;
      text-align: center;
      line-height: 44px;
      font-size: 16px;
      color: #fff;
      background: rgb(17, 183, 245);
    }
    .login-wx{
      margin-top: 20px;
      width: 200px;
      height: 44px;
      border-radius: 4px;
      text-align: center;
      line-height: 44px;
      font-size: 16px;
      color: #fff;
      background: rgb(72, 193, 76);
    }
  }
}
</style>
