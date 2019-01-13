import Vue from 'vue'
import Vuex from 'vuex'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    scrollTop: 0,
    speakers: [],
    allevents: [],
    events: [],
    posts: [],
    agencies: [],
    loading: true,
    pageTemplate: " - n3xtcon",
    scrollStream$: Rx.Observable.fromEvent(document, 'scroll').startWith(0).map(e => window.scrollY),
    resizeStream$: Rx.Observable.fromEvent(window, 'resize').startWith(0)
  },
  mutations: {
    setScrollTop(state,value){
      state.scrollTop = value
    },
    setSpeakers(state,value){
      state.speakers=value
    },
    setEvents(state,value){
      state.allevents=value
      state.allevents = state.allevents.sort( (a,b)=>{
        let st = new Date(a.start_datetime)
        let ed = new Date(b.start_datetime)
        return st < ed
      } )
      state.events = state.allevents.filter(evt=>!evt.draft)
    },
    setPosts(state, value) {
      state.posts = value
    },
    setAgencies(state, value) {
      state.agencies = value
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
      context.dispatch("loadPosts")
      context.dispatch("loadAgencies")
    },
    loadSpeakers(context){
      axios.get("/api/speaker").then((res) => {
        context.commit("setSpeakers", res.data)
      })
    },
    loadAgencies(context) {
      axios.get("/api/agency").then((res) => {
        let sortedData = res.data.sort((a,b)=>{
          // console.log(a.name,b.name)
          return a.name.toLowerCase()>b.name.toLowerCase()?1:-1
        })
        // console.log("sorted",sortedData.map(s=>s.name))
        context.commit("setAgencies", sortedData)
      })
    },
    loadEvents(context) {
      axios.get("/api/event").then((res) => {
        context.commit("setEvents", res.data)

      })
    },
    loadPosts(context) {
      axios.get("/api/post").then((res) => {
        context.commit("setPosts", res.data)

      })
    }
  }
})
export default store