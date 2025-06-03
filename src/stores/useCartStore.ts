import { defineStore } from 'pinia';


// Définir l'interface du produit dans le panier
interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // Ajouter l'image du produit
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartProduct[], // Stocke les produits avec image et autres informations
  }),

  getters: {
    // Calcul du nombre total d'articles dans le panier
    totalItems: (state) => {
      return state.cartItems.reduce((total, product) => total + product.quantity, 0);
    },

    // Calcul du prix total du panier
    totalPrice: (state) => {
      return state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    totalPerProduct: (state) => {
      return state.cartItems.map(product => ({
        id: product.id,
        name: product.name,
        total: product.price * product.quantity, // Prix total par produit
        quantity: product.quantity
      }));
    }
  },

  actions: {
    // Ajouter un produit au panier
    addToCart(product: CartProduct) {
      // Vérifier si le produit existe déjà dans le panier
      const existingProduct = this.cartItems.find(item => item.id === product.id);

      // Si le produit existe, augmenter la quantité
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        // Sinon, ajouter le nouveau produit au panier
        this.cartItems.push(product);
      }
    },

    // Retirer un produit du panier
    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },

    clearCart() {
      this.cartItems = [];
    }
  },

  persist: true,
});
