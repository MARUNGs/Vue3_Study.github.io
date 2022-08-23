<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ViteBlog</a>
    <button class="navbar-toggler" @click="onClick" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">
            <router-link to="/" class="font">Home</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/list" class="font">List</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/detail" :blogData="blogData" class="font">Detail</router-link>
          </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div class="mt-4">
    <router-view :blogData="blogData" />
</div>

</template>

<script setup lang="ts">
/********** import **********/
import {blogData} from '@/types'

/********** Type **********/


/********* Object **********/


/********* function **********/
/** 햄버거메뉴 클릭시 토글기능 발생 */
function onClick() :void {
  const toggleMenu = document.querySelector('.navbar-collapse')

  if(toggleMenu !== null) {
    toggleMenu.classList.toggle('show')
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.font {
    color: grey;
    text-decoration: none;
}
</style>