<template lang="pug">
.page.pageIndex
  section.sectionHero.blue
    img.mountain(src="/img/mountain.svg", :style="{transform: `translateY(${scrollTop/10}px)`}")
    //video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container
      .row
        .col-sm-12
          slideIn
            h1 Unleash<br>the Future.
          slideIn
            h4 SOCAL’s fast growing multi-discipline platform for entrepreneurs
            hr
          slideIn  
            h5 FOR UPDATES & EXCLUSIVE OFFERS
            .btn.red Subscribe
            ul.numbers
              li 
                .title Attendees
                .number {{ incNumber(500) }}+
              li 
                .title Speakers
                .number {{ incNumber(40) }}+
              li 
                .title Sessions
                .number {{ incNumber(20) }}+
              li 
                .title Pitch Teams
                .number {{ incNumber(10) }}+
  section.sectionCaption.red
    .container
      .row
        .col-sm-6 
          slideIn
            h2.rotateCaption
              span Connecting
              br
              span Infinity.
          //.whiteCircle
          slideIn.left
            img(src="/img/s2_people.png")
        .col-sm-6
          slideIn
            h2 n3xtcon is a haven for creative authenticity.
          slideIn
            hr
          slideIn
            p We believe entrepreneurial spirit is an immutable individual trait that cannot be smothered. n3xt con’s mission is to establish an environment in which such spirit not only flourishes but inspires more people to make a long lasting impact in their lives and beyond.
            router-link.btn.blue(to='/about') About us
  section.sectionLen.blue
    .container
      .row
        .col-sm-6 
          slideIn
            h2 Sees the future<br>through an<br>entrepreneurial lens
          slideIn
            hr
          slideIn
            p Our team consists of individuals from creative, business, technology, and science backgrounds, and it is our dream to expand our community with such diversity across the world.<br><br>On the one hand, we promote scalability while innovating on a global scale, but on the other hand, we want to emphasize the unlimited potential for any innovative problem-solving ideas in daily life.
            router-link.btn.red(to='/about') About us
        .col-sm-6
          .block.blue
          img(src="https://lh3.googleusercontent.com/8pO3FYkdFqofAitFIcY4NMjhZncCQiBzZNKKJ8xP5M-9ykQHhSNb155DzeZr84zppC3EWR26BSso5MdF13wgexhI8CU-M39cwmX7FGWZD4IqOdV0Chb49RxTlX1SeFqpvpYzmggYG1lOYE2kDQmCN_eEmWerCpJdEjkQZ-EmiN99X7uqHzLNNgavm2_e2SGZx_OrdoRsW9nBGGRIqvB0Uk6vBfwrm-X76YF5_9-BqWyFniOAwXtPgCaymB3CnyMPs668mGRVJ3lhUf0OM7vKI3r9ctVxv4zbvehkJrt94tNUu3JWtfRcX1LWA6Tn0YFDiX3ZAzZa1uuiIWnt8EoIln_sgxO6Dm49mB7SpwGyaGW4h8nuYru4-OHHO291EUXRg79wJynUQ03OOlPkWBzbmivOiTOb9Hu3eQ94dIFdp4iwtrzS82aLX16GDtKrQH1H6D0T7As1i6U7c60CoKzk4BwletUH70axRUur3nHHqAnCb7gTsmDNjpCEIwl4h-wt-qQsosTiOfOvNuHblltLJgAZTrob1utYMyq8llcuOpkSygeVz9tpGtAFrSL_nQmjiBDcb0a99BNBYMyJhVUHZwznVnaqFVCS67bcp1Q3QBLV2AWFyLk_HzHj1_Jv0y070vKpejO5la-LroTFV34l6DxrnABMqi5va_A=w1406-h937-no")

            
  section.sectionPlatform.blue
    .container
      .row
        .col-sm-6
          slideIn.scale.circle Event
          slideIn.scale.circle Mentorship<br>Program
          slideIn.scale.circle Workshop
          .circle.c1(:style="{transform: `translateY(#{scrollTop/5}px)`}")
          .circle.c2(:style="{transform: `translateY(#{scrollTop/5}px)`}")
          .circle.c3(:style="{transform: `translateY(#{scrollTop/5}px)`}")
          .circle.c4(:style="{transform: `translateY(#{scrollTop/5}px)`}")
          .circle.c5(:style="{transform: `translateY(#{scrollTop/5}px)`}")
          .circle.c6(:style="{transform: `translateY(#{scrollTop/5}px)`}")
        .col-sm-6 
          slideIn
            h2 A platform for industry insights, and the newest technology trends.
          slideIn
            hr
            p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
          slideIn
            router-link.btn.red(to='/event') Explore Events
  section.sectionPhoto.red
    .container-fluid
      .row
        .col-sm-12
          slideIn
            h2 Event Photos
            hr
      slideIn.row.rowPhoto
        .col-sm-8
          a.img.big(:style="{'background-image': `url(https://lh3.googleusercontent.com/0i0LQCLjOKdrQxMkQmd3WHMGi6GhrdxIDcjRuZIcmRbOCGVhzv6Kc-OMEGNKBTuAk6aUv09Z_YGNKeP4Jp2s2_GbUFGThk84ZuMQEt0BKDLI2FTM8A2Q1SkJxrPNmRIUHw-Pl-q4pc3sNN9Dm5hBJMbyFDnKbYF7tmQmxcioz0PWlE_prDFiWaq9wzzI02ScBScNF_8gl0L2qXej__1tTGIdTDzGCkIQaUBZwHq3Y-q1xg5dUKR4Vs_9JRQr2nHd8DJh1HEaFtV1cCy4IuLEOJAxs83JJ6TzJubry93qQpTFxKraCZq3GO7WzsO2j02ok9ZVehQM3-AGijiBIJW8875MvrMekMjQoAPEt4uV8ggK1LXAyNqBg0pB6883lLtbA5oAkN50rMNtpCVUH-Ocr3lzrWNL9Pw62rr3RTzt8wPMZ-cV93EPv68QxwR2yN7FkP4zc-gkK81Q0Wym9eU0qMhZhODvWZ0aE8NHDBu_C-DHi6iA_1TzoJrFGXrwZbuI8CQCzTsYqenMEBPUkqBUUCTiLr3os55MTqKMG85uhsDRUxrl8dfIMREvcvZTvxVtJNA9wHMFw4Q1zhYrUFPNrbxWwAGvd1S4ZrXW3pq7IqGCDEyfm40jGxE5cyDq88N-gQ2tIWKPVoLkeJYZCihP8pETTK64JZSDQBc=w1387-h924-no)`}", href="https://goo.gl/photos/QQxauWqGwsoWSQEEA" , target="_blank")
        .col-sm-4
          a.img.small(:style="{'background-image': `url(https://lh3.googleusercontent.com/hDSociyRZSrrgk5s01ut6cOG5-GkNB4QGtdu_8Ck2I76Yl-nmKNX8YFiODToEGsu5UxBkYKcRjYFGyRdSXZmgk-EjTmZVn9Ad65O8nCxi7oi4fBJoGTbVQG7Gm8JLlikwN1SMMS9a2A8Q23aj938OI8zetUxMdxuKZTZtnmf7S012e_Ou4EiT7RtneUqCdoPPDVkwJa_aHMgqfEksATw2lYJFUyZTdGWxtOWg60GMupbyzc9ut514Kffv2KzAaEzEW32nxYr2ZHVaEPwnl7OzpKHsdA4jP1pkWNmW_HYaFMOwVo9juERqoX-xfxSX6KbBJfKRDhAbKUUfHIHMq0qpSyLwmP_rwoKfWXrzIGUSqrptO3J-9XySrmX0ODUrEx8cHHaws1OvvIvudn0u9pw-wrKxB0tsb_waJIzg3hMJyyZhcN8z1pXJmpmOsqBj5-By7etTNdI7Bqz2lV_ZEn0T63iJ26NmyoJ1jssdofR_akiHRmjnp1Dxx78FVDvKfGqlWGm32Et2AUEUzhiQP3h2z8DM_ykYUczW-bckID6p-5fG0rqpD6_QGSkGgAwXShkN4hokuR435pUu777Hss9h3LLcS0kM6LetBTNFsGVNsRu7DOtVlHiVYyPhG8b8Innufwrb8LYk9umfQepQKAuuZY2ZdgjEtGp0TI=w1406-h937-no)`}", href="https://goo.gl/photos/QQxauWqGwsoWSQEEA" , target="_blank")
          a.img.small(:style="{'background-image': `url(https://lh3.googleusercontent.com/pkSnqLXHQtQ4BSgKXuPRWz_XrbZJlFRFdxRtid1OTLY8PIPOgtSRKKscHw9w9a8lhgGT0nqElecjdhjcFKbNC8OIuir5UbA87-RQFf8jMQJBhu04UJy2Z38MCtz271lIHpnEmbwgu8LnBCkKbugSeMxmsO-UP3pMn4ZybhOnPvK8nVbdlLs1s3upeP4w0f4Ov0-FMg9Mh1wC_Jx2Gx4BLYYrUg8PN2-_e8aDAt9TwmZEt_Cjk9c2xlbjJQ31o4ltLzziFHiTPS-muzhF4dA5QQtz59XfhAzclDvDr6ob8vJiogm-nbE0PNwGxRM7riZT5PegjFbg4ojv51WchaKdKiVgsPKDw8wjVGDdfA7o9D0Kf-AGY5tGEUGCZWasbcmDrfPidFXQDjPlG_t7t9ockqc0nXjj_1txJl_tCfK4kTOdpeWZz5knnOy9CT1hqtV0wVYnpb6_aLjH5FeZNyng1T1dvlJIXo5BK6Vw-0KZ01DOcyRxIlPfovXKnZThegTeZeMc5iDjroCfn1DTMnAbxQS2d1SuGUjsvtBjR0vsmmcg0JLmkFzkpAgI9RTRI80lnMKUYi49F5MK-JLJDvkGRB20A2W0bLkaGMG1d32f1C8PDUDvO2d1eMONs_eSrFSbENkjq1hEnnD8vKxBPJq1hA2mBH6EohcOEEQ=w1406-h937-no)`}", href="https://goo.gl/photos/QQxauWqGwsoWSQEEA" , target="_blank")
          a.img.small(:style="{'background-image': `url(https://lh3.googleusercontent.com/EFDLxI2jctp25eUXX-tGkqYxq5LuzftmhW5ouK64BULkRstXu29cc3yQU1LKsG0EOa41542oBe6FvrD16b2cz0CVygsmREIDNdof311ccAGsu8TdorkHJyJigPYnGXq8u-MWAB74kM7xzmAzgtVmQR7KqqtUHD8Isv9rU-ZIC_AC9d2tTn_96-9XklGr1kB80_V1iHKzELC3OA2LwiV9yI17PJ6ho1btqeQdt-VBFfOJzs9wGiaNyjrbP9GqU3ogS9yQfuaV2VBdnzjLJI3DQKRBH1Hu-u7m4mWLwQ25EFH32kJfSd2zr_HOAMVcH184Q7zAdesqg5cogScifDqiKD5P4_SGRDknidsu5ap3lsKgDewkLqmdXNIJGOQF0m3TIVih-ZYqvpmg8rDdTQO8vSNQ8XIULMEunfKjX1NxxRuiecSfjiVhI0BFjiv76atP3kbmmK9QmSpfjCiRGuo3v5A3Ateah7f1TBQrwu5HU4csZvyCZLQ5TYztFmlIw8IY7WWXWRvsJKX0QCHlkINy5hSxwNeNjx505qFUwppCmY3WPjkbqCCk7wZ2vqW5XBj35vERbIt1kcWsypWfbM3mVxfyJ5k2c27iTdmE0_mVI7PX_fxl5RW5MDHQQAst8GH0ajWjCHWAqxyHX98W-PmMEoooAFQ7YyKSEvw=w1406-h937-no)`}", href="https://goo.gl/photos/QQxauWqGwsoWSQEEA" , target="_blank")
      .row
        .col-sm-12
          slideIn.pull-right 
            h4 For Young Entrepreneurs <br>&amp; Professionals
  section.sectionFeatureEvent.white(v-if="spotEvent")
    .container
      .row
      
        .col-sm-6.col-event-info
          slideIn
            h2 Featured Event
            hr
            h4 {{ getDurationText(spotEvent.start_datetime,spotEvent.end_datetime) }}
            .event
              h3 {{ getTitleSplit(spotEvent.title).series }} <br>
                span.big {{  getTitleSplit(spotEvent.title).title }}
            .col-sm-6.visible-xs
              slideIn.left.col-img
                //- .block.blue
                img(:src="spotEvent.cover",  target="_blank")
            p {{ strip_tags(spotEvent.description).slice(0,300)+"..." }}
            router-link.btn.red(:to="getEventRoute(spotEvent,{link: true})") RSVP Now
        .col-sm-6.hidden-xs
          slideIn.left.col-img
            //- .block.blue
            img(:src="spotEvent.cover",  target="_blank")
      
  section.sectionEvent.blue
    .container
      .row
        .col-sm-12
          h2 Annual Timeline
          hr
        .col-sm-12
          .row.event-row
            .event-item(v-for="event in events")
              router-link.event.purple(:to="getEventRoute(spotEvent,{link: true})")
                .infos
                  h2 
                    span {{ getTitleSplit(event.title).series }}
                    span {{ getTitleSplit(event.title).title }}
                  p {{ strip_tags(event.description).slice(0,100)+"..." }}
                
                .blockImg
                  //- .block.purple
                  .img(:style="cssbg(event.cover)" )
        
                .month {{getDurationText(event.start_datetime,event.end_datetime)}}

            //.event.purple
              .infos
                h4 {{ getDurationText(event.start_datetime,event.end_datetime) }}
                h2 {{ event.title }}
                p {{ strip_tags(event.description).slice(0,100)+"..." }}
              .month Sep.
              .btn.ghost.white RSVP Now
              .blockImg
                .block.purple
                img(src="https://lh3.googleusercontent.com/E8xWYLExhL98VFZbINtVZcUkz-I0_0FZnniscXOVxCp_he-0vri6s9F6M1F0czfinhczdUsdwiSe051vv5jzm9DEz_8RGztwaAMztbz4GszHWbrHAF1rPokHSByrk8-szqvVmK9Plo_l3LQBfyNvhI0zr69lIl4MIIhrAxg8K6kZaJo_sKLxYGZUb0NOb_siPMcosfd091etgT07RobriCly84gKrZAc33g0mLgTVQuBNEKHY3Vy5qAT5mWCR2bAkIgc0Opqv3dZDUEqNW3AblMQlQKENgCrbq2HRvSrk20Od8PhBjRpFlRO-PKpN40TXhDvEiw_yJBOg8kOw7LJf-8_iKWpoHYonYS_km1CAhDO7Ucy4ApW-oA8BNK2n6OStPCoC7gb6ggYvP9wc0AsRIWLCnDrFGp5AC4B6NXDneOB2UP8xXiXFowoxwTYDnTer2_biWgo_C-wCToe5F4SbAozcCcj4jEiV9dseGl2OB-G2Zcqevmx3xvIYAInmjLa0pszN0LJEDqY-zdsW50CONFLhP69adyca2ogeE0-IXlvDfYWU4FWvQCB1z3HY558lN4IuTpiJNKZmrMV4lKnhBtSNuk09M3k2OMGdRaKmVwSZJ4Ckdz9cYw5zkifE-ScB_wmra_5e4M62gQiYsJ_ss7wazYL6VgOAUY=w1406-h937-no" , target="_blank")
      
          
          //.col-sm-6
            slideIn.left.eventContainer
              .event.purple
                .infos
                  h4 9/7/2017   THU. 6PM
                  h2 WORKSHOP
                  p Starting any journey with the end in mind makes perfect sense. However when it comes to career kickstarts.. 
              .month Sep.
              .btn.ghost.white RSVP Now
              .blockImg
                .block.purple
                img(src="https://lh3.googleusercontent.com/Y7TFjrgslGUqFAMB6AfKEoU23_TzElEC1LY1fOpEZyWfqGVktRuWDn4pzbk7ZQpN8R5_RO2sKuH9Wmq2LVhppfFYNnT4ylxMbYVALa1Qip73GGWsVAyBzyVqbsTIuL8wgmgZktIVo7gvZGs8HOwKkuQEuIFIFJ0f-JH09PmD5bpiczJFr4bs932h2ViX7VRwuKPu8PUOlVJzVfxy1L8D7emcMh-Yg5zLKCM8D02jvm0czbXt2EPaVN-EVRr8O2tQROnTR7YaHNX_XKlrKUa_8-QGjKog_sz8Ip36GI92-X1Bf432PAilixjprR4KavYMkjKr4jVX_oBY3-67wp7xwHf09Fc79dN0hQY1EJ5wNZGRLcYwlwvCGa4k_yfrrkS-VqW1P78OZUKWkDKYpQ_V6JcqI8vgPFWdmhYikfrPuYJKTNRM68fOg3UqVpR0xPQ0chujh1sENa4PpXS9MWAVNGrOOiMZXpATOpfZ5rYpbJPxa8Fv7q-Wue8F0uOlZSvI0ZUfTG5RtqpA6yXbV9NlEtE_tilKn5V_6vzJHwXnWciRDdVvoQqzO3tJ53znSGdBT3hKGFAEVA4_nPzcwQb3H4CdQM3kOB3pLkC2H0QTNNAn2IgQgW70_4wNTVYWWvoLup_Ssy8Jm5QnZvGmFe-wnRo0y4b3hKRY8XY=w1406-h937-no" , target="_blank")
      
  section.sectionPartner.white.text-center
    .container
      .row
        .col-sm-12
          h2 STRATEGIC PARTNERS
        .col-sm-12
          img.logo(src="http://www.crosscamp.us/wp-content/uploads/2015/03/CrossCampus.png")
          img.logo(src="https://liaoyuanavatar.imgix.net/upload/feed/image/159911bb496-57ea9af32cb6a8ad7e63e2c1-a1412a8bb2bd8775?fit=max&w=960&h=600")
          img.logo(src="http://media.marketwire.com/attachments/201005/598031_Logo_300dpi_noline_nochinese.jpg")
  section_contact
  section_footer
  </template>

<script>

import {mapState} from 'vuex'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import $ from 'jquery'
import slick from 'slick-carousel'

export default {
    metaInfo: {
      title: 'n3xtcon', // set a title
    },
    mounted() {
      console.log('Component mounted.')
      //autoresize textarea
      $('textarea').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
      }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
      });

      //slick event
      $('.event-row').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              
            }
          }
        ]
      });

    },
    components: {
      
    },
    computed:{
      ...mapState(['scrollTop','events']),
      spotEvent(){
        return this.events[0]
      }
    },
    methods:{
      incNumber(num){
        return Math.ceil(this.easeOutSource*num)
      }
    },
    subscriptions(){

      //x^2 square ease-out function
      var stepCount = 150
      var arlist = Rx.Observable.from(Array.from({length: stepCount})
                        .map((d,i)=> -Math.pow((i-stepCount)/stepCount,2)+1 ))
      var $timeInterval = Rx.Observable.interval(20)      
      let result = Rx.Observable.from(arlist)
        .zip($timeInterval)
        .take(stepCount)
        .map(o=>o[0])
      //zip -> together take the latest element and compact together

      return {
        easeOutSource: result
      }
    }
  }
</script>

