<template>
    <nav>
        <ul>
            <router-link :to="{name: 'favorite'}"><li><img src="@/assets/favorite_icon.svg" alt="Go to your favorite coffees"></li></router-link>
            <router-link :to="{name: 'products'}"><li><img src="@/assets/all_icon.svg" alt="Go to all products"></li></router-link>
            <router-link :to="{name: 'transactions'}"><li><img src="@/assets/transactions_icon.svg" alt="Go to your last transactions"></li></router-link>
            <router-link :to="{name: 'cart'}"><li><img src="@/assets/cart_icon.svg" alt="Go to cart"></li></router-link>
        </ul>
    </nav>
</template>