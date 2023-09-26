<template>
  <nav>
    <ul>
      <li>
        <router-link aria-label="See all available products" :to="{ name: 'products' }">
          <font-awesome-icon icon="fa-solid fa-mug-saucer" size="lg" style="color: #252525;" />
          <label>Products</label>
        </router-link>
      </li>
      <li>
        <router-link aria-label="Go to your favorite coffees" :to="{ name: 'favorite' }">
          <font-awesome-icon icon="fa-solid fa-heart" size="lg" style="color: #252525;" />
          <label>Favorite</label>
        </router-link>
      </li>
      <li>
        <router-link aria-label="Go to basket" :to="{ name: 'cart' }">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" style="color: #252525;" />
          <label>Cart</label>
        </router-link>
      </li>
      <li>
        <router-link aria-label="View your last transactions" :to="{ name: 'transactions' }">
          <font-awesome-icon icon="fa-solid fa-list" size="lg" style="color: #252525;" />
          <label>Orders</label>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
