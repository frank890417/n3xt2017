import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import page_index from '../pages/page_index.vue'

const routes = [
  { path: '/', component: page_index },
  { path: '/home', component: page_index ,props: true},
]
const router = new VueRouter({
  routes,
  mode: "history"
})
router.beforeEach((to, from, next) => {
  // $("html,body").animate({scrollTop: 0});
  next()
})

export default router