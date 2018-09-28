<template>
  <div>
    <div class="card-header">
      <h4 class="card-title">介绍：</h4>
      <p class="card-text">React 起源于 Facebook 的内部项目
        ，因为该公司对市场上所有 JavaScript MVC 框架，都不满意
        ，就决定自己写一套，用来架设Instagram的网站。</p>
    </div>
    <div class="card-body">
      <h4 class="card-title">特点：</h4>
      <p class="card-text">
      一.声明式设计：React采用声明范式，可以轻松描述应用。<br/>
      二.高效：React通过对DOM的模拟，最大限度地减少与DOM的交互。<br/>
      三.灵活：React可以与已知的库或者框架很好地配合。<br/>
      </p>
    </div>
    <a href="http://react-china.org/" class="card-link">更多React.js信息</a>
  </div>
</template>
<script>
  export default {
    beforeRouteLeave(to ,from ,next){
      if(confirm('确定离开么？') == true){
        next()
      } else {
        next(false)
      }
    }
  }
</script>
