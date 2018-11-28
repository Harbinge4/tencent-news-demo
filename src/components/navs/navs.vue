<template>
  <div class="navs">
    <div class="channels  border-bottom">
      <ul class="channel-list">
        <li v-for="item of channels" class="list-item" :key="item">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="options"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'navs',
  data () {
    return {
      channels: this.$store.states.channel
    }
  },
  computed: {
    ...mapGetters([
      'channel'
    ])
  }
}
</script>

<style lang="less" scoped>
.navs{
  display: flex;
  height: 35px;
  background: #fff;
  .channels {
    padding-left: 2px;
    width: 93%;
    height: 35px;
    box-sizing: border-box;
    background: linear-gradient(left, #fff, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, #fff);
    .channel-list {
      width: 100%;
      height: 35px;
      overflow: hidden;
      .list-item{
        display: inline-block;
        padding:0 12px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: rgb(102, 102, 102);
      }
      .selected_item{
        color: rgb(73, 139, 248);
        background: url("data:image/svg+xml;utf8,<svg width=\"10\" height=\"2\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"%23498BF8\" fill-rule=\"nonzero\" width=\"10\" height=\"2\" rx=\"1\"/></svg>") no-repeat;
        background-position: center 28px;
      }
    }
  }
  .options{
    width: 32px;
    height: 34px;
    background: url("data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4h12a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z\" fill=\"%233F4146\" fill-rule=\"evenodd\"/></svg>") no-repeat center;
    background-size: 20px 20px;
  }
}
</style>
