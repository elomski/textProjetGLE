import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      { id: 1, name: 'Produit 1', price: 100, imageUrl: '/img/freestocks-nss2eRzQwgw-unsplash.jpg' },
      { id: 2, name: 'Produit 2', price: 150, imageUrl: '/img/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg' },
      { id: 3, name: 'Produit 3', price: 200, imageUrl: '/img/kelly-sikkema-UaO58q6ioxI-unsplash.jpg' },
      { id: 4, name: 'Produit 4', price: 200, imageUrl: '/img/marcelo-leal-k7ll1hpdhFA-unsplash.jpg' },
      { id: 5, name: 'Produit 5', price: 200, imageUrl: '/img/clay-banks-cEzMOp5FtV4-unsplash.jpg' },
      { id: 6, name: 'Produit 6', price: 200, imageUrl: '/img/kai-pilger-bmf2bsv3Mw8-unsplash.jpg' },
      { id: 7, name: 'Produit 7', price: 200, imageUrl: '/img/marcelo-leal-6pcGTJDuf6M-unsplash.jpg' },
      { id: 8, name: 'Produit 8', price: 200, imageUrl: '/img/marcelo-leal-taF3klwwAWA-unsplash.jpg' },
      { id: 9, name: 'Produit 9', price: 200, imageUrl: '/img/online-marketing-hIgeoQjS_iE-unsplash.jpg' },
      { id: 10, name: 'Produit 10', price: 200, imageUrl: '/img/freestocks-nss2eRzQwgw-unsplash.jpg' },
      { id: 11, name: 'Produit 11', price: 200, imageUrl: '/img/drew-hays-tGYrlchfObE-unsplash.jpg' },
      { id: 12, name: 'Produit 12', price: 200, imageUrl: '/img/close-up-doctor-using-disinfectant.jpg' },
      { id: 13, name: 'Produit 13', price: 200, imageUrl: '/img/kelly-sikkema-UaO58q6ioxI-unsplash.jpg' },
      { id: 14, name: 'Produit 14', price: 200, imageUrl: '/img/natural-wooden-brushes-soaps (1).jpg' },
      { id: 15, name: 'Produit 15', price: 200, imageUrl: '/img/person-with-eating-disorder-having-weight-problems.jpg' },
      // Ajoute d'autres produits ici
    ] as Product[],
  }),
  actions: {
    getProducts() {
      return this.products;
    }
  }
});
