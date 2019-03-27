import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Common from './components/common/common.js'


Vue.config.productionTip = false

Vue.prototype.Common = Common;
Vue.use(ElementUI); //ElementUI

new Vue({
  render: h => h(App),
}).$mount('#app')
