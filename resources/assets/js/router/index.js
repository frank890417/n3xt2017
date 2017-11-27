import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Meta from 'vue-meta'
Vue.use(Meta)

import page_index from '../pages/page_index.vue'
import page_event from '../pages/page_event.vue'
import page_event_list from '../pages/page_event_list.vue'
import page_speaker from '../pages/page_speaker.vue'
import page_about from '../pages/page_about.vue'
import page_blog from '../pages/page_blog.vue'
import page_post from '../pages/page_post.vue'
import manage_event from '../manage/event.vue'
import manage_speaker from '../manage/speaker.vue'
import manage_post from '../manage/post.vue'
import manage_event_list from '../manage/event_list.vue'



const routes = [
  { path: '/', component: page_index },
  { path: '/home', component: page_index, props: true },
  { path: '/event', component: page_event_list, props: true },
  { path: '/speaker', component: page_speaker, props: true },
  { path: '/about', component: page_about },
  { path: '/blog', component: page_blog, props: true },
  { path: '/post/n/:title', component: page_post, props: true },
  { path: '/event', component: page_event_list, props: true },
  { path: '/event/n/:routename', component: page_event, props: true },
  { path: '/event/:id', component: page_event, props: true },
  { path: '/manage/event/new', component: manage_event, props: true },
  { path: '/manage/event/:id', component: manage_event, props: true },
  { path: '/manage/speaker/new', component: manage_speaker, props: true },
  { path: '/manage/speaker/:id', component: manage_speaker, props: true },
  { path: '/manage/post/new', component: manage_post, props: true },
  { path: '/manage/post/:id', component: manage_post, props: true },
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

router.afterEach(() => {
  //for scroll observable to generate new value for created components
  setTimeout(() => {
    window.scrollTo(0, 1)
    window.scrollTo(0, 0)
  }, 1000)
})

export default router