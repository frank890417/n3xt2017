<template lang="pug">
  transition(name='fade', mode='out-in')
    router-view(:key="$route.path")
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>
