<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>

import mHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  name: 'app',
  components:{mHeader,Tab},
  data(){
    return {
      msg:'App.vue'
    }
  },
}
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl'


  

</style>
