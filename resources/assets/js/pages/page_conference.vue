<template lang="pug">
.page.pageEvent.pageConference(v-if="event")
  section.sectionHero.blue
    .container
      .row
        .col-sm-7
          img(src="/img/theme1.svg")
        .col-sm-5.col-info
          h4 2018 June 16-17
          h1 N3XT CON 2018
          h3 ​
            span SOCAL'S FAST GROWING TECH CONFERENCE WITH LA SPIRIT<br><br>
            hr
            span
              i.fa.fa-map-marker  
              | &nbsp;THE REGENT THEATER DTLA
          .btn(@click="scrollTo('.sectionRegistration')") Get Tickets
  section.sectionAsk.white
    .container
      .row
        .col-sm-6
          h2 Why?
          hr
          p N3xt con 2018 brings together bright minds and visionaries to share ideas of innovation. Featuring a variety of themes including 
            b Humancentric Technology
            span , 
            b Omnipresence of Storytelling
            span , 
            b Frontier of Imagination
            span . Talk topics range from blockchain, brain-computer interface, AI, interactive media, to film production. <br><br>The conference provides an opportunity for attendees to get fresh perspective from industry leaders and futurists. Come, listen, get inspired and establish the network that may help you forge the path you have yet to discover.

        .col-sm-6
          img(src="/img/logohexi.svg")
      .row
        .col-sm-6
          img(src="https://lh3.googleusercontent.com/hDSociyRZSrrgk5s01ut6cOG5-GkNB4QGtdu_8Ck2I76Yl-nmKNX8YFiODToEGsu5UxBkYKcRjYFGyRdSXZmgk-EjTmZVn9Ad65O8nCxi7oi4fBJoGTbVQG7Gm8JLlikwN1SMMS9a2A8Q23aj938OI8zetUxMdxuKZTZtnmf7S012e_Ou4EiT7RtneUqCdoPPDVkwJa_aHMgqfEksATw2lYJFUyZTdGWxtOWg60GMupbyzc9ut514Kffv2KzAaEzEW32nxYr2ZHVaEPwnl7OzpKHsdA4jP1pkWNmW_HYaFMOwVo9juERqoX-xfxSX6KbBJfKRDhAbKUUfHIHMq0qpSyLwmP_rwoKfWXrzIGUSqrptO3J-9XySrmX0ODUrEx8cHHaws1OvvIvudn0u9pw-wrKxB0tsb_waJIzg3hMJyyZhcN8z1pXJmpmOsqBj5-By7etTNdI7Bqz2lV_ZEn0T63iJ26NmyoJ1jssdofR_akiHRmjnp1Dxx78FVDvKfGqlWGm32Et2AUEUzhiQP3h2z8DM_ykYUczW-bckID6p-5fG0rqpD6_QGSkGgAwXShkN4hokuR435pUu777Hss9h3LLcS0kM6LetBTNFsGVNsRu7DOtVlHiVYyPhG8b8Innufwrb8LYk9umfQepQKAuuZY2ZdgjEtGp0TI=w1406-h937-no")
        .col-sm-6
          h2 Speakers
          hr
          p High-quality programs and inspirational speakers. This year, we selected the best and brightest group of entrepreneurs, business investors, pioneers in technology, and industry leaders in the fields of technology, media, and entertainment.
          .btn.blue(@click="scrollTo('.sectionSpeakers')") See more
      .row
        .col-sm-6
          h2 Attendees
          hr
          p If you're a visionary, then this is for you. N3xt con 2018 attendees are comprised of hundreds of professionals and visionaries who come together to inspire each other and exchange knowledge. Attendees range from Fortune 500 companies to smaller tech companies.
          .btn.blue Get Ticket
        .col-sm-6
          img(src="/img/cf01.jpg")
  section.sectionHighlight.blue
    .container
      .row
        .col-sm-12
          h2 Program Highlight
          hr
      .row
        .col-sm-4
          img(src="/img/theme1.svg")
          h3 Humancentric Technology 
          p Showcase innovations that bring form and purpose to our endless imaginations. A lineup of visionaries share the inner-workings of their explorations in engineering that enhance the human experience and connection in a global landscape.
        .col-sm-4
          img(src="/img/theme2.svg")
          h3 Omnipresence of Storytelling
          p Storytelling allows us to establish trust and community, breaks down barriers, and bridges our souls with empathy. With technology, storytelling has taken new forms and deepened its cultural impact like never before. Creative movers and shapers in the heart of global entertainment unveil groundbreaking ways of continuing this ancient tradition in branding, film & television, and marketing.
        .col-sm-4
          img(src="/img/theme3.svg")
          h3 Frontier of Imagination
          p Modern entrepreneurs are capturing imaginations by colonizing space, revolutionizing energy sources, and enhancing global interactions. Often times, the possible is built on ideas that once considered impossible. New generations of entrepreneurs discuss how they apply their imagination to disrupting ideas that fundamentally change us.
  section.sectionKeynote.white
    .container
      .row
        .col-sm-12
          h2 Keynote
          hr
      .row
        .col-sm-6
          .slick
            div(v-for="keynote in slides")
              img(src="/img/cf02.jpg")
        .col-sm-6.col-content
          .tag {{currentSlide.theme}}
          h3 {{currentSlide.title}}
          h4 {{currentSlide.speaker}}
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
        a.col-sm-3(v-for="person in event.speaker",
          :href="person.link")
          .person.photoBlock(:style="cssbg(person.headshot)")
            h3 {{person.name}}
            h4 
              span {{person.position}}

  section.sectionRegistration.grey(v-if="eventbriteId")
    .container
      .row
        .col-sm-5
          h2 Registration
          hr
          p Feel free to contact us for any questions,  recommendations, speaking engagements, and inquiries about sponsorship and partnership.
          router-link.btn.blue(to="/about#contact") Contact us
        .col-sm-7
          iframe(:src="`https://www.eventbrite.com/tickets-external?eid=${ eventbriteId }&ref=etckt`")

  section.sectionOranizers.white(v-if="event.agencies && event.agencies.length")
    .container
      .row(v-for="type in agencytypes",
          v-if="agenciesChunk[type.value].length")
        .col-sm-5
          h2 {{type.label}}s
          hr
          p(v-if="type.value=='organizer'") Industry-trending brands that have worked with n3xt con for positive impact.
        .col-sm-7
          .row
            //- pre {{agenciesChunk[type.value]}}
            .col-sm-12
              //- h1 {{type.label}}
              ul.agencies
                li.logo(v-for="ag in agenciesChunk[type.value]")
                  a(:href="ag.data.link",target="_blank", :title="ag.data.name")
                    img(:src="ag.data.logo")
  


  section_footer

