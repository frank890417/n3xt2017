<template lang="pug">
div(:class="app_class")
  fullpage.ad(:show="showAd", 
              @closeFullpage="()=>{showAd=false}")
    div( @click="$ga.event('popup','conference','click')")
      router-link(to="/conference")
        img.promo.hidden-xs(src="/img/Promo_Popup_-_Desktop.png",@click="showAd=false")
        img.promo.visible-xs(src="/img/Promo_Popup_-_Mobile.png",@click="showAd=false")
  transition(name='fade', mode='out-in')
    page_loading(v-if="loading")
  navbar(:fixed="fixed")
  transition(:name='$route.path.indexOf("manage")==-1?"fade":"manage"', mode='out-in')
    router-view(:key="$route.path", v-if="!loading")
</template>

<script>
import navbar from './components/navbar'
import fullpage from './components/fullpage'
import page_loading from './pages/page_loading'
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return {
      showAd: false
    }
  },
  components:{
    navbar,
    page_loading,
    fullpage
  },
  mounted(){
    // if (){
    // setTimeout(()=>{
    //   this.showAd= this.$route.path!="/conference" && this.$route.path.indexOf('/manage')!=0
    // },2000)
    // }
    setInterval(()=>{
      this.setLoading(false)
    },800)
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
