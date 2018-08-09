import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import ListPage from '@/components/pages/ListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/list",
      name: "ListPage",
      component: ListPage
    }
  ]
});
