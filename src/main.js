import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueResource from 'vue-resource';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);
Vue.use(BootstrapVue);
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive, faSun, faHome, faAt, faListUl, faBars, faCog, faCloud, faCheck, faLocationArrow, faBug, faList } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faComment,
  faTwitter,
  faSun,
  faHome,
  faAt,
  faListUl,
  faBars,
  faCog,
  faCloud,
  faCheck,
  faLocationArrow,
  faBug,
  faList,
  faAt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

const http=Vue.http
export default http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
