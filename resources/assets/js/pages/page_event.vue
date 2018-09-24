<template lang="pug">
.page.pageEvent(v-if="event")
  section.sectionHero.white
    .container
      .row
        .col-sm-7.visible-xs
          .eventCover(:style="cssbg(event.cover)" style="background-image: url(https://lh3.googleusercontent.com/Z1bZXTqxs1XisADTjyREIsHdQ1JYHLyC0zL5WMeq5azeqxv9CphKGPE6nQqa1b6RiRRn9roKIjYtbpHkbxcAJ5eRZnfj1v_zRlCIWCJA6aSC95PziJPxn9xX5VR7PC-3H7UDlNGmTxkQbuEcv3sHHB3CfxV950dt847aaXFEABUwWPYj2o2dPw-3KyTA96enAcDHWWF7sf6jr8eX9HSmDWKgs2AwlFgYquuAEMiE4TJQx6ZbYdOI5Za5OeS6qbUO_-V16ztZ6Qp5-V6KWlNJXSOBJnfW87IlIjwZv9i1LrgRPhdPxgP6Q6Npdu8XUWWqlFcXz9RSa6tQA6FQ2woS95O1DeGKw6Npc2rfllfxGwIuUm96r5jiWhodXIF0Gs0cT2Hx93AvIdOqkFw6kuUtzg2JWyCUfL5GXuxyambdR4Iboe-cdVlzAc7tB6B4NyMOt655KTM2IeY__FV5Rx_qecL3MoZ1IgGtIn9-4OVWVp2RRO8ex4CkuFrBOopDfjT9I1opGnmqGqThjVZWdch7mYw9V9fXQYezEzBPBXuYDxz2feJAOnEkPuRvbzbQ264g5oZCMlNkOknbwM9Vquq4JXx5cutqpLqXFlT0wuqpjcSz9ugTAopFhwnZ2_0ZW2coGOxduh13lGodKD78pjhZMCzsm_XF9BuBnSE=w1370-h913-no)")
        .col-sm-5
          .date {{getDurationText(event.start_datetime,event.end_datetime) }}
          
          h2 
            //- span.small(v-text="getTitleSplit(event.title).series") Building United Communities:
            //- | {{ getTitleSplit(event.title).title }}
            | {{ event.title }}
          h3 {{event.subtitle}}
          h4(v-if="tags")
            span.tag(v-for="tag in tags") {{tag}}
          h4 Time: {{getDurationText(event.start_datetime,event.end_datetime) }}
          h4(v-if="event.venue")
            span Venue: 
            a.venue(:href="'https://www.google.com/maps?q='+event.venue") {{ event.venue }}
          p(v-html="event.description") Starting any journey with the end in mind makes perfect sense.However when it comes to career kickstarts, changes and promotions, it’s important to think about the embarkation point and plan from there. <br><br> Most of the engineering graduate students will have to job-hunt after graduation. It is important to learn how to handle employee/ employer conflict (Department of Labor), what are the most-updated policies and regulations for working VISA/ immigration (USCIS), and get direct responses from the officials before you kickstart.
          .btn.blue(v-if="indexCta" @click="scrollTo(indexCta.target)") {{indexCta.label}}
        .col-sm-7.hidden-xs
          .eventCover(:style="cssbg(event.cover)" style="background-image: url(https://lh3.googleusercontent.com/Z1bZXTqxs1XisADTjyREIsHdQ1JYHLyC0zL5WMeq5azeqxv9CphKGPE6nQqa1b6RiRRn9roKIjYtbpHkbxcAJ5eRZnfj1v_zRlCIWCJA6aSC95PziJPxn9xX5VR7PC-3H7UDlNGmTxkQbuEcv3sHHB3CfxV950dt847aaXFEABUwWPYj2o2dPw-3KyTA96enAcDHWWF7sf6jr8eX9HSmDWKgs2AwlFgYquuAEMiE4TJQx6ZbYdOI5Za5OeS6qbUO_-V16ztZ6Qp5-V6KWlNJXSOBJnfW87IlIjwZv9i1LrgRPhdPxgP6Q6Npdu8XUWWqlFcXz9RSa6tQA6FQ2woS95O1DeGKw6Npc2rfllfxGwIuUm96r5jiWhodXIF0Gs0cT2Hx93AvIdOqkFw6kuUtzg2JWyCUfL5GXuxyambdR4Iboe-cdVlzAc7tB6B4NyMOt655KTM2IeY__FV5Rx_qecL3MoZ1IgGtIn9-4OVWVp2RRO8ex4CkuFrBOopDfjT9I1opGnmqGqThjVZWdch7mYw9V9fXQYezEzBPBXuYDxz2feJAOnEkPuRvbzbQ264g5oZCMlNkOknbwM9Vquq4JXx5cutqpLqXFlT0wuqpjcSz9ugTAopFhwnZ2_0ZW2coGOxduh13lGodKD78pjhZMCzsm_XF9BuBnSE=w1370-h913-no)")
  section.sectionSchedule.blue(v-if="programChunk && Object.keys(programChunk).length")
    .container
      .row
        .col-sm-4
          h2 SCHEDULE
          hr
          p Starting any journey with the end in mind makes perfect sense. For more detail please check below.
          .btn.white.ghost More Details
        .col-sm-8
          ul.timeline(v-for="(programs,programdate) in programChunk")
            .datetag {{ getDateText(programdate) }}
            li(v-for="(p,pid) in programs")
              .time {{(p.start_datetime || " ").split(' ')[1].slice(0,5)}}- {{(p.end_datetime || " ").split(' ')[1].slice(0,5)}}
              .content( @click="toggle('#des'+pid+programdate)")
                h4 {{p.title}}
                  span(v-if="(p.description||'').trim()")   ▾
                p(v-html="(p.description||'').trim()",:id="'des'+pid+programdate")
          //ul.timeline
            .datetag Sep.8
            li(v-for="i in 2")
              .time 06:00-06:30
              .content
                p Check In & Pre Networking
            li(v-for="i in 1")
              .time 06:00-06:30
              .content
                p Check In & Pre Networking<br>Industry-trending brands that
  section.sectionGuest.white(v-if="event.speaker && event.speaker.length")
    .container
      .row
        .col-sm-6
          h2 FEATURED<br>GUESTS
          //- p Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017.
        .col-sm-12
          ul.row.speakers
            li.col-sm-3.col-speaker(v-for="speaker in getSpeakerListById(event.speaker)")
              router-link.headshot(
                :style="cssbg(speaker.headshot)",
                :to="`/speaker/n/${speaker.name}`")
              h4.place 
                span(v-if="speaker.company") ​{{speaker.company}}
                span(v-if="speaker.company && speaker.position") ,  
                span(v-if="speaker.position") {{speaker.position}}
              h3.name {{speaker.name}}
            
  section.sectionPhotos.white(v-if="event.album && event.album.length")
    .container
      .row
        .col-sm-12
          .row
            .col-sm-3
              h2 Event<br>Photos
              hr
            .col-sm-6
              //- p Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017.
              router-link.btn.red(to="/event#eventlist") View Events
          br
          br
          br
    .container-fluid
      a.row.rowPhotos(:href="event.album_link", target="_blank")
        .col-sm-8
          .photoBlock.left(:style='cssbg(event.album[0].image)')
            .content
              h3 {{ event.album[0].caption || "See More" }}
                i.fa.fa-angle-right
        .col-sm-4
          .row
            .col-sm-5.red.hidden-xs
            .col-sm-7

              .photoBlock(:style='cssbg(event.album[1].image)')
                .content
                  h3 {{ event.album[1].caption || "See More" }}
            
          .row
            .col-sm-7
              .photoBlock(:style='cssbg(event.album[2].image)')
                .content
                  h3 {{ event.album[2].caption || "See More" }}
            .col-sm-5.hidden-xs
        
          .row
            .col-sm-12
              .photoBlock(:style='cssbg(event.album[3].image)')
                .content
                  h3 {{ event.album[3].caption || "See More" }}
  section.sectionOranizers.white(v-if="event.agencies && event.agencies.length")
    .container
      .row(v-for="type in agencytypes",
          v-if="agenciesChunk[type.value].length")
        .col-sm-5
          h2 {{type.label}}s
          hr
          //- p(v-if="type.value=='organizer'") Industry-trending brands that have worked with n3xt con for positive impact.
        .col-sm-7
          .row
            //- pre {{agenciesChunk[type.value]}}
            .col-sm-12
              //- h1 {{type.label}}
              ul.agencies
                li.logo(v-for="ag in agenciesChunk[type.value]")
                  a(:href="ag.data.link",target="_blank", :title="ag.data.name")
                    img(:src="ag.data.logo")

  section.sectionRegist.grey#section_register
    .container
      .row
        .col-sm-5
          h2 Registration
          hr
          p Feel free to contact us for any questions,  recommendations, speaking engagements, and inquiries about sponsorship and partnership.
          router-link.btn.blue(to="/about#contact") Contact us
        .col-sm-7
          iframe(:src="`https://www.eventbrite.com/tickets-external?eid=${ eventbriteId }&ref=etckt`")

  section.sectionRecommend      
    .container-fluid
      .row
        .col-sm-6
          router-link.photoBlock(
            :style="`background-image: url(${navEvent.pre.cover})`",
            :to= "getEventRoute(navEvent.pre,{link: true})",
            v-if="navEvent.pre")
            .content
              hr
              h3 Previous Event
              h2(v-html="navEvent.pre.title")
        .col-sm-6
          router-link.photoBlock(
            :style="`background-image: url(${navEvent.post.cover})`",
            :to= "getEventRoute(navEvent.post,{link: true})",
            v-if="navEvent.post")
            .content
              hr
              h3 Next Event
              //h2 Building United Communities
              h2(v-html="navEvent.post.title")
  section_footer


