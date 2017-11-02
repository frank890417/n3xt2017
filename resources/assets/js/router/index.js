import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import page_index from '../pages/page_index.vue'
import manage_event from '../manage/event.vue'
import manage_event_list from '../manage/event_list.vue'

const routes = [
  { path: '/', component: page_index },
  { path: '/home', component: page_index, props: true },
  { path: '/manage/event/:id', component: manage_event, props: true },
  { path: '/manage/event', component: manage_event_list },
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