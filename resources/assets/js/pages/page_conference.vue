<template lang="pug">
.page.pageEvent.pageConference(v-if="event")
  section.sectionHero.blue
    .container
      .row
        .col-sm-7
          img(src="/img/theme1.svg")
        .col-sm-5.col-info
          h4 2018 June 16-17
          h1 n3xt con 2018
          h3 ​
            span Haven for Entrepreneurs and Storytellers<br><br>
            hr
            span
              i.fa.fa-map-marker  
              | &nbsp;THE REGENT THEATER DTLA
          .btn(@click="scrollTo('.sectionRegistration')") Get Tickets
  section.sectionAsk.white
    .container
      .row
        .col-sm-6
          h2.wow.fadeIn n3xt con 2018
          hr
          p.wow.fadeIn N3xt con 2018 brings together bright minds and visionaries to share ideas of innovation. Featuring a variety of themes including 
            b Humancentric Technology
            span , 
            b Omnipresence of Storytelling
            span , 
            b Frontier of Imagination
            span . Talk topics range from blockchain, brain-computer interface, AI, interactive media, to film production. <br><br>The conference provides an opportunity for attendees to get fresh perspective from industry leaders and futurists. Come, listen, get inspired and establish the network that may help you forge the path you have yet to discover.

        .col-sm-6.wow.fadeIn
          img(src="/img/logohexi.svg")
      .row
        .col-sm-6.wow.fadeIn
          img.leftout(src="/img/conf_speaker.png")
        .col-sm-6
          h2.wow.fadeIn Speakers
          hr
          p.wow.fadeIn High-quality programs and inspirational speakers. This year, we selected the best and brightest group of entrepreneurs, business investors, pioneers in technology, and industry leaders in the fields of technology, media, and entertainment.
          .btn.blue(@click="scrollTo('.sectionSpeakers')") Speaker Lineup
      .row
        .col-sm-6
          h2.wow.fadeIn Attendees
          hr
          p.wow.fadeIn If you're a visionary, then this is for you. N3xt con 2018 attendees are comprised of hundreds of professionals and visionaries who come together to inspire each other and exchange knowledge. Attendees range from Fortune 500 companies to smaller tech companies.
          .btn.blue(@click="scrollTo('.sectionRegistration')")  Get Ticket
        .col-sm-6.wow.fadeIn
          img(src="/img/cf01.jpg")
  section.sectionHighlight.blue
    .container
      .row
        .col-sm-12
          h2 Program Highlight
          hr
      .row
        .col-sm-4
          img(src="/img/theme1.svg").wow.zoomIn
          h3.wow.fadeIn Humancentric Technology 
          p.wow.fadeIn Showcase innovations that bring form and purpose to our endless imaginations. A lineup of visionaries share the inner-workings of their explorations in engineering that enhance the human experience and connection in a global landscape.
        .col-sm-4
          img(src="/img/theme2.svg").wow.zoomIn
          h3.wow.fadeIn Omnipresence of Storytelling
          p.wow.fadeIn Storytelling allows us to establish trust and community, breaks down barriers, and bridges our souls with empathy. With technology, storytelling has taken new forms and deepened its cultural impact like never before. Creative movers and shapers in the heart of global entertainment unveil groundbreaking ways of continuing this ancient tradition in branding, film & television, and marketing.
        .col-sm-4
          img(src="/img/theme3.svg").wow.zoomIn
          h3.wow.fadeIn Frontier of Imagination
          p.wow.fadeIn Modern entrepreneurs are capturing imaginations by colonizing space, revolutionizing energy sources, and enhancing global interactions. Often times, the possible is built on ideas that once considered impossible. New generations of entrepreneurs discuss how they apply their imagination to disrupting ideas that fundamentally change us.
  section.sectionKeynote.white
    .container
      .row
        .col-sm-12
          h2 Trending
          hr
      .row
        .col-sm-6
          .cover
            img(:src="currentSlide.cover" , :key="currentSlide.cover").animated.fadeIn
          //- .slick
            div(v-for="keynote in slides")
              img.cover(:src="keynote.cover")
        .col-sm-6.col-content(v-if="currentSlide")
          .tag {{currentSlide.theme}}
          h3 {{currentSlide.title}}
          br
          .speaker.fadeIn.animated(:key="currentSlide.title")
            .container.d-flex
              .col-head
                .head(:style="cssbg(currentSlide.speakerData.headshot)")
              .col-info(v-if="currentSlide.speakerData")
                h4
                  span {{currentSlide.speakerData.name}}
                p {{currentSlide.speakerData.position}}, {{currentSlide.speakerData.company}} 
          //- h3 {{keynote.title}}
          br
          br
          .btns
            .btn-cir(@click="prev")
              i.fa.fa-angle-left
            .btn-cir(@click="next")
              i.fa.fa-angle-right

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
                  span(v-if="p.description")   ▾
                p(v-html="p.description",:id="'des'+pid+programdate")
                
  section.sectionSpeakers.white
    .container
      .row
        .col-sm-12
          h2 Speakers
    .container-fluid.speakers
      .row
        a.col-sm-3.wow.fadeIn(v-for="(person,pid) in event.speaker",
          :href="person.link")
          .person.photoBlock(:style="cssbg(person.headshot)",
          @click="speakerShowIndep=true;speakerShowId=pid")
            h3 {{person.name}}
            h4 
              span {{person.position}}
              span(v-if="person.position && person.company")  ,<br> 
              span {{person.company}}
        fullPage(:show="speakerShowIndep && fullSpeaker", @closeFullpage = "()=>{speakerShowIndep=false}")
          .container.colContent(v-if="fullSpeaker")
            .row
              .col-sm-12
                img(:src="fullSpeaker.headshot", style='width: 200px')
                h2 {{fullSpeaker.name}}
                h3 {{fullSpeaker.position}} , {{fullSpeaker.company}}
                hr
                p(v-html="getHtml(fullSpeaker.bio)")

  section.sectionRegistration.grey(v-if="eventbriteId")
    .container
      .row
        .col-sm-5
          h2 Registration
          hr
          p N3xt con 2018 is scheduled for June 16-17 2018 at the Regent Theater DTLA. Limited Tickets Available! Feel free to contact us for any questions, recommendations, speaking engagements, and inquiries about sponsorship and partnership.
          router-link.btn.blue(to="/about#contact") Contact us
        .col-sm-7
          iframe(:src="`https://www.eventbrite.com/tickets-external?eid=${ eventbriteId }&ref=etckt`")

  section.sectionOranizers.white(v-if="event.agencies && event.agencies.length")
    .container.text-center
      .row(v-for="type in agencytypes",
          v-if="agenciesChunk[type.value].length")
        .col-sm-12
          h2 {{type.label}}s
          hr(style="margin: auto")
          //- p(v-if="type.value=='organizer'") Industry-trending brands that have worked with n3xt con for positive impact.
        .col-sm-12
          .row
            //- pre {{agenciesChunk[type.value]}}
            .col-sm-12.logos
              //- h1 {{type.label}}
              //- ul.agencies
              .logo(v-for="ag in agenciesChunk[type.value]")
                a(:href="ag.data.link",target="_blank", :title="ag.data.name")
                  img(:src="ag.data.logo")
  


  section_footer

