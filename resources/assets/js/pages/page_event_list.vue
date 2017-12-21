<template lang="pug">
.page.pageEventList
  section.sectionHero.blue
    .container
      .row
        .col-sm-8
          h1 Events
          h3 SOCAL'S FAST GROWING TECH COMMUNITY WITH LA SPIRIT
          hr
        .col-sm-4
          img(src="/img/stars.svg")
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
        .col-sm-6.col-bar
          .bars
            slideIn.left.bar(@click="nowCata='conference'")
              img(src="/img/s2_people.png")
              h3 Conference
            slideIn.left.bar(@click="nowCata='talksnetworking'")
              h3 Talks &amp; Networks
            slideIn.left.bar(@click="nowCata='mentorship'")
              h3 Mentorship
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
        .col-sm-12
          .btn.outline.white( v-for="cata in catalist",
                              @click="switchCata(cata)", 
                              :class="{active: nowCata==cata.value}") {{cata.label}}
          p {{catas}}

      .row
        slideIn.top.col-sm-12
          router-link.row.row-event(:to="getEventRoute(event,{link: true})" v-for="event in filteredEvents")
            
            slideIn.right.col-sm-6.col-cover.visible-xs(:style="`background-image: url(${event.cover})`")
              //img.cover(:src="event.cover", style='width: 100%')
            slideIn.col-sm-6.col-info.theme.white
              h3.eng {{ getTitleSplit (event.title).series }}
              h2.title {{ getTitleSplit (event.title).title  }}
                .date {{ getDurationText(event.start_datetime,event.end_datetime) }}   
              hr  
              p ​{{event.description.replace(/\<.*?\>/g,'').slice(0,200)}}
              .btn.red RSVP Now

            slideIn.right.col-sm-6.col-cover.hidden-xs(:style="`background-image: url(${event.cover})`")
              //img.cover(:src="event.cover", style='width: 100%')


  section_footer
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      nowCata: "",
      catalist: [
        {
          label: "Conference",
          value: "conference"
        },
        {
          label: "Talks & Networks",
          value: "talksnetworking"
        },
        {
          label: "Mentorship",
          value: "mentorship"
        }
      ]
    }    
  },
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
    },
    catas(){
      console.log(this.events.map(o=>o.type))
    },
    filteredEvents(){
      return this.events.filter(o=>o.type==this.nowCata || this.nowCata=="")
    }
  },
  methods: {
    switchCata(cata){
      if (this.nowCata==cata.value){
        this.nowCata=""
      }else{
        this.nowCata=cata.value
      }
    }
  }
}
</script>

<style scoped>
</style>
