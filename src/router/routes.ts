import type { RouteRecordRaw } from 'vue-router';
import ProductsPage from 'src/pages/ProductsPage.vue';
import CartView from 'src/pages/CartView.vue';
import PaiementPage from 'src/pages/PaiementPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    children: [
      {path: '', component: ProductsPage }

    ],

  },
  {
    path: '/produit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: ProductsPage}
    ]
  },
  {
    path: '/paiment',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: PaiementPage}
    ]
  },
  {
    path: '/cart',
    // component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: CartView}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
