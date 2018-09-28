<template>
  <div id="app">
    <div class="container">
      <topHeader></topHeader>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
components:{
  topHeader:Header
}
}

</script>

<style>

</style>
