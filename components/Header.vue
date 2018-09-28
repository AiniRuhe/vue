<template>
<header>
  <nav class="navbar navbar-dark bg-dark">
    <a href="/" class="navbar-brand">前端开发网站</a>
    <ul class="navbar-nav">
      <li><router-link :to="homeSure" class="nav-link">主页</router-link></li>
      <li><router-link  tag="div" to="/ht" class="nav-link">HTML</router-link></li>
      <li><router-link :to="{name:'csSure'}" class="nav-link">CSS</router-link></li>
      <li><router-link to="/js" class="nav-link">JS</router-link></li>
      <li><router-link to="/more" class="nav-link">更多前端库和框架</router-link></li>
    </ul>
  </nav>
</header>
</template>
<script>
  export default {
    data(){
      return{
        homeSure:'/'  //可以将路径用变量显示，方便更改。
      }
    }
  }
</script>
