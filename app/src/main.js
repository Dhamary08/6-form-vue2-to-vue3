import { createApp } from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueForm from 'vue-form';
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from './router';
import App from './App.vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);
app.use(router);
// Make BootstrapVue available throughout your project
app.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin);
// Use Vue Form
app.use(VueForm);
// Axios
app.use(VueAxios, axios);

app.config.productionTip = false;

createApp(App).mount('#app');
