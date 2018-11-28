<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import '@/assets/reset.css'
import '@/assets/border.css'
import '@/assets/iconfont.css'
import MainPage from '@/components/mainpage/MainPage'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
  #app{}
</style>
