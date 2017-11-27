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

        //img.logo.line(src="/img/logoSymbolLine.svg")
        //img.logo(src="/img/logoSymbolShadow.svg",:style="{transform: `translate(0,${parseInt(scrollTop/8)}px`}")
        
  section.sectionDescription.white(v-if="speaker")
    .container
      .row
        .col-sm-12.colContent
          .row
            .col-sm-12
              img(:src="speaker.headshot", style='width: 200px')
              h2 {{speaker.name}}
              h3 {{speaker.position}} , {{speaker.company}}
              hr
              p(v-html="getHtml(speaker.bio)")
  section_footer
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: ["speakername"],
  metaInfo: {
    title: 'Speaker', // set a title
    titleTemplate: require("../data/common").default.titleTemplate
  },
  computed:{
    ...mapState(['speakers','scrollTop']),
    speaker(){
      return this.speakers.find( sp=>sp.name == this.speakername )
    }
  },
  methods:{
    getHtml(text){
      return (''+text).replace(/\r/g,'<br>')
    }
  }
}
</script>

<style>

</style>
