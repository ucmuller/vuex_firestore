<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Drawer/>
    <router-view/>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer'
export default {
  name: 'App',
  components:{
    Drawer
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 0px;
}
</style>
