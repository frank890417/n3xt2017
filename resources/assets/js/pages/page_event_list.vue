<template lang="pug">
.page.pageEventList
  section.sectionHero.blue
    .container
      .row
        .col-sm-12
          h2 Event List
          hr
        .col-sm-12
          ul.list-group.rowEvent
            li.list-group-item(v-for="event in events")
              router-link.row(:to="'/event/'+event.id")
                .col-sm-4
                  img.cover(:src="event.cover", style='width: 100%')
                .col-sm-8
                  h3 {{event.title}}
                  p {{event.description.replace(/\<.*?\>/g,'').slice(0,200)}}
                  

  section_footer
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

<style scoped>
</style>
