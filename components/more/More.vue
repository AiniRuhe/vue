<template>
  <div>
    <div class="row ma-5">
      <div class="col-4">
        <div class="list-group mb-5">
          <router-link tag="div" class="nav-link" to="/more/vue">
            <a class="list-group-item list-group-item-action">Vue.js框架介绍</a></router-link>
          <router-link tag="div" class="nav-link" to="/more/react">
            <a class="list-group-item list-group-item-action">React.js框架介绍</a></router-link>
          <router-link tag="div" class="nav-link" to="/more/jquery">
            <a class="list-group-item list-group-item-action">JQuery.js库介绍</a></router-link>
          <router-link tag="div" class="nav-link" to="/more/angular">
            <a class="list-group-item list-group-item-action">Angular.js框架介绍</a></router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
