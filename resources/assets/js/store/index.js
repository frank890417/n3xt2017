import Vue from 'vue'
import Vuex from 'vuex'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    scrollTop: 0,
    speakers: [],
    events: [],
    loading: true,
    pageTemplate: " - n3xtcon",
    scrollStream$: Rx.Observable.fromEvent(document, 'scroll').startWith(0).map(e => window.scrollY),
    resizeStream$: Rx.Observable.fromEvent(window, 'resize')
  },
  mutations: {
    setScrollTop(state,value){
      state.scrollTop = value
    },
    setSpeakers(state,value){
      state.speakers=value
    },
    setEvents(state,value){
      state.events=value
    },
    setLoading(state, value) {
      state.loading = value
      
    }
  },
  actions: {
    //初始化網站所有東西（event / data)
    init(context){
      context.state.scrollStream$.subscribe(
        (sctop) => {
          context.commit("setScrollTop",sctop)
        }
      )
      context.state.resizeStream$.subscribe((o)=>{
      })
      context.dispatch("loadDatas")
    },
    loadDatas(context) {
      context.dispatch("loadSpeakers")
      context.dispatch("loadEvents")
    },
    loadSpeakers(context){
      axios.get("/api/speaker").then((res) => {
        context.commit("setSpeakers", res.data)
      })
    },
    loadEvents(context) {
      axios.get("/api/event").then((res) => {
        context.commit("setEvents", res.data)
      })
    }
  }
})
export default store