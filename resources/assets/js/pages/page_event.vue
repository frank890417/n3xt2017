<template lang="pug">
.page.pageEvent(v-if="event")
  section.sectionHero.white
    .container
      .row
        .col-sm-5
          .date SEP.7
          h2 
            span.small(v-text="event.title.split(':')[0]") Building United Communities:
            | <br>{{event.title.split(':')[1]}}
          h3 {{event.subtitle}}
          p(v-html="event.description") Starting any journey with the end in mind makes perfect sense.However when it comes to career kickstarts, changes and promotions, it’s important to think about the embarkation point and plan from there. <br><br> Most of the engineering graduate students will have to job-hunt after graduation. It is important to learn how to handle employee/ employer conflict (Department of Labor), what are the most-updated policies and regulations for working VISA/ immigration (USCIS), and get direct responses from the officials before you kickstart.
          .btn.blue Register
        .col-sm-7
          .eventCover(:style="{'background-image':`url(${event.cover})`}" style="background-image: url(https://lh3.googleusercontent.com/Z1bZXTqxs1XisADTjyREIsHdQ1JYHLyC0zL5WMeq5azeqxv9CphKGPE6nQqa1b6RiRRn9roKIjYtbpHkbxcAJ5eRZnfj1v_zRlCIWCJA6aSC95PziJPxn9xX5VR7PC-3H7UDlNGmTxkQbuEcv3sHHB3CfxV950dt847aaXFEABUwWPYj2o2dPw-3KyTA96enAcDHWWF7sf6jr8eX9HSmDWKgs2AwlFgYquuAEMiE4TJQx6ZbYdOI5Za5OeS6qbUO_-V16ztZ6Qp5-V6KWlNJXSOBJnfW87IlIjwZv9i1LrgRPhdPxgP6Q6Npdu8XUWWqlFcXz9RSa6tQA6FQ2woS95O1DeGKw6Npc2rfllfxGwIuUm96r5jiWhodXIF0Gs0cT2Hx93AvIdOqkFw6kuUtzg2JWyCUfL5GXuxyambdR4Iboe-cdVlzAc7tB6B4NyMOt655KTM2IeY__FV5Rx_qecL3MoZ1IgGtIn9-4OVWVp2RRO8ex4CkuFrBOopDfjT9I1opGnmqGqThjVZWdch7mYw9V9fXQYezEzBPBXuYDxz2feJAOnEkPuRvbzbQ264g5oZCMlNkOknbwM9Vquq4JXx5cutqpLqXFlT0wuqpjcSz9ugTAopFhwnZ2_0ZW2coGOxduh13lGodKD78pjhZMCzsm_XF9BuBnSE=w1370-h913-no)")
  section.sectionSchedule.blue
    .container
      .row
        .col-sm-4
          h2 SCHEDULE
          hr
          p Starting any journey with the end in mind makes perfect sense. For more detail please check below.
          .btn.white.ghost More Detail
        .col-sm-8
          ul.timeline
            .datetag Sep.7
            li(v-for="(p,pid) in event.program")
              .time {{p.start_datetime.split(' ')[1].slice(0,5)}}- {{p.end_datetime.split(' ')[1].slice(0,5)}}
              .content( @click="toggle('#des'+pid)")
                h4 {{p.title}}
                  span(v-if="p.description")   ▾
                p(v-html="p.description",:id="'des'+pid")
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
  section.sectionGuest.white
    .container
      .row
        .col-sm-6
          h2 FEATURED<br>GUESTS
          p Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017.
        .col-sm-12
          ul.row.speakers
            li.col-sm-4(v-for="speaker in event.speaker")
              .headshot(:style="{'background-image':`url(${speaker.headshot})`}" style="background-image: url(https://i.vimeocdn.com/portrait/6198925_300x300)")
              h4.place ​{{speaker.company}},  {{speaker.position}}
              h3.name {{speaker.name}}
  section.sectionPhotos.white
    .container
      .row
        .col-sm-12
          .row
            .col-sm-3
              h2 Event<br>Photos
              hr
            .col-sm-6
              p Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017.
              .btn.red View Events
          br
          br
          br
    .container-fluid
      .row.rowPhotos
        .col-sm-8
          .photoBlock.left(style='background-image:url(https://lh3.googleusercontent.com/Ic7hKXDc4puv_7Ul-xq9swhmco6nhNwaA-KcxhQX7DebQQgIA5iLtcQDluNVpZ35zQ7h-HkHrJVSthrstfkUiXqbD1S8_r1BNOFSY_TbzJ6sQT1sSbBoC4QQ4mARUfCikLWhGOv8jWdtiIz4UIdISKbhVCwVVly4_oEDCraF5FXabQxnNt0hCaPjDHI4SAbwS4pGe9np887rmtxGdmTpkjgTuQh-zW4D0pU6NaPfoNfI8QWX8rb0MjSp8g0lZyuf7bKue67T4aWZAPUKmoJWPSq5HEA49ESn_os8otvHGET1ImDG0zsCyk11cPbzjDwqzBw9vPBSIzRBh7gXQ2jSYgYVdWDdnmmxFdXfxRjZc9lkbPQsjMV6BjT4Vf4GT-kRH4tY8mvyXfOtlhjRZ_2GkpZA9BGOU374qdQ_qOELSTe_GO7jtra_hOvtof3nd14hMclQFgSpUE7oeV3zym858IElyRW8OKZq-74fEE6-Kvc6Zqs4e6K3CQeDjyBQXlWyKo0eEmV5gDny8hVdsCIS6DBNCP-4twWrG2fXclLB9dQIEeyB481Mk54GaYSmH0a7wg5cD_pXiSNwVnwTdtgh1uQDS72cqGT21QwhThCZ2PY0FApj1ZWqxwNyW6hpXbJu_sGt4BU-KBK-dfvy0yJdr_qnvL6ls1DCJjc=w1370-h913-no)')
            .content
              h3 See More
        .col-sm-4
          .row
            .col-sm-5.red
            .col-sm-7

              .photoBlock(style='background-image:url(https://lh3.googleusercontent.com/GuJq9yBO6-MFRazHjHVxXvCdSnQzy0Dz6fuUpmuxIwXUqPET_5aw5qLea2BCL6q84cN3GhvApE3KD1VizNEkiGVCLrTkge15SMiDznTR-DIJB5XI2KptxCF74Aw5mv5sHxIy1PX6LLempzvqbFvauI8a0XAnnoK6uoP6JiIMbO682mTTfAWp94WUbVmfN1et6LeHDp-wP4l5Dcboteo-AqnGdS6_AYCDcClNBS-35sTiR9l7aiVmIH8WLiKjf9P3DFFXCNtTT3DnrQT71vwRUXjB4PDxdbS2pXim4MZL3nnC0y1QMKk4x1igWQHSikQKTc1bobpNCA65Ui2ovSsM6AH9fbz4aD80nAiOI_O1Bn4Fre42MVss5_XZhgvPrRG77Zzo8GnobDQ38LKdZFG92MHKOLWQeaTCdUjPE6tDSdya7JmPQ0KQr50cudxppoK-J_Zd2hfvNAYFv9m0JbJC4tpKg1tBt2paZqDI3fSjkMH7TRAmEjn36kponJhrIA0H7MTBXrDOc9P8d0ZWSgzHRlOVSUj_D-cRHGUZBoATYKfrHeVC0C2xunQfGejzAybd_kapDQoTiH40EBSjLzQu3C69F00PMvCKDJOvz1saMpDwKs_fuUKgt3L2iqth4zsftavBjUj7IUmHGPf4g2J0_oQ755V72RpTxB8=w1370-h913-no)')
                .content
                  h3 See More
            
          .row
            .col-sm-7
              .photoBlock(style='background-image:url(https://lh3.googleusercontent.com/nY4ZmIQBCm_2cS1A0XepKm9abck6YO6piMLwEutm06Ygk9Aw5F9NzG8PvujfP5Tv-MOTfE1AECecmtBtB1YOAixtgr624QHhOL8cH5oIRlYpjCCDI-6OCgh_ImPYRrquRVEv2V9PieplZSptCJn_iJ_SbtP4iFlfRNDkrPU0Y-XTmoNYwp366xFaRQt_4DqXIb7hVB0I6PGvlu70RXBY6YELICCk3I7XzzZyyYFSTCM27e_fEJlOwUvAYI5aqHghb8EYTfX-Ty_f09Rqia4MV_4VZd2xOoM1st-H6LsOtZYBzDzlUIwpXV7zWQIgn5SOQodeaIaXbZ2MFibyyAKbT2TwddtoSfK8joLNRRyChqXDSBA0lmE0_uAdIlQS6aa4s2Y7fn0G26ILlu-zr88avfrj-QQVs8FWf1Xjwa5MAJV_6_FESzo_T6OVoqT370O9DojE4t2MZWF5bVOo0fJxJNf4vRWFskXasZ3XpsapEC_IdHuI0t-XlCgbAm88pt-FfQiwUNE003wID9Nqfv-8VFBwou8dKZYGGoSpJu6s_D92owhoA1kcAKivjQap6Mmv6e6sgk3kRogLxp4TzaPaNldSbBDk1lpxGZQJu7eOf6KFvB_1lb39zukXa23FI3_jmgs_uU0Cr3pACt9eJjysO43QLSSeT3x8CT4=w586-h390-no)')
                .content
                  h3 See More
            .col-sm-5
        
          .row
            .col-sm-12
              .photoBlock(style='background-image:url(https://lh3.googleusercontent.com/FeM9Sq_Eu9os3QNIZHx2zbRvaDZqzprqekFTnSJ_Iqax4J6E6xJtoIku6diRLlgHujmqKmJXFpS2gKawB1KosOcyioepsHhpEdL4sW85tKSqsyOIQBUIuxqYJyVmvd4-YjjyAYj6AEuag0CtKsF4hPMlmT0gE8mOl1U_yyZk52B2NPtF6WEE6_qj53kuaNkkNWM1Yz81XXlABTBTHWxyO3wLRlReHfuCuDUvOVU6YQIs-52AvbhzsZitsyo0Xv-CrcaCzep29ELjftfqE2eelC3AJP4uaif1drU-qxI6drJySKzN89eTbScODlQngmNgkPfIGkvK6gCqlso6EKiBGKjbJf23aUKLvqviIt_0DhejLf1Tv3BjZwCRR-PgWELGkt_Okwxz1KOE5ap9D1ALeMdZ-GOb10O09lm3NcyDKVGHca8EDzdWJXJHfm0Wte9zbiSmvFGr-qcEGyy9XGLJ_pLRRL9BbqU0GH3V3_X5qygLjjG6PRL_Uzzud-Ak88IaC-zELfHxRSPx-DI_IZVIMM96j1gR5Gpt-riauXRbN8mulRZ8j-1jTqp2g1lIlbRYYhpMnDbkPIm54Sv7en0KkVzoIqaPUE5lBHqGNvcPkfZAxWJZWzg5jtTwaXeKc3LYFQBvURDNeO8doSh7eBithcwIxcpRALj36_w=w586-h390-no)')
                .content
                  h3 See More
  section.sectionOranizers.white
    .container
      .row
        .col-sm-5
          h2 Organizers  &<br>Co-organizers
          hr
          p Industry-trending brands that have worked with n3xt con for positive impact.
        .col-sm-7
          ul.agencies
            li.logo(v-for="i in 3")
              a(href="http://vgsa.usc.edu/")
                img(src="http://vgsa.usc.edu/wp-content/uploads/2016/03/vgsanew-1.png")

  section.sectionRegist.grey
    .container
      .row
        .col-sm-5
          h2 Registration
          hr
          p Feel free to contact us for any questions,  recommendations, speaking engagements, and inquiries about sponsorship and partnership. .col-sm-7
          .btn.blue Contact us
        .col-sm-7
          iframe(src="https://www.eventbrite.com/tickets-external?eid=39386599379&ref=etckt")

  section.sectionRecommend      
    .container-fluid
      .row
        .col-sm-6.photoBlock(style="background-image: url(https://lh3.googleusercontent.com/C51Q1loNuouObe-HOh89iB_Z0OuY9Bp2xAvT6Q9mq9hScldvey625lxNCNL2Kodm7DrXDp0AmDFG3WNrroPtd6xi4BF-zdJUfo86isYhYhysSoomOT_Fr5w5iIDw0FKcgjKU0QCblek2TWIrp3wEZjZ2CFb1JzWR3uVefJ7QyPF2iSDcRfYGIp67Czm8HTul9ZUvYXYVzw3wPj7e8bUaIhdrv57rZ96LYlHERhKHKbhM2chac1nt2anOJWM46cVyeQ30YVowOrhrGqBC5s44QwiKwRfFa1NNApR3KgRuB8igLRS8oBqXKKgZW7w5YQB32gdzJq35Q6Qsgbhl962t9grEahPT5rVUnINtT3UCkBVaaNazWmsa4AM_swgDc8JlmgdqXNvSRdpe0ljIeyccN8t008FFDpsGpWDDckSA_SdXM89w6XThKaekzE_cLy9oXpPzd20Wg1a4-iRmNPDBDPNvtOVx9hQhEgG2gXGNPa5NYQuJ5gNWyKXMUl0BREUuiMZl1_qHmBqKxzVMNrnEwdl7gZV0DYZdNQIqG9WyqOHzXpW01pgtRWhct5juq_nnDp-WUi5cU83HglMOHgTuO9crkrHe04ems7H2j1Rgl8jUDFUmqb2AYdht98snoHYUgOW1W26devocyqcxcviQ1KsX5_jcpynXnJ4=w477-h318-no)")
          .content
            hr
            h3 Previous Event
            h2 Building United Communities

        .col-sm-6.photoBlock(style="background-image: url(https://lh3.googleusercontent.com/Ic7hKXDc4puv_7Ul-xq9swhmco6nhNwaA-KcxhQX7DebQQgIA5iLtcQDluNVpZ35zQ7h-HkHrJVSthrstfkUiXqbD1S8_r1BNOFSY_TbzJ6sQT1sSbBoC4QQ4mARUfCikLWhGOv8jWdtiIz4UIdISKbhVCwVVly4_oEDCraF5FXabQxnNt0hCaPjDHI4SAbwS4pGe9np887rmtxGdmTpkjgTuQh-zW4D0pU6NaPfoNfI8QWX8rb0MjSp8g0lZyuf7bKue67T4aWZAPUKmoJWPSq5HEA49ESn_os8otvHGET1ImDG0zsCyk11cPbzjDwqzBw9vPBSIzRBh7gXQ2jSYgYVdWDdnmmxFdXfxRjZc9lkbPQsjMV6BjT4Vf4GT-kRH4tY8mvyXfOtlhjRZ_2GkpZA9BGOU374qdQ_qOELSTe_GO7jtra_hOvtof3nd14hMclQFgSpUE7oeV3zym858IElyRW8OKZq-74fEE6-Kvc6Zqs4e6K3CQeDjyBQXlWyKo0eEmV5gDny8hVdsCIS6DBNCP-4twWrG2fXclLB9dQIEeyB481Mk54GaYSmH0a7wg5cD_pXiSNwVnwTdtgh1uQDS72cqGT21QwhThCZ2PY0FApj1ZWqxwNyW6hpXbJu_sGt4BU-KBK-dfvy0yJdr_qnvL6ls1DCJjc=w1370-h913-no)")
          .content
            hr
            h3 Next Event
            h2 Building United Communities
  section_footer


</template>

<script>
import slideIn from '../components/slideIn'
import section_footer from '../components/section_footer'

export default {
  props: [
    'id'
  ],
  components: {
    slideIn,section_footer
  },
  data(){
    return {
      event: null
    }
  },
  mounted(){
    axios.get(`/api/event/${this.id}`).then(res=>{
      this.event=res.data
      this.event.speaker = JSON.parse(this.event.speaker)

      this.event.speaker.forEach((id,index)=>{
        axios.get("/api/speaker/"+id).then(res2=>{
          Vue.set(this.event.speaker,index,res2.data)
          
        })
      })
      Vue.nextTick(()=>{
        this.event.program.forEach((p,pid)=>$("#des"+pid ).slideUp() )
      })
    })
  },
  methods:{
    toggle(sel){
      console.log(sel)
      $(sel).slideToggle(0)
    }
  }
}
</script>

<style>

</style>
