<template>
  <nav>
    <ul>
      <li>
        <router-link aria-label="Products" :to="{ name: 'products' }">
          <font-awesome-icon icon="fa-solid fa-mug-saucer" size="lg" style="color: #252525;" />
          <label>Products</label>
        </router-link>
      </li>
      <li>
        <router-link aria-label="Favorite" :to="{ name: 'favorite' }">
          <font-awesome-icon icon="fa-solid fa-heart" size="lg" style="color: #252525;" />
          <label>Favorite</label>
        </router-link>
      </li>
      <li>
        <router-link aria-label="Cart" :to="{ name: 'cart' }">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" style="color: #252525;" />
          <label>Cart</label>
        </router-link>
      </li>
      <li>
        <router-link aria-label="Orders" :to="{ name: 'transactions' }">
          <font-awesome-icon icon="fa-solid fa-list" size="lg" style="color: #252525;" />
          <label>Orders</label>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
