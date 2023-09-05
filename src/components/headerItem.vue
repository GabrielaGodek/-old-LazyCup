<script setup>
// const openMenu = () => {
//         window.innerWidth < 1000 ? document.querySelector('.header nav').classList.toggle('open') : '';
//         // document.querySelector('header nav').classList.toggle('open')
//     }
</script>
<template>

<div class="header">
    <div class="cup">
        <img src="../assets/cup.svg" alt="">
    </div>
  <h1 class="name">LazyCup</h1>
  <!-- <nav>
        <ul>
            <li class="link products"><router-link :to="{ name: 'products' }" @click="openMenu">Products</router-link></li>
            <li class="link fav"><router-link :to="{ name: 'products' }" @click="openMenu">Favorite</router-link></li>
            <li class="link cart"><router-link :to="{ name: 'cart' }" @click="openMenu">Orders</router-link></li>
        </ul>
    </nav> -->
  <!-- <div class="menu_icon" @click="openMenu">
          <span></span>
          <span></span>
          <span></span>
      </div> -->
</div>
<div class="rel_header"></div>
  
</template>