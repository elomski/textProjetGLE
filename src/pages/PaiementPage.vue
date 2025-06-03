<template>
  <div class="flex flex-center column q-mt-md full-height">

    <q-label class="q-mr-md ">Paiement</q-label>
    <q-card class="q-pa-md shadow-2" style="width: 400px">
      <q-card-section>
        <q-form @submit="submitForm" @reset="resetForm" ref="formRef">
          <q-input
            v-model="form.nom"
            label="Nom"
            placeholder="Ex: John"
            :dense="dense"
            :rules="[(val) => val.length > 0 || 'Le nom est requis']"
            lazy-rules
          />

          <q-input
            v-model="form.prenom"
            label="Prénom"
            placeholder="Ex: Doe"
            :dense="dense"
            :rules="[(val) => val.length > 0 || 'Le prénom est requis']"
            lazy-rules
          />

          <q-input
            v-model="form.email"
            label="Email"
            placeholder="email@example.com"
            type="email"
            :dense="dense"
            :rules="[
              (val) => val.length > 0 || 'L\'email est requis',
              (val) => /.+@.+\..+/.test(val) || 'Email invalide',
            ]"
            lazy-rules
          />
          <q-input
            v-model="form.password"
            label="Mot de passe"
            placeholder="*********"
            type="password"
            :dense="dense"
            :rules="[
              (val) => val.length > 0 || 'Le mot de passe est requis',
              (val) =>
               /^[0-9]{8}$/.test(val) ||
                // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) ||
                'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial',
            ]"
            lazy-rules
          />
          <q-input
            v-model="form.numero"
            label="Numero de telephone"
            placeholder="90000000"
            type="tel"
            :dense="dense"
            :rules="[
              (val) => val.length > 0 || 'Le numéro de téléphone est requis',
              (val) => /^[0-9]{8}$/.test(val) || 'Numéro de téléphone invalide',
            ]"
            lazy-rules
          />


          <q-select
            v-model="methodePaiement"
            :options="optionsPaiement"
            label="Méthode de paiement"
            filled
            class="q-mt-md"
          />

          <div class="q-mt-md row justify-center">
            <q-btn label="Soumettre" type="submit" color="primary" class="q-mr-sm" />
            <q-btn label="Réinitialiser" type="reset" color="grey" flat />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const methodePaiement = ref(null)
const optionsPaiement = ref([
  { label: 'Carte Bancaire', value: 'carte' },
  { label: 'PayPal', value: 'paypal' },
  { label: 'Mobile Money', value: 'mobile_money' },
  { label: 'Virement Bancaire', value: 'virement' },
])

const dense = ref<boolean>(false)
const formRef = ref()

const form = reactive({
  nom: '',
  prenom: '',
  email: '',
  password: '',
  numero: '',
})

const submitForm = () => {
  formRef.value.validate().then((success: boolean) => {
    if (success) {
      alert('Formulaire soumis avec succès !')
    } else {
      alert('Formulaire invalide !')
    }
  })
}

const resetForm = () => {
  form.nom = ''
  form.prenom = ''
  form.email = ''
  form.numero = ''
  form.password = ''
}
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>








<!--

<template>
  <div class="flex flex-center column q-mt-md full-height">
    <q-card class="q-pa-md shadow-2" style="width: 400px">
      <q-card-section>
        <q-form @submit="submitForm" @reset="resetForm" ref="formRef">
          <q-input
            v-model="form.nom"
            label="Nom"
            placeholder="Ex: John"
            :dense="dense"
            :rules="[(val) => val.length > 0 || 'Le nom est requis']"
            lazy-rules
          />

          <q-input
            v-model="form.prenom"
            label="Prénom"
            placeholder="Ex: Doe"
            :dense="dense"
            :rules="[(val) => val.length > 0 || 'Le prénom est requis']"
            lazy-rules
          />

          <q-input
            v-model="form.email"
            label="Email"
            placeholder="email@example.com"
            type="email"
            :dense="dense"
            :rules="[(val) => val.length > 0 || 'L\'email est requis']"
            lazy-rules
          />

          <q-input
            v-model="form.password"
            label="Mot de passe"
            placeholder="*********"
            type="password"
            :dense="dense"
            :rules="[(val) => val.length > 0 || 'Le mot de passe est requis']"
            lazy-rules
          />

          <q-input
            v-model="form.numero"
            label="Numero de téléphone"
            placeholder="90000000"
            type="tel"
            :dense="dense"
            :rules="[(val) => val.length > 0 || 'Le numero téléphone est requis']"
            lazy-rules
          />

          <q-select
            v-model="methodePaiement"
            :options="optionsPaiement"
            label="Méthode de paiement"
            filled
            class="q-mt-md"
  :rules="[(val) => val && val !== null || 'La méthode de paiement est requise']"
          />

          <div class="q-mt-md row justify-center">
            <q-btn label="Soumettre" type="submit" color="primary" class="q-mr-sm" />
            <q-btn label="Réinitialiser" type="reset" color="grey" flat />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import * as yup from 'yup'
import { ValidationError } from 'yup'

// Créer un schéma Yup pour valider les données du formulaire
const schema = yup.object({
  nom: yup.string().required('Le nom est requis'),
  prenom: yup.string().required('Le prénom est requis'),
  email: yup
    .string()
    .email('Email invalide')
    .required('L\'email est requis'),
  password: yup
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial'
    )
    .required('Le mot de passe est requis'),
  numero: yup
    .string()
    .matches(/^[0-9]{8}$/, 'Numéro de téléphone invalide')
    .required('Le numéro de téléphone est requis'),
  methodePaiement: yup.string().required('Sélectionner une méthode de paiement')
})

// Utiliser Yup pour valider les données du formulaire
const formRef = ref()
const form = reactive({
  nom: '',
  prenom: '',
  email: '',
  password: '',
  numero: '',
  methodePaiement: null,
})

const methodePaiement = ref(null)
const optionsPaiement = ref([
  { label: 'Carte Bancaire', value: 'carte' },
  { label: 'PayPal', value: 'paypal' },
  { label: 'Mobile Money', value: 'mobile_money' },
  { label: 'Virement Bancaire', value: 'virement' },
])

const dense = ref(false)



const submitForm = async () => {
  try {
    // Valider le formulaire avec le schéma Yup
    await schema.validate(form, { abortEarly: false })
    alert('Formulaire soumis avec succès !')
  } catch (err) {
    // Déclarer explicitement que l'erreur est une ValidationError de Yup
    if (err instanceof ValidationError) {
      const errors = err.inner
      errors.forEach((error) => {
        alert(error.message)
      })
    } else {
      // Si l'erreur n'est pas une ValidationError
      alert('Erreur inconnue')
    }
  }
}


const resetForm = () => {
  form.nom = ''
  form.prenom = ''
  form.email = ''
  form.numero = ''
  form.password = ''
  form.methodePaiement = null
}
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style> -->
