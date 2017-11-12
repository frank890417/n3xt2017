import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import page_index from '../pages/page_index.vue'
import page_event from '../pages/page_event.vue'
import manage_event from '../manage/event.vue'
import manage_speaker from '../manage/speaker.vue'
import manage_event_list from '../manage/event_list.vue'

const routes = [
  { path: '/', component: page_index },
  { path: '/home', component: page_index, props: true },
  { path: '/event', component: page_event, props: true },
  { path: '/manage/event/new', component: manage_event, props: true },
  { path: '/manage/event/:id', component: manage_event, props: true },
  { path: '/manage/speaker/new', component: manage_speaker, props: true },
  { path: '/manage/speaker/:id', component: manage_speaker, props: true },
  { path: '/manage/event', component: manage_event_list },
  
]
const router = new VueRouter({
  routes,
  mode: "history"
})
router.beforeEach((to, from, next) => {
  $("html,body").animate({ scrollTop: 0 },'slow');
  next()
})

export default router