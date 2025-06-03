<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Ecommerce </q-toolbar-title>
        <div>
          <q-btn flat dense round icon="shopping_cart" aria-label="Cart" @click="toggleRightDrawer">
            <q-badge v-if="cartStore.cartItems.length > 0" floating color="red">
              {{ totalCartQuantity }}
            </q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-list>
        <q-item class="full-width justify-between" tag="div" >
          <q-item-label header>Panier</q-item-label>
        <q-item v-if="cartStore.cartItems.length > 0">
          <q-item-section>
          <q-btn label="vider" color="red" class="" @click="clearCart" />
        </q-item-section>
        </q-item>
        </q-item>

        <q-item v-if="cartStore.cartItems.length === 0">
          <q-item-section>Pas de produits dans votre panier</q-item-section>
        </q-item>
        <q-item v-for="product in cartStore.cartItems" :key="product.id" clickable tag="div">

          <q-item-section avatar>

            <q-btn icon="delete" flat size="sm" @click="deleteProduct(product.id)" />

          </q-item-section>

          <!-- <q-item-section avatar>
            <q-img :src="product.image" alt="Product image" />
          </q-item-section> -->

          <q-item-section>
            <q-item-label>{{ product.name }}</q-item-label>
            <q-item-label caption>{{ formatCurrency(product.price) }}</q-item-label>
            <q-item-label caption>{{ product.quantity }} x</q-item-label>
          </q-item-section>

          <q-item-section center>
            <q-item-label>
              {{ formatCurrency(product.price * product.quantity) }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              icon="remove"
              flat
              size="sm"
              @click="decrementQuantity(product.id)"
              :disabled="product.quantity <= 1"
            />
            <q-btn icon="add" flat size="sm" @click="incrementQuantity(product.id)" />
          </q-item-section>
        </q-item>
        <q-item v-if="cartStore.cartItems.length > 0">
          <q-item-section>
            <q-item-label>Total: {{ formatCurrency(cartStore.totalPrice) }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator />
      <q-item v-if="cartStore.cartItems.length > 0">

        <q-item-section>
          <q-btn label="panier" color="primary" class="full-width" @click="goToCart" />
        </q-item-section>

        <q-item-section>
          <q-btn label="paiement" color="green" class="full-width" @click="goToPayment" />
        </q-item-section>

      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCartStore } from 'src/stores/useCartStore' // Importation du store Pinia
import { useRouter } from 'vue-router'

const cartStore = useCartStore()

const rightDrawerOpen = ref(false)

const selectedCurrency = ref('XOF') // Exemple de devise sélectionnée


  function deleteProduct(productId: number) {
      cartStore.removeFromCart(productId);
  }


function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const totalCartQuantity = computed(() => {
  return cartStore.cartItems.reduce((total, product) => total + product.quantity, 0)
})

const clearCart = () => {
  cartStore.clearCart() // Appel de l'action pour vider le panier
}

// Fonction pour formater la monnaie
function formatCurrency(value: number): string {
  if (typeof value !== 'number' || isNaN(value)) {
    return ''
  }
  return value.toLocaleString('fr-FR', {
    style: 'currency',
    currency: selectedCurrency.value, // Utilisation de la devise sélectionnée
    currencyDisplay: 'symbol',
  })
}


const incrementQuantity = (productId: number) => {
  const product = cartStore.cartItems.find((item) => item.id === productId)
  if (product) {
    product.quantity++
  }
}

// Fonction pour décrémenter la quantité
const decrementQuantity = (productId: number) => {
  const product = cartStore.cartItems.find((item) => item.id === productId)
  if (product && product.quantity > 1) {
    product.quantity--
  }
}

const router = useRouter()

const goToCart = async () => {
  try {
    await router.push('/cart') // Attendre la résolution de la promesse
  } catch (error) {
    console.error('Erreur lors de la navigation vers le panier', error)
  }
}
const goToPayment = async () => {
  try {
    await router.push('/paiment') // Attendre la résolution de la promesse
  } catch (error) {
    console.error('Erreur lors de la navigation vers le panier', error)
  }
}
</script>
