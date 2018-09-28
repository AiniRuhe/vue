// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import JS from './components/JS'
import CS from './components/CS'
import HT from './components/HT'
import More from './components/more/More'


import VUE from './components/more/Vue'
import React from './components/more/React'
import Angular from './components/more/Angular'
import JQuery from './components/more/JQuery'


Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
   mode :'history',
  //base代表当前的路径
  routes :[
    {path:'/',component:Home},
    {path:'/cs',name:'csSure',component:CS},//可以给路由起名字。如name:'csSure'
    {path:'/ht',component:HT},
    {path:'/js',component:JS},
    {path:'/more', redirect:'/more/vue',component:More,children:[
        {path:'/more/vue',component:VUE},
        {path:'/more/react',component:React},
        {path:'/more/jquery',component:JQuery},
        {path:'/more/angular',component:Angular}
      ]},
    {path:'*',redirect:'/'}  //当路径不符合时候，自动引导到主页页面
  ],
});


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  //模板
  template: '<App/>',

});
