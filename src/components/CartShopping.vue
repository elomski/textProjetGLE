<template>

  <div class="q-pa-md">
    <div class="q-gutter-lg">

      <q-card>
        <div class="q-pa-md">
          <h1 class="text-h4 q-mb-md">Panier</h1>
          <div>

            <q-btn label="retour" color="primary" class="" @click="product" />

          </div>
          <div class="q-pa-md card ">
            <q-table flat bordered :rows="cartProducts" :columns="columns" row-key="id" />
          </div>
        </div>
      </q-card>
    </div>

  </div>




</template>









<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "src/stores/useCartStore"; // Importer ton store Pinia
import { useRouter } from "vue-router";

const cartStore = useCartStore(); // Récupérer le store



interface Column {
  name: string;
  label: string;
  field: string | ((row: Row) => string | number);
  required?: boolean;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  format?: (val: string | number) => string | number;
  sort?: (a: string, b: string, rowA: string, rowB: string) => number;
  headerClasses?: string;
}



interface Row {
  name: string;
  price: number;
  quantity: number;
}


// Définition des colonnes du tableau
// const columns: Column[] = [
//   {
//     name: 'name',
//     required: true,
//     label: 'Produit',
//     align: 'left',
//     field: 'name',
//     sortable: true
//   },
//   {
//     name: 'price',
//     label: 'Prix',
//     align: 'center',
//     field: 'price',
//     sortable: true,
//     format: (val: any) => `FCFA ${val.toFixed(2)}` // Formatage en FCFA
//   },
//   {
//     name: 'quantity',
//     label: 'Quantité',
//     align: 'center',
//     field: 'quantity',
//     sortable: true
//   },
//   {
//     name: 'total',
//     label: 'Total',
//     align: 'center',
//     field: (row: any) => row.price * row.quantity,
//     sortable: true,
//     format: (val: any) => `FCFA ${val.toFixed(2)}` // Formatage du total en FCFA
//   }
// ];



const columns: Column[] = [
  {
    name: 'name',
    required: true,
    label: 'Produit',
    align: 'left',
    field: 'name',
    sortable: true
  },
  {
    name: 'price',
    label: 'Prix',
    align: 'center',
    field: 'price',
    sortable: true,
    format: (val: string | number) => {
      // Si val est un nombre, formater en FCFA, sinon simplement renvoyer la chaîne
      return typeof val === 'number' ? `FCFA ${val.toFixed(2)}` : val;
    }

  },
  {
    name: 'quantity',
    label: 'Quantité',
    align: 'center',
    field: 'quantity',
    sortable: true
  },
  {
    name: 'total',
    label: 'Total',
    align: 'center',
    field: (row: Row) => row.price * row.quantity, // Calcul total
    sortable: true,
    format: (val: string | number) => {
      // Si val est un nombre, formater en FCFA, sinon simplement renvoyer la chaîne
      return typeof val === 'number' ? `FCFA ${val.toFixed(2)}` : val;
    }
  }
];





// Récupérer dynamiquement les produits du panier
const cartProducts = computed(() => {
  return cartStore.cartItems.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    total: item.price * item.quantity
  }));
});




const router = useRouter()

const product = async () => {
  try {
    await router.push('/produit') // Attendre la résolution de la promesse
  } catch (error) {
    console.error('Erreur lors de la navigation vers le panier', error)
  }
}
</script>
