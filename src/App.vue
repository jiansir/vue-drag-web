<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex !important;
}
</style>
