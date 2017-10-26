<template lang="pug">
div
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
  }

}
</script>

<style>

</style>
