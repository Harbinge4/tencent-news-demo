<template>
    <div>
      <ul>
        <li class="list-item">
          <div class="context">
            <div class="top-text">
              <span class="topic">专题</span>
              122位科学家强烈谴责，南科大称不知情，贺建奎究竟在搞什么？
            </div>
            <div class="bottom-text">
              <span class="meida-source">科技日报</span>
              <span class="post-time">9分钟前</span>
            </div>
          </div>
          <div class="pics">
            <img src="//inews.gtimg.com/newsapp_ls/0/6542448724_294195/0?tp=webp?tp=webp" alt="">
          </div>
        </li>
        <li class="list-item">
          <div class="context">
            <div class="top-text">
              <span class="topic" v-if="false">专题</span>
              贺建奎回应：我知道会有争议 但我愿意为有需要的家庭接受指责
            </div>
            <div class="bottom-text">
              <span class="meida-source">21世纪经济报道</span>
              <span class="post-time">2小时前</span>
            </div>
          </div>
          <div class="pics">
            <img src="//inews.gtimg.com/newsapp_ls/0/6544538332_294195/0?tp=webp?tp=webp" alt="">
          </div>
        </li>
        <li class="list-item">
          <div class="context">
            <div class="top-text">
              <span class="topic">专题</span>
              122位科学家强烈谴责，南科大称不知情，贺建奎究竟在搞什么？
            </div>
            <div class="bottom-text">
              <span class="meida-source">科技日报</span>
              <span class="post-time">9分钟前</span>
            </div>
          </div>
          <div class="pics">
            <img src="//inews.gtimg.com/newsapp_ls/0/6542448724_294195/0?tp=webp?tp=webp" alt="">
          </div>
        </li>
        <li class="list-item">
          <div class="context">
            <div class="top-text">
              <span class="topic">专题</span>
              122位科学家强烈谴责，南科大称不知情，贺建奎究竟在搞什么？
            </div>
            <div class="bottom-text">
              <span class="meida-source">科技日报</span>
              <span class="post-time">9分钟前</span>
            </div>
          </div>
          <div class="pics">
            <img src="//inews.gtimg.com/newsapp_ls/0/6542448724_294195/0?tp=webp?tp=webp" alt="">
          </div>
        </li>
        <li class="list-item">
          <div class="context">
            <div class="top-text">
              <span class="topic">专题</span>
              122位科学家强烈谴责，南科大称不知情，贺建奎究竟在搞什么？
            </div>
            <div class="bottom-text">
              <span class="meida-source">科技日报</span>
              <span class="post-time">9分钟前</span>
            </div>
          </div>
          <div class="pics">
            <img src="//inews.gtimg.com/newsapp_ls/0/6542448724_294195/0?tp=webp?tp=webp" alt="">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style lang="less" scoped>
.list-item{
  display: flex;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  .context{
    width: 63.35%;
    .top-text{
      text-align: justify;
      line-height: 24px;
      font-size: 16px;
      .topic{
        display: inline-block;
        margin-top: 4px;
        padding: 0 6px;
        width: 24px;
        height: 16px;
        line-height: 16px;
        border-radius: 2px;
        vertical-align: top;
        font-size: 12px;
        color: #fff;
        background-color: rgb(73, 139, 248);
      }
    }
    .bottom-text{
      margin-top: 8px;
      line-height: 16px;
      font-size: 12px;
      color: rgb(144, 154, 164);
      .post-time{
        margin-left: 10px;
      }
    }
  }
  .pics{
    margin-left: 16px;
    width: 32.5%;
    height: 62.8%;
    overflow: hidden;
    border-radius: 3px;
    box-sizing: border-box;
    img{
      width: 100%;
    }
  }
}
</style>
