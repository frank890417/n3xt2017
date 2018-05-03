<template lang="pug">
.page.pageEventList
  section.sectionHero.blue
    .container
      .row
        .col-sm-8
          h1 Events
          h3 Haven for Entrepreneurs and Storytellers
          hr
        .col-sm-4#container_star
          //img(src="/img/stars.svg")
          
  section.sectionSpot.blue(v-if="spotEvent")
    .container
      router-link.row.row-event(:to="getEventRoute(spotEvent,{link: true})")
        .col-sm-6.col-cover
          .cover(:style="cssbg(spotEvent.cover)")
          h4 Spotlight Event 
            span.month {{ getDurationText(spotEvent.start_datetime,spotEvent.end_datetime) }}            

        .col-sm-6.col-info.theme.white
          h3.eng {{ getTitleSplit (spotEvent.title).series }}
          h2 {{ getTitleSplit (spotEvent.title).title }}
          hr  
          p ​{{ strip_tags(spotEvent.description || '').slice(0,300)+"..." }}
          router-link.btn.red(:to="getEventRoute(spotEvent,{link: true})+(getCta(spotEvent)?'/rsvp':'')",
                          v-if="getCta(spotEvent)") {{getCta(spotEvent).label}}

  section.sectionCata.blue
    .container
      .row
        .col-sm-6.col-bar
          .bars
            .left.bar(@click="switchCata('conference');scrollTo('.sectionList')")
              img(src="/img/s2_people.png")
              h3 Conference
            .left.bar(@click="switchCata('talksnetworking');scrollTo('.sectionList')")
                h3 Networks
            .left.bar(@click="switchCata('mentorship');scrollTo('.sectionList')")
                h3 Mentorship
        slideIn.col-sm-6
          h3.eng A networking platform for professionals
          h2 Event Types
          hr  
          p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
          .btn.red(@click="scrollTo('.sectionList')") Explore!
   
  section.sectionList.blue#eventlist
    .container
      .row
        .col-sm-12
          //- h3.eng People working with us
          h2 Events
          hr  
          //- p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
          //- .btn.red Explore!
        .col-sm-12
          .btns
            .btn.outline.white( v-for="cata in catalist",
                                @click="switchCata(cata)", 
                                :class="{active: nowCata==cata.value}") {{cata.label}}
          p {{catas}}

      .row
        slideIn.top.col-sm-12
          router-link.row.row-event(:to="getEventRoute(event,{link: true})" v-for="event in filteredEvents")
            
            slideIn.right.col-sm-6.col-cover.visible-xs(:style="cssbg(event.cover)")
              //img.cover(:src="event.cover", style='width: 100%')
            slideIn.col-sm-6.col-info.theme.white
              h3.eng(v-if="getTitleSplit (event.title).series") {{ getTitleSplit (event.title).series }}
              h2.title {{ getTitleSplit (event.title).title  }}
                .date {{ getDurationText(event.start_datetime,event.end_datetime) }}   
              hr  
              p ​{{ (event.description || '').replace(/\<.*?\>/g,'').slice(0,200)}}
              router-link.btn.red(:to="getEventRoute(event,{link: true})+(getCta(event)?'/rsvp':'')",
                          v-if="getCta(event)") {{getCta(event).label}}

            slideIn.right.col-sm-6.col-cover.hidden-xs(:style="cssbg(event.cover)")
              //img.cover(:src="event.cover", style='width: 100%')


  section_footer
</template>

<script>
import {mapState} from 'vuex'
var PIXI = require('pixi.js');

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

    if (window.location.hash){
      this.scrollTo(window.location.hash)
    }

    var starAnimation = new PIXI.Application(800,800,{backgroundColor: 0x0A1744, antialias: true })
    starAnimation.renderer.plugins.interaction.autoPreventDefault = false
    document.getElementById("container_star").appendChild(starAnimation.view);
    var star1 = new PIXI.Graphics();
    let cx=starAnimation.renderer.width/2;
    let cy=starAnimation.renderer.height/2;

    star1.beginFill(0xEF476D);
    star1.drawCircle(cx,cy,100)
    star1.endFill();

    star1.beginFill(0xEF476D,0.6);
    star1.drawCircle(cx,cy,150)
    star1.endFill();

    star1.lineStyle(1, 0xFFFFFF, 0.4);
    star1.beginFill(0xFFFFFF, 0);
    star1.drawCircle(cx,cy,240);
    star1.endFill();

    star1.lineStyle(1, 0xFFFFFF, 0.1);
    star1.beginFill(0xFFFFFF, 0);
    star1.drawCircle(cx,cy,400);
    star1.endFill();


    var star2 = new PIXI.Graphics()
    star2.beginFill(0xEF476D);
    star2.drawCircle(0,0,40);
    star2.endFill()
    
    starAnimation.ticker.add(function(){
      star2.x=cx+350*Math.cos(starAnimation.ticker.lastTime/5000)
      star2.y=cy+350*Math.sin(starAnimation.ticker.lastTime/5000)
    })


    var star3 = new PIXI.Graphics()
    star3.beginFill(0xEF476D);
    star3.drawCircle(0,0,30);
    star3.endFill()
    
    starAnimation.ticker.add(function(){
      star3.x=cx+330*Math.cos(starAnimation.ticker.lastTime/8000 + Math.PI*0.7)
      star3.y=cy+330*Math.sin(starAnimation.ticker.lastTime/8000+ Math.PI*0.7)
    })



    var star4 = new PIXI.Graphics()
    star4.beginFill(0xEF476D);
    star4.drawCircle(0,0,35);
    star4.endFill()
    
    starAnimation.ticker.add(function(){
      star4.x=cx+300*Math.cos(starAnimation.ticker.lastTime/6000+ Math.PI*1.4)
      star4.y=cy+300*Math.sin(starAnimation.ticker.lastTime/6000+ Math.PI*1.4)
    })

    var star5 = new PIXI.Graphics()
    star5.beginFill(0xffffff);
    star5.drawCircle(0,0,5);
    star5.endFill()
    
    starAnimation.ticker.add(function(){
      star5.x=star4.x+100*Math.cos(starAnimation.ticker.lastTime/4000)
      star5.y=star4.y+100*Math.sin(starAnimation.ticker.lastTime/4000)
    })

     var star6 = new PIXI.Graphics()
    star6.beginFill(0xffffff,0.6);
    star6.drawCircle(0,0,7);
    star6.endFill()
    
    starAnimation.ticker.add(function(){
      star6.x=star4.x+100*Math.cos(starAnimation.ticker.lastTime/4000+ Math.PI*0.9)
      star6.y=star4.y+100*Math.sin(starAnimation.ticker.lastTime/4000+ Math.PI*0.9)
    })

    starAnimation.stage.addChild(star1);
    starAnimation.stage.addChild(star2);
    starAnimation.stage.addChild(star3);
    starAnimation.stage.addChild(star4);
    starAnimation.stage.addChild(star5);
    starAnimation.stage.addChild(star6);

  },computed:{
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
    },
    getCta(event){
      let overTime = (new Date() ) > (new Date(event.end_datetime))
      if (overTime){
        if (event.album_link){
          return {
            label: "See Photos",
            target: ".sectionPhotos"
          }
        }
      }else{
        return {
            label: "RSVP Now",
            target: ".sectionRegist"
          }
      }
      return null
    },
  }
}
</script>

<style>

  
</style>
