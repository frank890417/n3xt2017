import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    scrollTop: 0,
    speakers: [],
    events: [],
    loading: true
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
    loadSpeakers(){
      axios.get("/api/speaker").then((res) => {
        store.commit("setSpeakers", res.data)
      })
    },
    loadEvents() {
      axios.get("/api/event").then((res) => {
        store.commit("setEvents", res.data)
      })
    }
  }
})
export default store