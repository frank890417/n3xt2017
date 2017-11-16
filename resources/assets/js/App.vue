<template lang="pug">
div(:class="app_class")
  transition(name='fade', mode='out-in')
    page_loading(v-if="loading")
  navbar(:fixed="fixed")
  transition(name='fade', mode='out-in')
    router-view(:key="$route.path", v-if="!loading")
</template>

<script>
import navbar from './components/navbar'
import page_loading from './pages/page_loading'
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return {
    }
  },
  components:{
    navbar,
    page_loading
  },
  mounted(){
    setInterval(()=>{
      this.setLoading(false)
    },500)
  },
  methods:{
    ...mapMutations(['setLoading'])
  },
  computed:{
    ...mapState(['loading']),
    app_class(){
      let result =  ['route'+this.$route.path.replace(/\//g,'_')]
      if (this.loading){
        result.push("loading")
      }
      return result
    },
    fixed(){
      //只要不是管理介面都使用fixed的導覽列
      return ['/login','/manage'].every(route=>this.$route.path.indexOf(route)!=0) 
      // let result =  [/^\/$/,/^\/event\/.*$/].some(reg=>{
      //   console.log(this.$route.path)
      //   return this.$route.path.match(reg)
      // })
      // console.log(result)
      // return result
    }
  }

}
</script>

<style>

</style>
