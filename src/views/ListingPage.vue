<script setup>
const openMenu = () => {
        window.innerWidth < 1000 ? document.querySelector('header nav').classList.toggle('open') : '';
        // document.querySelector('header nav').classList.toggle('open')
    }
</script>
<template>

<div class="header">
  <h1 class="name">Coffee Shop</h1>
  <nav>
        <ul>
            <li title="products"><router-link :to="{ name: 'products' }" @click="openMenu">Products</router-link></li>
            <li title="products"><router-link :to="{ name: 'products' }" @click="openMenu">Favorite</router-link></li>
            <li title="products"><router-link :to="{ name: 'products' }" @click="openMenu">Orders</router-link></li>
        </ul>
    </nav>
    <div class="menu_icon" @click="openMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
</div>
<div class="rel_header"></div>
  
</template>