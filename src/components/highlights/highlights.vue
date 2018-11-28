<template>
  <div>
    <ul>
      <li class="list-item border-bottom">
        <h3>【独家V观】海上丝路看今朝——2018年习近平主席亚太之行</h3>
        <div class="bottom-info">
          <span class="highlights-sign">置顶</span>
          <span class="media-source">央视新闻客户端</span>
        </div>
      </li>
      <li class="list-item border-bottom">
        <h3>习近平主持中共中央政治局第十次集体学习</h3>
        <div class="bottom-info">
          <span class="highlights-sign">置顶</span>
          <span class="media-source">新华社</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'highlights'
}
</script>

<style lang="less" scoped>
  .list-item{
    display: block;
    padding:12px 0;
    margin:0 12px;
    h3{
      display: block;
      line-height: 24px;
      font-size: 16px;
      text-align: justify;
      color: rgb(34, 34, 34);
      font-family: PingFangSC-Regular, "Source Han Sans CN", sans-serif;
    }
    .bottom-info{
      margin-top: 9px;
      .highlights-sign{
        display: inline-block;
        line-height: 16px;
        font-size: 12px;
        color: rgb(232, 102, 102);
      }
      .media-source{
        margin-left: 6px;
        line-height: 16px;
        font-size: 12px;
        color: rgb(144, 154, 164);
      }
    }
  }
</style>
