
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import store from "./store"
import router from "./router"
import App from "./App.vue"
import AppManage from "./AppManage.vue"
import $ from 'jquery'
import {TweenMax} from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import {mapState} from 'vuex'

import Vue from 'vue'
import VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
import { Subject } from 'rxjs/Subject' // required for domStreams option

window.TweenMax=TweenMax
require('./bootstrap')

window.Vue = require('vue')

var softScroll=false;

if (softScroll){

    $(function(){ 
        
        var $window = $(window);
        var scrollTime = 1;
        var scrollDistance = 50;
        
        $window.on("mousewheel DOMMouseScroll", function(event){
            
            event.preventDefault(); 
            
            var delta = event.originalEvent.wheelDelta/40 || -event.originalEvent.detail/0.5;
            var scrollTop = $window.scrollTop();
            var finalScroll = scrollTop - parseInt(delta*scrollDistance);
            
            TweenMax.to($window, scrollTime, {
                scrollTo : { y: finalScroll, autoKill:true },
                ease: Power2.easeOut,
                overwrite: 10             
            });
            // console.log(finalScroll);
        });
    });
    
}
    
    /**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

$(window).scroll(()=>{
    store.commit('setScrollTop',$(window).scrollTop())
})



Vue.mixin({
    methods: {
        strip_tags(txt) {
            let result = ("" + txt).replace(/(<([^>]+)>)/ig, "")
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
    }
})

const app = new Vue({
    el: '#app',
    router,
    store,
    Observable,
    Subscription,
    Subject,
    components: {
        App, AppManage
    },
    mounted(){
        store.dispatch("loadSpeakers")
        store.dispatch("loadEvents")
    },
    computed:{
      ...mapState(['scrollTop'])
    }
});
