<template lang="pug">
.page.pageEvent.pageConference(v-if="event")
  section.sectionHero.blue
    .container
      .row
        .col-sm-7
          img(src="/img/theme1.svg")
        .col-sm-5.col-info
          h4 {{ getDurationText( event.start_datetime,event.end_datetime ) }}
          h1 {{ contentData.title }}
          h3 ​
            span {{ contentData.subtitle }}
            br
            br
            hr
            span
              i.fa.fa-map-marker  
              | &nbsp; {{event.venue}}
          .btn(@click="scrollTo('.sectionRegistration');$ga.event('conference','get tickets','click')") Get Tickets
  section.sectionAsk.white
    .container
      .row(v-for="(section,sid) in contentData.abouts")
        .col-sm-6.wow.fadeIn(v-if="sid % 2!=0")
          img(:src="section.img")
        .col-sm-6
          h2.wow.fadeIn(v-html="section.title")
          hr
          p.wow.fadeIn(v-html="section.content")
          .btn.blue(v-if="section.btn",
                    @click="scrollTo(section.btn.target)") {{ section.btn.text }}
        .col-sm-6.wow.fadeIn(v-if="sid % 2==0")
          img(:src="section.img")
  section.sectionHighlight.blue
    .container
      .row
        .col-sm-12
          h2 Program Highlight
          hr
      .row
        .col-sm-4(v-for="highlight in contentData.highlights")
          img(:src="highlight.img").wow.zoomIn
          h3.wow.fadeIn(v-html="highlight.title")
          p.wow.fadeIn(v-html="highlight.content")
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
            .container.d-flex(v-for="speaker in getSpeakerListById([currentSlide.speakerId])",
                              v-if="speaker")
              .col-head(v-if="speaker")
                .head(:style="cssbg(speaker.headshot)", v-if="speaker.headshot")
              .col-info()
                h4
                  span {{speaker.name}}
                p {{speaker.position}}, {{speaker.company}} 
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
        .col-sm-12
          h2 SCHEDULE
          hr
          p.mb-5 Starting any journey with the end in mind makes perfect sense. For more detail please check below.
          //- .btn.white.ghost More Details
          br
          br

      // there are one date that has more than 1 track
      .row(v-for="(dayChunk,chunkDate) in programChunk",
           v-if="!isAllDayProgramSingleTrack" )
        .col-sm-12
          h3 {{ getDateText(chunkDate) }}
        .col-schedule-area(v-for="(track,trackId) in getProgramTrack(dayChunk)",
                           :class="'col-sm-'+12/trackCount")
          ul.timeline(v-for="(programs,programdate) in getProgramChunk(track)").mt-5
            //- h4 Track

            .datetag Track {{ parseInt(trackId) + 1 }}
            li(v-for="(p,pid) in programs")
              .time {{(p.start_datetime || " ").split(' ')[1].slice(0,5)}}- {{(p.end_datetime || " ").split(' ')[1].slice(0,5)}}
              .content
                h4.title(@click="toggle('#des'+pid+programdate)") {{p.title}}
                  span(v-if="strip_tags(p.description)")   ▾
                p.mb-3(v-if="strip_tags(p.description)", v-html="strip_tags(p.description)",:id="'des'+pid+programdate")
                div.program-speakers
                  .speaker(v-for="speaker in getSpeakerListById(p.speakers)",
                          @click="speakerShowIndep=true;speakerShowId=speaker.id").mr-5
                    .headshot(:style="cssbg(speaker.headshot)").mr-2
                    span.name(style="opacity: 0.5") {{speaker.name}}

      .row(v-if ="isAllDayProgramSingleTrack")
        .col-schedule-area
          ul.timeline(v-for="(programs,programdate) in programChunk").mt-5
            .datetag {{ getDateText(programdate) }}
            li(v-for="(p,pid) in programs")
              .time {{(p.start_datetime || " ").split(' ')[1].slice(0,5)}}- {{(p.end_datetime || " ").split(' ')[1].slice(0,5)}}
              .content
                h4.title(@click="toggle('#des'+pid+programdate)") {{p.title}}
                  span(v-if="strip_tags(p.description)")   ▾
                p.mb-3(v-if="strip_tags(p.description)", v-html="strip_tags(p.description)",:id="'des'+pid+programdate")
                div.program-speakers
                  .speaker(v-for="speaker in getSpeakerListById(p.speakers)",
                          @click="speakerShowIndep=true;speakerShowId=speaker.id").mr-5
                    .headshot(:style="cssbg(speaker.headshot)").mr-2
                    span.name(style="opacity: 0.5") {{speaker.name}}



  section.sectionSpeakers.white
    .container
      .row
        .col-sm-12
          h2 Speakers
    .container-fluid.speakers
      .row
        a.col-sm-3.wow.fadeIn(v-for="(speaker,pid) in getSpeakerListById(event.speaker,true)")
          .person.photoBlock(:style="cssbg(speaker.headshot)",
          @click="speakerShowIndep=true;speakerShowId=speaker.id")
            h3 {{speaker.name}}
            h4 
              span {{speaker.position}}
              span(v-if="speaker.position && speaker.company")  ,<br> 
              span {{speaker.company}}
        fullPage(:show="(speakerShowIndep && fullSpeaker)?true:false", @closeFullpage = "()=>{speakerShowIndep=false}")
          .container.colContent(v-if="fullSpeaker").animated.fadeIn
            .row
              .col-sm-12
                img(:src="fullSpeaker.headshot", v-if="fullSpeaker.headshot", style='width: 200px')
                h2 {{fullSpeaker.name}}
                h3 {{fullSpeaker.position}} , {{fullSpeaker.company}}
                hr
                p(v-html="getHtml(fullSpeaker.bio)", v-if="fullSpeaker")

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
      speakerShowId: -1,
      agencytypes: [
        { label: "Organizer", value: "organizer" },
        { label: "Partner", value: "partner" },
        { label: "Sponsor", value: "sponsor" }
      ],
      id: 9,
      // routename: "n3xtconf_2018",
      contentData: {
        title: "n3xt con 2018",
        subtitle: "Haven for Entrepreneurs and Storytellers",
        abouts: [
          {
            title: "n3xt con 2018",
            content: `N3xt con 2018 brings together bright minds and visionaries to share ideas of innovation. Featuring a variety of themes including <b>Humancentric Technology</b><span>, </span><b>Omnipresence of Storytelling</b><span>, </span><b>Frontier of Imagination</b><span>. Talk topics range from blockchain, brain-computer interface, AI, interactive media, to film production. <br><br>The conference provides an opportunity for attendees to get fresh perspective from industry leaders and futurists. Come, listen, get inspired and establish the network that may help you forge the path you have yet to discover.</span>`,
            img: "/img/logohexi.svg"
          },
          {
            title: "Speakers",
            content: "High-quality programs and inspirational speakers. This year, we selected the best and brightest group of entrepreneurs, business investors, pioneers in technology, and industry leaders in the fields of technology, media, and entertainment.",
            img: "/img/conf_speaker.png",
            btn: {
              target: ".sectionSpeakers",
              text: "Speaker Lineup"
            }
          },
          {
            title: "Attendees",
            content: "If you're a visionary, then this is for you. N3xt con 2018 attendees are comprised of hundreds of professionals and visionaries who come together to inspire each other and exchange knowledge. Attendees range from Fortune 500 companies to smaller tech companies.",
            img: "/img/cf01.jpg",
            btn: {
              target: ".sectionRegistration",
              text: "Get Ticket"
            }
          }
        ],
        highlights: [
          {
            title: "Humancentric Technology",
            img: "/img/theme1.svg",
            content: "Showcase innovations that bring form and purpose to our endless imaginations. A lineup of visionaries share the inner-workings of their explorations in engineering that enhance the human experience and connection in a global landscape."
          },{
            title: "Omnipresence of Storytelling",
            img: "/img/theme2.svg",
            content: "Storytelling allows us to establish trust and community, breaks down barriers, and bridges our souls with empathy. With technology, storytelling has taken new forms and deepened its cultural impact like never before. Creative movers and shapers in the heart of global entertainment unveil groundbreaking ways of continuing this ancient tradition in branding, film & television, and marketing."
          },{
            title: "Frontier of Imagination",
            img: "/img/theme3.svg",
            content: "Modern entrepreneurs are capturing imaginations by colonizing space, revolutionizing energy sources, and enhancing global interactions. Often times, the possible is built on ideas that once considered impossible. New generations of entrepreneurs discuss how they apply their imagination to disrupting ideas that fundamentally change us."
          }
        ],
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
        registration: {
          title: "Registration",
          content: "N3xt con 2018 is scheduled for June 16-17 2018 at the Regent Theater DTLA. Limited Tickets Available! Feel free to contact us for any questions, recommendations, speaking engagements, and inquiries about sponsorship and partnership."
        }

      },
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


    setTimeout(()=>{
      console.log($("[id^='des']"))
      $("[id^='des']").slideUp(0)
    },2000)
    setTimeout(()=>{
      console.log("hide again")
      $("[id^='des']").slideUp(0)
    },5000)

    let targetEvent =  this.events.find(evt=>{
      // console.log(evt.title,evt.start_datetime.slice(0,4),evt.type)
      return evt.start_datetime.slice(0,4) == this.targetYear && evt.type=="conference"
    })
    let targetId = targetEvent ? targetEvent.id : this.id
    let apiurl = `/api/event/${targetId}`
    
    // ---------------------------------------------
    // get Event Data
    // ---------------------------------------------

    axios.get(apiurl).then(res=>{
      res.data.speaker = JSON.parse(res.data.speaker || "[]")
      res.data.album = JSON.parse(res.data.album || "[]")
      res.data.agencies = JSON.parse(res.data.agencies || "[]")
      



      this.event=res.data
      this.event.program.forEach(p=>{
        p.speakers = JSON.parse(p.speakers)
      })

      //merge content data
      res.data.otherinfo = JSON.parse(res.data.otherinfo || "{}")
      this.$set(this,"contentData",{...this.contentData,...res.data.otherinfo})

      if (this.event.agencies.length && typeof this.event.agencies[0]!='object'){
        this.event.agencies = this.event.agencies.map(id=>({id,type: 'organizer'}))
      }
      this.event.agencies.forEach((agency,index)=>{
        axios.get("/api/agency/"+agency.id).then(res2=>{
          Vue.set(this.event.agencies[index],"data",res2.data)
        })
      })
      this.$nextTick(()=>{
        setTimeout(()=>{
          this.event.program.forEach((p,pid)=>{
            $("#des"+pid ).slideUp() 
          })
          if (this.$route.path.indexOf("rsvp")!=-1){
            this.scrollTo(".sectionRegistration")
          }

        },300)
      })



    })
    //if custom route exist then get by name, else get by id
    new WOW().init();

  },
  methods:{
    getProgramChunk(track){
      let result = _.groupBy(track,(program)=>(program.start_datetime+"").split(" ")[0])

      let commonPrograms = this.event.program.filter(p=>p.is_common_track)
      //- result=result.concat(commonPrograms)
      Object.keys(result).forEach(key=>{
        result[key]=result[key].concat(commonPrograms).filter((d,i,arr)=>arr.map(p=>p.id).indexOf(d.id)==i)
        result[key]=result[key].sort((a,b)=>a.start_datetime>b.start_datetime?1:-1)
      })
      return result
    },
    //catorize programs with differen date
  

    getProgramTrack(programs){
      let result = _.groupBy(programs,"track")
      this.maxTrackCount = Object.keys(result).length
      let commonPrograms = programs.filter(p=>p.is_common_track)

      Object.values(result).forEach(track=>{
        track=track.concat(commonPrograms)
        track=track.filter((d,i,arr)=>arr.map(p=>p.id).indexOf(d.id)==i)
        track.sort((a,b)=>a.start_datetime>b.start_datetime?1:-1)
      })
      return result
    },
    getTrackPrograms(trackId){
        // track=track
      let result = trackId || []
      let commonPrograms = this.event.program.filter(p=>p.is_common_track)
      result=result.concat(commonPrograms)
                   .filter((d,i,arr)=>arr.map(p=>p.id).indexOf(d.id)==i)
      result.sort((a,b)=>a.start_datetime>b.start_datetime?1:-1)
      return result
    },
    getSpeakerListById(list,order){
      if (Array.isArray(list)){
        let result = list.map(id=>this.speakers.find(sp=>sp.id==id)).filter(sp=>sp)
        if (order){
          result=result.sort((a,b)=>a.name>b.name?1:-1)
        }
        // console.log(result)
        return result
      }
    },
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
      if (n>this.slides.length-1){
        n=0
      }
      if (n<0){
        n=this.slides.length-1
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
  },
  computed:{
    targetYear(){
      return this.$route.params.year || (new Date()).getFullYear()
    },
    fullSpeaker(){
      return this.speakers.find(sp=>sp.id==this.speakerShowId)
    },
    slides(){
      return this.contentData.keynotes
    },
    currentSlide(){
      return this.slides[this.currentSlideId]
    },

    trackCount(){
      let result = Math.max.apply(null,this.event.program.map(p=>p.track))+1
      this.maxTrackCount=result
      return result
    },
    programTracks(){
      let result = _.groupBy(this.event.program,"track")
      this.maxTrackCount = Object.keys(result).length
      let commonPrograms = this.event.program.filter(p=>p.is_common_track)

      Object.values(result).forEach(track=>{
        track=track.concat(commonPrograms)
        track=track.filter((d,i,arr)=>arr.map(p=>p.id).indexOf(d.id)==i)
        track.sort((a,b)=>a.start_datetime>b.start_datetime?1:-1)
      })
      return result
    },
    isAllDayProgramSingleTrack(){
      let result = true
      Object.values(this.programChunk).forEach(chunk=>{
        if (Object.keys(this.getProgramTrack(chunk)).length>=2){
          result=false
        }
      })
      return result
    },
    currentTrack(){
      
        // track=track
      let result = this.program_tracks[this.currentTrackId] || []
      let commonPrograms = this.event.program.filter(p=>p.is_common_track)
      result=result.concat(commonPrograms)
                   .filter((d,i,arr)=>arr.map(p=>p.id).indexOf(d.id)==i)
      result.sort((a,b)=>a.start_datetime>b.start_datetime?1:-1)
      return result
    },
    ...mapState(["events","speakers"]),
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
      let match = str.match(regex)
      return match && match[1]

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
        organizer: this.event.agencies.filter(ag=>ag.type=="organizer").sort((a,b)=>a.name>b.name?1:-1),
        partner: this.event.agencies.filter(ag=>ag.type=="partner").sort((a,b)=>a.name>b.name?1:-1),
        sponsor: this.event.agencies.filter(ag=>ag.type=="sponsor").sort((a,b)=>a.name>b.name?1:-1)

      }
    }
  }
}
</script>


<style lang="sass">

</style>