</template>


<script>
import slideIn from '../components/slideIn'
import section_footer from '../components/section_footer'
import _ from 'lodash'
import {mapState} from 'vuex'
import $ from 'jquery'
import slick from 'slick-carousel'

export default {
  
  metaInfo() {
    return {
      title: "Conference",
      titleTemplate: require("../data/common").default.titleTemplate,

    } // set a title
  },
  props: [
    // 'routename'
  ],
  components: {
    slideIn,section_footer
  },
  data(){
    return {
      event: null,
      speakerShowIndep: false,
      speakerShowId: 0,
      agencytypes: [
        { label: "Organizer", value: "organizer" },
        { label: "Partner", value: "partner" },
        { label: "Sponsor", value: "sponsor" }
      ],
      // id: 9,
      routename: "n3xtconf_2018",
      keynotes: [
        {
          theme: "Frontier of Imagination",
          title: "Unlocking the Mysteries of Our Brain",
          company: "Founder & CEO of Openwater, Former Executive of Facebook Oculus",
          speaker: "Mary Lou Jepsen",
          speakerId: 123,
          cover: "/img/imag001.jpg"
        },

        {
          theme: "Omnipresence of Storytelling",
          title: "Kick-Ass Asian Female Filmmakers",
          company: "Award Winning Film Director",
          speaker: "Livi Zheng",
          speakerId: 127,
          cover: "/img/imag002.jpg"
        },

        {
          theme: "Omnipresence of Storytelling",
          title: "Future Home Entertainment - Vessel for Storytelling",
          company: "Founder & CEO",
          speaker: "William Wang",
          speakerId: 108,
          cover: "/img/imag003.jpg"
        },

        {
          theme: "Omnipresence of Storytelling",
          title: "Kick-Ass Asian Female Filmmakers",
          company: "Award Winning Film Director",
          speaker: "Roxy Shih",
          speakerId: 129,
          cover: "/img/imag004.jpg"
        },
      ],
      slickOptions: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          dots: true,
          fade: true
          // Any other options that can be got from plugin documentation
      },
      slickEl: null,
      currentSlideId: 0,
    }
  },
  mounted(){
    //current slideshow
    setInterval(()=>{
      this.keynoteSlideDelta(1)
    },4000)

    // console.log(this.slides)
    //  if (this.slides.length>0){
    //     setTimeout(()=>{
    //       this.$nextTick(() => {
    //         this.slickEl=$(".slick").slick(
    //           this.slickOptions
    //         )
    //         console.log(this.slickOptions)
    //         let _this=this
    //         $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //           console.log(nextSlide)
    //           _this.currentSlideId=nextSlide
    //         })

    //       });
    //     },1000)
    //   }else{
    //     setTimeout(()=>{
    //       this.$nextTick(() => {
    //         this.slickEl=$(".slick").slick(
    //           this.slickOptions
    //         )
    //         let _this=this
    //         $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //           console.log(nextSlide)
    //           _this.currentSlideId=nextSlide
    //         })

    //       });
    //     },1500)
    //   }
    
    
    let apiurl = this.routename?`/api/event/n/${this.routename}`:`/api/event/${this.id}`
    axios.get(apiurl).then(res=>{
      res.data.speaker = JSON.parse(res.data.speaker || "[]")
      res.data.album = JSON.parse(res.data.album || "[]")
      res.data.agencies = JSON.parse(res.data.agencies || "[]")
      this.event=res.data

      this.keynotes.forEach((keynote)=>{

        axios.get("/api/speaker/"+keynote.speakerId).then(res2=>{
          Vue.set(keynote,"speakerData",res2.data)
          
        })
      })
      this.event.speaker.forEach((id,index)=>{
        axios.get("/api/speaker/"+id).then(res2=>{
          Vue.set(this.event.speaker,index,res2.data)
          
        })
      })

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

      })
    })
    //if custom route exist then get by name, else get by id
    new WOW().init();

  },
  methods:{
    next() {
        // console.log(this.slickEl)
        // console.log($(".slick"))
        // $(".slick").slick("next");
        this.keynoteSlideDelta(1)
    },

    prev() {
        // $(".slick").slick("prev");
        this.keynoteSlideDelta(-1)
    },
    keynoteSlideDelta(value){
      let n = this.currentSlideId+value
      if (n>this.keynotes.length-1){
        n=0
      }
      if (n<0){
        n=this.keynotes.length-1
      }
      this.currentSlideId=n
    },
    goToAlbum(){
      if (this.event.album_link){
        window.open(this.event.album_link)
      }
    },
    toggle(sel){
      console.log(sel)
      $(sel).slideToggle(0)
    },
    getHtml(text){
      return (''+text).replace(/\r/g,'<br>')
    }
    // scrollTo(selector){
    //   $("html,body").animate({scrollTop:$(selector).offset().top})
    // }
  },
  watch: {
    // slides(){
    //   this.slickEl=$(".slick").slick(
    //       this.slickOptions
    //     )
    //     let _this=this
    //     $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //       console.log(nextSlide)
    //       _this.currentSlideId=nextSlide
    //   })
    // }
  },
  computed:{
    fullSpeaker(){
      return this.event.speaker[this.speakerShowId]
    },
    slides(){
      return this.keynotes
    },
    currentSlide(){
      return this.slides[this.currentSlideId]
    },
    ...mapState(["events"]),
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


<style lang="sass">

</style>
