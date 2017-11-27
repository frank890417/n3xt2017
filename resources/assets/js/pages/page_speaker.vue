<template lang="pug">
.page.pageSpeaker
  section.sectionHero.blue
    //img.mountain(src="/img/mountain.svg", :style="{transform: `translateY(${scrollTop/10}px)`}")
    //video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container
      .row
        .col-sm-12
          h1 Speaker
          h3 SOCAL'S FAST GROWING TECH COMMUNITY WITH LA SPIRIT
          hr
          h5 

        img.logo.line(src="/img/logoSymbolLine.svg")
        //img.logo(src="/img/logoSymbolShadow.svg",:style="{transform: `translate(0,${parseInt(scrollTop/8)}px`}")
        
  section.sectionDescription.white
    .container
      .row
        .col-sm-11.colContent
          .row
            .col-sm-9
              h2 Title for Speakers of recent events 
              hr
              p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 
            .col-sm-3
              h1 200+<br>Speakers
  section.sectionSpeakers
    .container-fluid
      .row
        .col-sm-3
          .person(v-for="i in 2")
            h3 Speaker name
            h4 Company Name or position

        .col-sm-9
          .person.big
          .infos.red
            h2 Some feature<br>speakers title<br>description
            p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 
            .btn.white Relevant Events
      .row

        .col-sm-9
          .infos
            h2 Some feature<br>speakers title<br>description
            p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 

          .person.big

        .col-sm-3
          .person
          .person


  section.sectionSmallDescription.white
    .container
      .row
        .col-sm-7.colContent
          h2 Title for past event<br>speakers who which<br>has smaller display area
          hr
          p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
        .col-sm-5
          img.logo(src="/img/logoSymbolShadow.svg")
     
  section.sectionSpeakers.white   
    .row
      router-link.col-sm-3(v-for="speaker in speakers.slice(0,4)",
        :to="'/speaker/n/'+speaker.name")
        .person.photoBlock(:style="cssbg(speaker.headshot)")
          h3 {{speaker.name}}
          h4 {{speaker.position}} , {{speaker.company}}
          .content
            p {{speaker.bio.slice(0,200)}}
    .row
      router-link.col-sm-3(v-for="speaker in speakers.slice(4,6)",
        :to="'/speaker/n/'+speaker.name")
        .person.photoBlock(:style="cssbg(speaker.headshot)")
          h3 {{speaker.name}}
          h4 {{speaker.position}} , {{speaker.company}}
          .content
            p {{speaker.bio.slice(0,200)}}
    

      .col-sm-6
        .redBlock
          .hand
          h2 Some Title<br>or Slogan<br>about n3xt or spirit
    .row
      router-link.col-sm-3(v-for="speaker in speakers.slice(6)",
        :to="'/speaker/n/'+speaker.name")
        .person.photoBlock(:style="cssbg(speaker.headshot)")
          h3 {{speaker.name}}
          h4 {{speaker.position}} , {{speaker.company}}
          .content
            p {{ (""+speaker.bio).slice(0,200)}}
    


  section_footer
</template>

<script>
import {mapState} from 'vuex'

export default {
  // prop: ["speakers"],
  metaInfo: {
    title: 'Speaker', // set a title
    titleTemplate: require("../data/common").default.titleTemplate
  },
  computed:{
    ...mapState(['speakers','scrollTop'])

  },
  methods:{
    
  }
}
</script>

<style>

</style>
