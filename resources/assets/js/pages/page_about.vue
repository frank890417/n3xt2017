<template lang="pug">
.page.pageAbout
  section.sectionHero.blue
    //img.mountain(src="/img/mountain.svg", :style="{transform: `translateY(${scrollTop/10}px)`}")
    //video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container
      .row
        .col-sm-12
          h1 About us
          h3 SOCAL'S FAST GROWING TECH COMMUNITY WITH LA SPIRIT
          hr
          h5 

        img.logo.line(src="/img/logoSymbolLine.svg")
        img.logo(src="/img/logoSymbolShadow.svg",:style="{transform: `translate(0,${parseInt(scrollTop/8)}px`}")
        
    
    
  section.sectionWhat.white
    .container
      .row
        .col-sm-9.colContent
          h2 What is n3xt con?
          hr
          p n3xt con is a haven for creative and intellectual authenticity. We believe entrepreneurial spirit is an immutable individual trait that cannot be smothered. n3xt con’s mission is to establish an environment in which such spirit not only flourishes but inspires more people to make a long lasting impact in their lives and beyond.<br> <br>As globalization becomes the foundation to our future, it is important for tomorrow’s thought leaders to establish an apolitical vision today. n3xt con sees the future through an entrepreneurial lens. For us, a “startup” merely means a new way of doing things so there is no start-up that is too small or insignificant. On the one hand, we promote scalability while innovating on a global scale, but on the other hand, we want to emphasize the unlimited potential for any innovative problem-solving ideas in daily life.<br><br>Our team consists of individuals from creative, business, technology, and science backgrounds, and it is our dream to expand our community with such diversity across the world.
        
  section.sectionDo.blue
    .container
      .row
        slideIn.col-sm-6
          img(src="https://lh3.googleusercontent.com/J97buJ0AuD6ZdTxg7EDG9k6pPkbFuXvuDpLb0ITWpcUCspIPrHkx5l2YNSFR_iwebAF23wP8-0acxTh-BK973FetsaBZ5F5UJmcZoL1Fg8WMsAZRmo0MFAOMNvvAUoSTXG2pWqmmnT0u9gz2Q9Zjy10b3muiTFNPYDaaLBFdaAsoBgolk6p6bZFpDAl31amXEvmq_rhV-2OfYnZKMBrsCQRqnmotuS7j95ipyBRHStYIBB0QJYMLpTo3n2Uzf31mkczMqj5GmywOAHgpQ-aVOVVfIyCLPpoIhb_5hchoYVNXM4GXYnBja8_bGUWVMX8479nIbORjIJZGtBBNFc8hCJffToH73EOwuhJ127nJHXYaTKfFbFCeL_d-GGo53DOZzaakk8ZXRl8-7sQJwpCQnjjUaqt1XZ44H5IDwBDBGOkbmcO4gF2M2ydRAeOVjgk2NmifrEXPK8v_G7m9RK-_Mm3jaGqRbmISa7UsZkFiLakmY9XaklFmFezF2UnFOhnpOoaCFGgzA9YVP4RApZTqoShT8Xxft_VIk8CwM-Queg5aewLxocP1PYCzGM1GVujRzApdchOTA7IdMcTKLI5PppxEb5LG-Wtfydl6tyuHW593SC5JuBx8D-DQK6g2SsE2qp_WLbbe_Pr-yY-8Y5ANYN0BvOdKT-wbjE8=w1442-h961-no" style="width: calc(100% - 50px)")
          
        .col-sm-6
          slideIn
            h3.titleSmall About us
            h2 What we do?
            hr
            p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders

  section.sectionMission.white
    .container
      .row
        .col-sm-8.colContent
          h2 Mission & Vision statement
          hr
          p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
          br
          ul.numbers.row
            li.col-sm-4.col-xs-6
              .title Attendies
              .number 500+
            li.col-sm-4.col-xs-6
              .title Speakers
              .number 40+
            li.col-sm-4.col-xs-6
              .title Sessions
              .number 20+
            li.col-sm-4.col-xs-6
              .title Pitch Teams
              .number 10+
        .col-sm-4.colPic(:style="picParallax")

          img(src="http://n3xt2017.dev/img/s2_people.png")

  section.sectionTeam.blue
    .container
      .row
        .col-sm-6
          slideIn
            h3.titleSmall People working with us
            h2 Team & Culture
            hr
            p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders

        slideIn.col-sm-6.left
          img(src="/img/grapgicCircle.svg")

  
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
            li(v-for = "(job,job_id) in jobs", @click="now_job_id = job_id", @mouseenter="now_job_id = job_id")
              h3 {{job.title}}
              h4 {{job.description}}
        .col-sm-8
          .panel.white
            p ​{{ jobs[now_job_id].content }}
            .btn.red Apply

  section.sectionSponsor.blue
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
  section_contact
  section_footer
</template>

<script>
import {mapState} from 'vuex'
export default {
 
  metaInfo: {
    title: 'About', // set a title,
    titleTemplate: require("../data/common").default.titleTemplate
  },
  data(){
    return {
      picTop: -1,
      jobs: [
        {
          title: "Position Name 1",
          description: "A sectence to describe about",
          content: "1futher contents ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders"
        },
        {
          title: "Position Name 2",
          description: "A sectence to describe about",
          content: "2 events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders"
        },
        {
          title: "Position Name 3",
          description: "A sectence to describe about",
          content: "3 startup founders, investors, and industry leaders startup founders, investors, and industry leaders"
        }
      ],
      now_job_id: 0
    }
  },
  mounted(){
    this.picTop = $(".colPic").offset().top 
  },
  computed:{
    ...mapState(['scrollTop']),
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
