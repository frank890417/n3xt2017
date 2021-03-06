
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import store from "./store"
import router from "./router"
import App from "./App.vue"
import AppManage from "./AppManage.vue"
import manage_nav from "./manage/manage_nav.vue"
Vue.component("manage_nav",manage_nav);


import $ from 'jquery'
import slick from 'slick-carousel'
import {TweenMax} from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import {mapState} from 'vuex'

import Vue from 'vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

import ElementUI from 'element-ui'
// import "slick-carousel/slick/slick.css"
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })
// Vue.use(ElementUI)

Vue.use(VueRx, Rx)

import VueAnalytics from 'vue-analytics'

if (document.domain != "n3xt2017.test") {
    Vue.use(VueAnalytics, {
        id: 'UA-52977512-23',
        router
    })
}


var softScroll = true
import soft_scroll from './plugins/soft_scroll'
softScroll && soft_scroll.init()

window.TweenMax = TweenMax
require('./bootstrap')

window.Vue = require('vue')

    
    /**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// $(window).scroll(()=>{
    // store.commit('setScrollTop',$(window).scrollTop())
// })



Vue.mixin({
    //set vue-meta template
    data() {
        return {
            titleTemplate: "- n3xtcon",

        }
    },
    methods: {
        strip_tags(txt) {
            let result = (txt || "").replace(/(<([^>]+)>)/ig, "")
            return result
        },
        get_event_status_translate(txt) {
            switch (txt) {
                case "UNCONFIRMED":
                    return "已報名待確認"
                case "CONFIRMED", 'registed':
                    return "已報名與確認"
            }
            return "未報名"
        },

        getEventRoute(event,options) {
            
            // if (year == (new Date()).getFullYear()){
            //     return "/conference"
            // }
            if (event.type=="conference"){
                let year = event.start_datetime.slice(0,4)
                return "/conference/"+year
            }

            let gen_options = Object.assign({ link: true }, options)
            let prefix = '/event/n/'
            if (!gen_options.link) prefix = ''

            if (event.routename) {
                return prefix + event.routename
            } else {
                return prefix + this.strip_tags(event.title).replace(/\s/g, "_")
                // return '/event/'+event.id
            }
        },
        getPostRoute(post,options){
            let gen_options = Object.assign({ link: true }, options)
            let prefix = '/post/n/'
            if (!gen_options.link) prefix = ''

            // if (post.routename) {
            //     return prefix + event.routename
            // } else {
            return this.strip_tags(prefix + post.title).replace(/\s/g, "_")
                // return '/event/'+event.id
            // }
        },

        getDateText(datetime){
            datetime=datetime || "1900-01-01"
            let time = new Date(datetime.replace(/-/g, "/"))
            var eng_tag = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            var eng_month = eng_tag[ time.getMonth() ]
            return eng_month + ". " + time.getDate()
        },
        getDurationText(start_datetime, end_datetime) {
            let st = this.getDateText(start_datetime)
            let ed = this.getDateText(end_datetime)
            // console.log(st,ed)
            if (st==ed){
                return st
            }else{
                return st+ "-"+ed.split(". ")[1]
            }
        },
        getTitleSplit(title) {
            if (title.indexOf(":") > -1) {
                return {
                    series: title.split(":")[0].trim(),
                    title: title.split(":")[1].trim()
                }
            } else {
                return {
                    series: null,
                    title: title
                }
            }
        },
        cssbg(url) {
            let use_url = (url && url != '') ? url : '/img/default.jpg'
            let result = {
                'background-image': `url("${ use_url } ")`
            }
            // console.log(result)
            return result
        },
        handleImageAdded(file, Editor, cursorLocation) {
            // An example of using FormData
            // NOTE: Your key could be different such as:
            // formData.append('file', file)
            console.log("get picture!")
            var formData = new FormData();
            formData.append('file', file)
            console.log(file)

            axios({
                url: '/api/upload',
                method: 'POST',
                data: formData
            })
                .then((result) => {
                    let url = result.data // Get url from response
                    Editor.insertEmbed(cursorLocation, 'image', url);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        scrollTo(cname, custon_option) {
            let options = Object.assign({
                pan: 0
            },
                custon_option
            )
            $("html,body").animate({ scrollTop: $(cname).offset().top + options.pan })
        },
    }
})

//sections
import section_footer from './components/section_footer'
import section_contact from './components/section_contact'
import slideIn from './components/slideIn'
import fullPage from './components/fullPage'
//footer global
Vue.component("section_footer", section_footer)
Vue.component("section_contact", section_contact)
Vue.component("slideIn", slideIn)
Vue.component("fullPage", fullPage)
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App, AppManage
    },
    mounted() {
        store.dispatch("init")
    },
    computed:{
      ...mapState(['scrollTop'])
    }
});
setTimeout(() => {

    $(window).resize()

}, 50);
//smooth scroll


// import { TweenMax } from "gsap"
// import ScrollToPlugin from "gsap/ScrollToPlugin"
// window.TweenMax = TweenMax
// $(function () {

//     var $window = $(window);
//     var scrollTime = 1;
//     var scrollDistance = 50;

//     $window.on("mousewheel DOMMouseScroll", function (event) {

//         event.preventDefault();

//         var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail / 0.5;
//         var scrollTop = $window.scrollTop();
//         var finalScroll = scrollTop - parseInt(delta * scrollDistance);

//         TweenMax.to($window, scrollTime, {
//             scrollTo: { y: finalScroll, autoKill: true },
//             ease: Power2.easeOut,
//             overwrite: 10
//         });
//         // console.log(finalScroll);
//     });
// });
