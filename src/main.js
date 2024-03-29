import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false

Vue.use(ElementUi, {
  locale: 'en',
});

new Vue({
  render: h => h(App),
}).$mount('#app')
