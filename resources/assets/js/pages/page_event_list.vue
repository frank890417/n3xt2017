<template lang="pug">
.page.pageEventList
  section.sectionHero.blue
    .container
      .row
        .col-sm-12
          h1 Events
          h3 SOCAL'S FAST GROWING TECH COMMUNITY WITH LA SPIRIT
          hr
  section.sectionSpot.blue(v-if="spotEvent")
    .container
      router-link.row.row-event(:to="getEventRoute(spotEvent,{link: true})")
        .col-sm-6.col-cover
          .cover(:style="`background-image: url(${spotEvent.cover})`")
          h4 Spotlight Event 
            span.month {{ getDurationText(spotEvent.start_datetime,spotEvent.end_datetime) }}            

        .col-sm-6.col-info.theme.white
          h3.eng {{ getTitleSplit (spotEvent.title).series }}
          h2 {{ getTitleSplit (spotEvent.title).title }}
          hr  
          p ​{{ strip_tags(spotEvent.description).slice(0,300)+"..." }}
          .btn.red RSVP Now
   
  section.sectionCata.blue
    .container
      .row
        .col-sm-6
          .bars
            slideIn.left.bar
              img(src="http://n3xt2017.dev/img/s2_people.png")
            slideIn.left.bar
            slideIn.left.bar
        slideIn.col-sm-6
          h3.eng People working with us
          h2 Events List
          hr  
          p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
          .btn.red Explore!
   
  section.sectionList.blue
    .container
      .row
        .col-sm-12
          //- h3.eng People working with us
          h2 November
          hr  
          //- p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
          //- .btn.red Explore!
      .row
        slideIn.top.col-sm-12
          router-link.row.row-event(:to="getEventRoute(event,{link: true})" v-for="event in events")
            slideIn.col-sm-6.col-info.theme.white
              h3.eng {{ getTitleSplit (event.title).series }}
              h2.title {{ getTitleSplit (event.title).title  }}
                .date {{ getDurationText(event.start_datetime,event.end_datetime) }}   
              hr  
              p ​{{event.description.replace(/\<.*?\>/g,'').slice(0,200)}}
              .btn.red RSVP Now

            slideIn.right.col-sm-6.col-cover(:style="`background-image: url(${event.cover})`")
              //img.cover(:src="event.cover", style='width: 100%')


  section_footer
</template>

<script>
import {mapState} from 'vuex'
export default {
  metaInfo: {
    title: 'Events', // set a title
    titleTemplate: require("../data/common").default.titleTemplate
  },
  mounted(){
    
  },
  computed:{
    ...mapState(['events']),
    spotEvent(){
      return this.events[0]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
</style>
