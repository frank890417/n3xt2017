<template lang="pug">
div(:class="app_class")
  navbar
  transition(name='fade', mode='out-in')
    router-view(:key="$route.path")
</template>

<script>
import navbar from './components/navbar'
export default {
  data(){
    return {
      
    }
  },
  components:{
    navbar
  },
  computed:{
    app_class(){
      return 'route'+this.$route.path.replace(/\//g,'_')
    }
  }

}
</script>

<style>

</style>
