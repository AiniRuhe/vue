<template>
  <div>
     <button @click="shangCeng" class="btn btn-primary">跳转上一层</button>
     <div class="card-header">
        <h5 class="card-title">Web前端开发工程师简介：</h5>
        <p class="card-title">Web前端开发工程师是一个很新的职业，是从事Web前端
          开发工作的工程师。主要进行网站开发，优化，完善的工作。网页制作是Web 1.0时代的产物，那
          时网站的主要内容都是静态的，用户使用网站的行为也以浏览为主。</p>
     </div>
     <div class="card-body">
       <div class="card-title">
         <h5 class="card-title">需要学习得内容：</h5>
         <img src="./qianduan.jpg" alt="" class="card-img-top">
         <h5 class="card-title">最核心得内容：</h5>
           <p class="card-text">Web前端开发技术包括三个要素：HTML、CSS和JavaScript，但随着RIA的流行和普及，
             Flash/Flex、Silverlight、XML和服务器端语言也是前端开发工程师应该掌握的。</p>
       </div>
     </div>
  </div>
</template>
<script>
  export default {
    methods:{
      shangCeng:function () {
        //this.$router.go(-1)  //跳转到上一层
        this.$router.replace('/js')  //指定跳转
      }
    }
  }
</script>