</template>


<script>
import slideIn from '../components/slideIn'
import section_footer from '../components/section_footer'
import _ from 'lodash'
import {mapState} from 'vuex'
import slick from 'slick-carousel'

export default {
  
  metaInfo() {
    return {
      title: ()=>this.event.title,
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
          speaker: "Mary Lou Jepsen"
        },

        {
          theme: "Omnipresence of Storytelling",
          title: "Kick-Ass Asian Female Filmmakers",
          company: "Award Winning Film Director",
          speaker: "Livi Zheng"
        },

        {
          theme: "Omnipresence of Storytelling",
          title: "Future Home Entertainment - Vessel for Storytelling",
          company: "Founder & CEO",
          speaker: "William Wang"
        },

        {
          theme: "Omnipresence of Storytelling",
          title: "Kick-Ass Asian Female Filmmakers",
          company: "Award Winning Film Director",
          speaker: "Roxy Shih"
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
    //if custom route exist then get by name, else get by id
    
    
    let apiurl = this.routename?`/api/event/n/${this.routename}`:`/api/event/${this.id}`
    axios.get(apiurl).then(res=>{
      res.data.speaker = JSON.parse(res.data.speaker || "[]")
      res.data.album = JSON.parse(res.data.album || "[]")
      res.data.agencies = JSON.parse(res.data.agencies || "[]")
      this.event=res.data

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


    //init keynote carousel
     if (this.slides.length>0){
        setTimeout(()=>{
          this.$nextTick(() => {
            this.slickEl=$(".slick").slick(
              this.slickOptions
            )
            let _this=this
            $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide){
              console.log(nextSlide)
              _this.currentSlideId=nextSlide
            })

          });
        },500)
      }else{
        setTimeout(()=>{
          this.$nextTick(() => {
            this.slickEl=$(".slick").slick(
              this.slickOptions
            )
            let _this=this
            $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide){
              console.log(nextSlide)
              _this.currentSlideId=nextSlide
            })

          });
        },1500)
      }
  },
  methods:{
    next() {
        // console.log(this.slickEl)
        // console.log($(".slick"))
        $(".slick").slick("next");
    },

    prev() {
        $(".slick").slick("prev");
    },
    goToAlbum(){
      if (this.event.album_link){
        window.open(this.event.album_link)
      }
    },
    toggle(sel){
      console.log(sel)
      $(sel).slideToggle(0)
    }
    // scrollTo(selector){
    //   $("html,body").animate({scrollTop:$(selector).offset().top})
    // }
  },
  computed:{
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
