<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <transition name="fade">
      <router-view name="a"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rootmsg: '根组件'
    }
  },
  name: 'app'
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active{
  transition: opacity 2s
}
.fade-enter{
  opacity: 0
}
</style>