</template>

<script>
import slideIn from '../components/slideIn'
import section_footer from '../components/section_footer'
import _ from 'lodash'
import {mapState} from 'vuex'

export default {
  
  metaInfo() {
    return {
      title: "Event",
      titleTemplate: require("../data/common").default.titleTemplate
    } // set a title
  },
  props: [
    'id','routename'
  ],
  components: {
    slideIn,section_footer
  },
  data(){
    return {
      event: null,
      agencytypes: [
        { label: "Organizer", value: "organizer" },
        { label: "Partner", value: "partner" },
        { label: "Sponsor", value: "sponsor" }
      ]
    }
  },
  mounted(){
    //if custom route exist then get by name, else get by id
    
    
    let apiurl = this.routename?`/api/event/n/${this.routename}`:`/api/event/${this.id}`
    axios.get(apiurl).then(res=>{


      res.data.speaker = JSON.parse(res.data.speaker || "[]")
      res.data.album = JSON.parse(res.data.album || "[]")
      res.data.agencies = JSON.parse(res.data.agencies || "[]")
      this.event=res.data

      // this.event.speaker.forEach((id,index)=>{
      //   axios.get("/api/speaker/"+id).then(res2=>{
      //     Vue.set(this.event.speaker,index,res2.data)
          
      //   })
      // })

      if (this.event.agencies.length && typeof this.event.agencies[0]!='object'){
        this.event.agencies = this.event.agencies.map(id=>({id,type: 'organizer'}))
      }
      this.event.agencies.forEach((agency,index)=>{
        axios.get("/api/agency/"+agency.id).then(res2=>{
          Vue.set(this.event.agencies[index],"data",res2.data)
          
        })
      })
      Vue.nextTick(()=>{
        this.event.program.forEach((p,pid)=>$("#des"+pid ).slideUp() )
        if (this.$route.path.indexOf("rsvp")!=-1){
          this.scrollTo(".sectionRegist")
        }
        setTimeout(()=>{
          console.log("hide again")
          this.event.program.forEach((p,pid)=>$("#des"+pid ).slideUp() )
        },3000)

      })
    })
  },
  methods:{
    getSpeakerListById(list){
      return list.map(id=>this.speakers.find(sp=>sp.id==id))
    },
    goToAlbum(){
      if (this.event.album_link){
        window.open(this.event.album_link)
      }
    },
    toggle(sel){
      // console.log(sel)
      $(sel).slideToggle(0)
    }
    // scrollTo(selector){
    //   $("html,body").animate({scrollTop:$(selector).offset().top})
    // }
  },
  computed:{
    ...mapState(["events","speakers"]),
    indexCta(){
      let overTime = (new Date() ) > (new Date(this.event.end_datetime))
      if (overTime){
        if (this.event.album_link){
          return {
            label: "See Photos",
            target: ".sectionPhotos"
          }
        }
      }else{
        return {
            label: "Register",
            target: ".sectionRegist"
          }
      }
      return null
    },
    navEvent(){
      let currentIndex = -1
      if (this.events){
        this.events.forEach((d,i)=>{
          console.log(d.id,this.event.id  )
          if (d.id==this.event.id){
            currentIndex = i
          }
        })
        let pre = this.events[currentIndex-1]
        let post = this.events[currentIndex+1]
        
        return {
          pre: pre,
          post: post,
          currentIndex
        }        
      }else{
        return []
      }
    },
    eventbriteId(){
      if (!this.event.ticketlink) return null
      const regex = /tickets-([0-9]*)/;
      const str = this.event.ticketlink
      let m;

      return str.match(regex)[1]

    },
    programChunk(){
      let result = _.groupBy(this.event.program,(program)=>(program.start_datetime+"").split(" ")[0])
      return result
    },
    tags(){
      let t = this.event.tag
      if (t){
        return JSON.parse(t).map(o=> (o) )
      }else{
        return null
      }
      
    },
    agenciesChunk(){
      return {
        organizer: this.event.agencies.filter(ag=>ag.type=="organizer"),
        partner: this.event.agencies.filter(ag=>ag.type=="partner"),
        sponsor: this.event.agencies.filter(ag=>ag.type=="sponsor")

      }
    }
  }
}
</script>

<style>

</style>
