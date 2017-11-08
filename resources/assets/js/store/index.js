import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    scrollTop: 0,
    speakers: []
  },
  mutations: {
    setScrollTop(state,value){
      state.scrollTop = value
    },
    setSpeakers(state,value){
      state.speakers=value
    }
  },
  actions: {
  }
})
export default store