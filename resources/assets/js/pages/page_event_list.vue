<template lang="pug">
.page.pageEventList
  section.sectionHero.blue
    .container
      .row
        .col-sm-12
          h2 Event List
          hr
        .col-sm-12
          ul.list-group
            li.list-group-item(v-for="event in events")
              router-link.row(:to="'/event/'+event.id")
                .col-sm-2
                  img(:src="event.cover", style='width: 100%')
                .col-sm-10
                  h4 {{event.title}}
                  

   
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted(){
    
  },
  computed:{
    ...mapState(['events'])
  }
}
</script>

<style>

</style>
