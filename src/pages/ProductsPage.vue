<template>
  <q-page class="flex flex-center">
    <q-card v-for="product in products" :key="product.id" class="my-card" style="width: 300px; margin: 10px;">
      <q-img :src="product.imageUrl" alt="Product Image" height="200px"/>
      <q-card-section>
        <div class="text-h6">{{ product.name }}</div>
        <div class="text-subtitle2">{{ product.price }} F CFA</div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          @click="addToCart(product)"
          color="primary"
          label="Ajouter au panier"
          icon="shopping_cart"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useProductStore } from 'src/stores/useProductStore';
import { useCartStore } from 'src/stores/useCartStore';

// Récupérer les produits et le store du panier
const productStore = useProductStore();
const cartStore = useCartStore();

// Récupérer la liste des produits
const products = productStore.getProducts();

// Fonction pour ajouter un produit au panier
function addToCart(product: { id: number; name: string; price: number; imageUrl: string }) {
  cartStore.addToCart({ ...product, quantity: 1, image: product.imageUrl });
}
</script>

<style scoped>
.my-card {
  max-width: 350px;
  margin: 20px;
}
</style>
