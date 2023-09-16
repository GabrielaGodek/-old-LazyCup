<template>
  <nav>
    <ul>
      <li>
        <router-link aria-label="Go to your favorite coffees" :to="{ name: 'favorite' }">
          <img src="@/assets/favorite_icon.svg" alt="Go to your favorite coffees" />
        </router-link>
      </li>
      <li>
        <router-link aria-label="See all available products" :to="{ name: 'products' }">
          <img src="@/assets/all_icon.svg" alt="Go to all products" />
        </router-link>
      </li>
      <li>
        <router-link aria-label="View your last transactions" :to="{ name: 'transactions' }">
          <img src="@/assets/transactions_icon.svg" alt="Go to your last transactions" />
        </router-link>
      </li>
      <li>
        <router-link aria-label="Go to basket" :to="{ name: 'cart' }">
          <img src="@/assets/cart_icon.svg" alt="Go to cart" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>
