<template lang="pug">
div
  br
  br
  br
  br
  .container
    ul.list-group
      li.list-group-item(v-for = "event in events")
        h4 {{event.title}}
        router-link.btn.btn-primary(:to="'/manage/event/'+event.id") Edit
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      events: []
    }
  },
  components:{
  },
  mounted(){
    Axios.get("/api/event").then((res)=>{
      this.events = res.data
    })
    
  }
}
</script>

<style>

</style>
