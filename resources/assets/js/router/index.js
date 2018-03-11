import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Meta from 'vue-meta'
Vue.use(Meta)

import page_index from '../pages/page_index.vue'
import page_event from '../pages/page_event.vue'
import page_event_list from '../pages/page_event_list.vue'
import page_speaker from '../pages/page_speaker.vue'
import page_speaker_indep from '../pages/page_speaker_indep.vue'
import page_about from '../pages/page_about.vue'
import page_blog from '../pages/page_blog.vue'
import page_post from '../pages/page_post.vue'

import manage_event from '../manage/event.vue'
import manage_event_list from '../manage/event_list.vue'
import manage_speaker from '../manage/speaker.vue'
import manage_speaker_list from '../manage/speaker_list.vue'
import manage_post from '../manage/post.vue'
import manage_post_list from '../manage/post_list.vue'
import manage_agency from '../manage/agency.vue'
import manage_agency_list from '../manage/agency_list.vue'



const routes = [
  { path: '/', component: page_index },
  { path: '/home', component: page_index, props: true },
  { path: '/event', component: page_event_list, props: true },
  { path: '/speaker', component: page_speaker, props: true },
  { path: '/speaker/n/:speakername', component: page_speaker_indep, props: true },
  { path: '/about', component: page_about },
  { path: '/blog', component: page_blog, props: true },
  { path: '/post/n/:title', component: page_post, props: true },
  { path: '/event', component: page_event_list, props: true },
  { path: '/event/n/:routename', component: page_event, props: true },
  { path: '/event/n/:routename/rsvp', component: page_event, props: true },
  { path: '/event/:id', component: page_event, props: true },
  { path: '/manage/event/new', component: manage_event, props: true },
  { path: '/manage/event/:id', component: manage_event, props: true },
  { path: '/manage/agency/new', component: manage_agency, props: true },
  { path: '/manage/agency/:id', component: manage_agency, props: true },
  { path: '/manage/speaker/new', component: manage_speaker, props: true },
  { path: '/manage/speaker/:id', component: manage_speaker, props: true },
  { path: '/manage/post/new', component: manage_post, props: true },
  { path: '/manage/post/:id', component: manage_post, props: true },
  { path: '/manage/event', component: manage_event_list },
  { path: '/manage/agency', component: manage_agency_list },
  { path: '/manage/post', component: manage_post_list },
  { path: '/manage/speaker', component: manage_speaker_list },
  
]
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 500)
    })

  }
})

import store from '../store'
var lastY = null
var lastPath = null
router.beforeEach((to, from, next) => {
  
  // setTimeout(() => {
  //   window.scrollTo(0, 0)
  // }, 300);
  // $("html,body").animate({ scrollTop: 0 });

  if (to.path.indexOf("/manage") == 0) {
    window.softScrollDisable = true
  } else {
    window.softScrollDisable = false
  }

  
  next()
  lastPath = from.path
})

router.afterEach(() => {
  //for scroll observable to generate new value for created components
  setTimeout(() => {
    window.scrollTo(0, window.scrollY+1)
    window.scrollTo(0, window.scrollY-1)
  }, 700)
})

export default router