<template>
  <div id="app">
    <Backbg v-if="isShow"/>
    <LoadIcon v-if="isShow"/>
    <router-view v-if="!isShow"/>
  </div>
</template>

<script>
import Backbg from './components/back'
import LoadIcon from './components/load'
export default {
  name: 'App',
  data () {
    return {
      isShow: true
    }
  },
  components: {
    Backbg: Backbg,
    LoadIcon: LoadIcon
  },
  mounted () {
    setTimeout(() => {
      this.isShow = false
    }, 600)
  }
}
</script>

<style>
@import url('./assets/css/style.css');
</style>
