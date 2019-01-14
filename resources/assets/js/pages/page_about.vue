<template lang="pug">
.page.pageAbout
  section.sectionHero.blue
    //img.mountain(src="/img/mountain.svg", :style="{transform: `translateY(${scrollTop/10}px)`}")
    //video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container
      .row
        .col-sm-12
          h1 {{content.page_title}}
          h3 {{content.page_sub_title}}
          hr
          h5 

        img.logo.line(src="/img/logoSymbolLine.svg")
        img.logo(src="/img/logoSymbolShadow.svg",:style="{transform: `translate(0,${parseInt(scrollTop/8)}px`}")
        
    
    
  section.sectionWhat.white
    .container
      .row
        .col-sm-9.colContent
          h2 {{ content.section1.title }}
          hr
          p {{ content.section1.content }}
        
  section.sectionDo.blue
    .container
      .row
        slideIn.col-sm-6
          img(src="/img/sitephoto/Pic03.jpg" style="width: calc(100% - 50px)")
          
        .col-sm-6
          slideIn
            h3.titleSmall {{ content.section2.title_small }}
            h2 {{ content.section2.title }}
            hr
            p ​{{ content.section2.content }}

  section.sectionMission.white
    .container
      .row
        .col-sm-8.colContent
          h2 {{ content.section3.title }}
          hr
          p {{ content.section3.content }}
          br
          ul.numbers.row
            li.col-sm-3.col-xs-6
              .title Attendees
              .number 2000+
            li.col-sm-3.col-xs-6
              .title Speakers
              .number 100+
            li.col-sm-3.col-xs-6
              .title Sessions
              .number 50+
            li.col-sm-3.col-xs-6
              .title Pitch Teams
              .number 20+
        .col-sm-4.colPic(:style="picParallax")

          img(src="/img/s2_people.png")

  section.sectionTeam.blue
    .container
      .row
        .col-sm-6
          slideIn
            h3.titleSmall {{ content.section4.title_small }}
            h2 {{ content.section4.title }}
            hr
            p {{ content.section4.content }}

        slideIn.col-sm-6.left
          img(src="/img/grapgicCircle.svg")
    .container-fluid.crews
      .row
        a.col-sm-3(v-for="person in crews",
          :href="person.link")
          .person.photoBlock(:style="cssbg(person.headshot)")
            h3 {{person.name}}
            h4 
              span {{person.position}}
              //- span(v-if="speaker.position && speaker.company")  , 
              //- span {{speaker.company}}
              //- a.btn(:href="person.link") More
        //.content
          p(v-html="speaker.description?speaker.description: (speaker.bio|| '').slice(0,200)")
    


  
  section.sectionOpening.blue
    .container
      .row
        .col-sm-12
          h3.titleSmall Join us!
          h2 Current Opening
          hr

      .row
        .col-sm-4
          ul.positionList
            li(v-for = "(job,job_id) in jobs", 
               @click="now_job_id = job_id", 
               @mouseenter="now_job_id = job_id",
               :class="{active:job_id==now_job_id}")
              h3 {{job.title}}
              //- h4 {{job.description}}
        .col-sm-8
          .panel.white
            .row
              .col-sm-12

                p(v-html="jobs[now_job_id].description")
              .col-sm-6
                h3 Responsibilities
                ul
                  li(v-for="l in jobs[now_job_id].responsibilities") {{l}}
              .col-sm-6
                ul
                  h3 Qualifications
                  li(v-for="l in jobs[now_job_id].qualifications") {{l}}

            a.btn.red(href="mailto:info@n3xtcon.com", target="_blank") Apply

  //section.sectionSponsor.blue
    .container
      .row
        .col-sm-12
          h3.titleSmall Join us!
          h2 Sponsorship & Donation 
          hr

      slideIn.row
        .col-sm-3
          .card
            img
            h3 A cup of coffee
            p Label :    some requirement​<br>Each year, we host a variety of events including workshops, 
            ul
              li Content 1 of something
              li Content 2 of blabal
            .btn.red Sponsor
        .col-sm-3
          .card
            img
            h3 Small Donation
            p Label :    some requirement​<br>Each year, we host a variety of events including workshops, 
            ul
              li Content 1 of something
              li Content 2 of blabal
            .btn.red Sponsor
        .col-sm-3
          .card
            img
            h3 Meduim Donation
            p Label :    some requirement​<br>Each year, we host a variety of events including workshops, 
            ul
              li Content 1 of something
              li Content 2 of blabal
            .btn.red Sponsor
        .col-sm-3
          .card
            img
            h3 Company Donation
            p Label :    some requirement​<br>Each year, we host a variety of events including workshops, 
            ul
              li Content 1 of something
              li Content 2 of blabal
            .btn.red Sponsor
  section_contact#contact
  section_footer
</template>

<script>
import {mapState} from 'vuex'
import data_job from "../data/openning_job.js"
import data_crew from "../data/crews.js"

export default {
  
  metaInfo: {
    title: 'About', // set a title,
    titleTemplate: require("../data/common").default.titleTemplate
  },
  data(){
    return {
      picTop: -1,
      
      now_job_id: 0,
      jobs: data_job,
      crews: data_crew,
      content: {
        page_title: "About us",
        page_sub_title: "Haven for Entrepreneurs and Storytellers",
        section1: {
          title: "What is n3xt con?",
          content: "As globalization becomes the foundation to our future, it is important for tomorrow’s thought leaders to establish an apolitical vision today. n3xt con sees the future through an entrepreneurial lens. For us, a “startup” merely means a new way of doing things so there is no start-up that is too small or insignificant. On the one hand, we promote scalability while innovating on a global scale, but on the other hand, we want to emphasize the unlimited potential for any innovative problem-solving ideas in daily life."
        },
        section2: {
          title: "Mission & Vision",
          title_small: "About us",
          content: "​To empower, engage, and elevate the next generation of visionaries by providing them with the resources they need to achieve longstanding success."
        },
        section3: {
          title: "What We Do?",
          content: "​​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders." 
        },
        section4: {
          title_small: "Working With Us",
          title: "Team & Culture",
          content: "​Our team consists of individuals from creative, business, technology, and science backgrounds, and it is our dream to expand our community with such diversity across the world."
        }
      }
    }
  },
  mounted(){
    axios.get("/api/page/about").then((res)=>{
      let r = JSON.parse(res.data.content)

      this.$set(this,"content",r.content)
      this.$set(this,"crews",r.crews)
      this.$set(this,"jobs",r.jobs)
    })
    setTimeout(()=>{
      this.picTop = $(".colPic").offset().top 
      if (window.location.hash){
        this.scrollTo(window.location.hash)
      }

    },1000)
    
  },
  computed:{
    ...mapState(['scrollTop','pages']),
    picParallax(){
      if (this.picTop>-1){
        return {transform: `translateY(${parseInt((this.scrollTop-this.picTop)/20+30)}px)`}
      }
      return {}
      
    }
  },
}
</script>

<style>

</style>
