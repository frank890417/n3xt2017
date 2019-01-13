<template lang="pug">
div.manage_layout
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

<style scoped>
.manage_layout{
  padding-top: 60px
}
</style>
