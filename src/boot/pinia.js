// import { boot } from 'quasar/wrappers';
// import { createPinia } from 'pinia';

// export default boot(({ app }) => {
//   const pinia = createPinia();
//   app.use(pinia);
// });

import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate';

export default boot(({ app }) => {
  const pinia = createPinia();
  pinia.use(piniaPersistedState); // Active le plugin de persistance
  app.use(pinia);
});
