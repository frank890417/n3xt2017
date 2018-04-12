<template lang="pug">
.page.pageConference
  section.sectionHero.blue
    .container
      .row
        .col-sm-7
          h2
        .col-sm-5
          h4 2018 June 16-17
          h1 n3xtcon 2018
          h3 ​SOCAL'S FAST GROWING TECH CONFERENCE WITH LA SPIRIT<br>PASADENA CONVENTION CENTER
          hr
          .btn(@click="scrollTo('.sectionRegistration')") Book Tickets!
  section.sectionAsk.white
    .container
      .row
        .col-sm-6
          h2 Why?
          hr
          p N3xt con 2018 brings together bright minds and visionaries to share ideas of innovation. Featuring a variety of themes including Humancentric Technology (bold), Omnipresence of Storytelling (bold), Frontier of Imagination (bold). Talk topics range from blockchain, brain-computer interface, AI, interactive media, to film production. <br><br>The conference provides an opportunity for attendees to get fresh perspective from industry leaders and futurists. Come, listen, get inspired and establish the network that may help you forge the path you have yet to discover.

        .col-sm-6
          img(src="https://lh3.googleusercontent.com/hDSociyRZSrrgk5s01ut6cOG5-GkNB4QGtdu_8Ck2I76Yl-nmKNX8YFiODToEGsu5UxBkYKcRjYFGyRdSXZmgk-EjTmZVn9Ad65O8nCxi7oi4fBJoGTbVQG7Gm8JLlikwN1SMMS9a2A8Q23aj938OI8zetUxMdxuKZTZtnmf7S012e_Ou4EiT7RtneUqCdoPPDVkwJa_aHMgqfEksATw2lYJFUyZTdGWxtOWg60GMupbyzc9ut514Kffv2KzAaEzEW32nxYr2ZHVaEPwnl7OzpKHsdA4jP1pkWNmW_HYaFMOwVo9juERqoX-xfxSX6KbBJfKRDhAbKUUfHIHMq0qpSyLwmP_rwoKfWXrzIGUSqrptO3J-9XySrmX0ODUrEx8cHHaws1OvvIvudn0u9pw-wrKxB0tsb_waJIzg3hMJyyZhcN8z1pXJmpmOsqBj5-By7etTNdI7Bqz2lV_ZEn0T63iJ26NmyoJ1jssdofR_akiHRmjnp1Dxx78FVDvKfGqlWGm32Et2AUEUzhiQP3h2z8DM_ykYUczW-bckID6p-5fG0rqpD6_QGSkGgAwXShkN4hokuR435pUu777Hss9h3LLcS0kM6LetBTNFsGVNsRu7DOtVlHiVYyPhG8b8Innufwrb8LYk9umfQepQKAuuZY2ZdgjEtGp0TI=w1406-h937-no")
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
          img(src="https://lh3.googleusercontent.com/hDSociyRZSrrgk5s01ut6cOG5-GkNB4QGtdu_8Ck2I76Yl-nmKNX8YFiODToEGsu5UxBkYKcRjYFGyRdSXZmgk-EjTmZVn9Ad65O8nCxi7oi4fBJoGTbVQG7Gm8JLlikwN1SMMS9a2A8Q23aj938OI8zetUxMdxuKZTZtnmf7S012e_Ou4EiT7RtneUqCdoPPDVkwJa_aHMgqfEksATw2lYJFUyZTdGWxtOWg60GMupbyzc9ut514Kffv2KzAaEzEW32nxYr2ZHVaEPwnl7OzpKHsdA4jP1pkWNmW_HYaFMOwVo9juERqoX-xfxSX6KbBJfKRDhAbKUUfHIHMq0qpSyLwmP_rwoKfWXrzIGUSqrptO3J-9XySrmX0ODUrEx8cHHaws1OvvIvudn0u9pw-wrKxB0tsb_waJIzg3hMJyyZhcN8z1pXJmpmOsqBj5-By7etTNdI7Bqz2lV_ZEn0T63iJ26NmyoJ1jssdofR_akiHRmjnp1Dxx78FVDvKfGqlWGm32Et2AUEUzhiQP3h2z8DM_ykYUczW-bckID6p-5fG0rqpD6_QGSkGgAwXShkN4hokuR435pUu777Hss9h3LLcS0kM6LetBTNFsGVNsRu7DOtVlHiVYyPhG8b8Innufwrb8LYk9umfQepQKAuuZY2ZdgjEtGp0TI=w1406-h937-no")
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
          .tag Theme
          h3 How technology drives <br>the entertainment industry

  section.sectionGuests.red
    .container
      .row
        .col-sm-2
          h2 Guests
          hr
        .col-sm-10
          .row
            .col-sm-3(v-for="i in 4")
  section.sectionSchedule.blue
    .container
      .row
        .col-sm-12
          h2 Program Schedule
          hr
        .col-sm-12
          ul.schedules
            li(v-for="i in 4")
              div
                h3.time 08:00-08:15
                h2.title How Technology Drives <br>the Entertainment Industry
                p.content Name…..<br>fdiogj iodfjg oidfjg i
              .head(:style="cssbg('https://n3xtcon.com/img/Speaker%20Pictures/Abe%20Forman-Greenwald.jpg')")

  section.sectionSpeakers.white
    .container
      .row
        .col-sm-12
          h2 Speaker
    .container-fluid.speakers
      .row
        a.col-sm-3(v-for="person in crews",
          :href="person.link")
          .person.photoBlock(:style="cssbg(person.headshot)")
            h3 {{person.name}}
            h4 
              span {{person.position}}
  section.sectionRegistration.grey
    .container
      .row
        .col-sm-5
          h2 Registration
          hr
          p Feel free to contact us for any questions,  recommendations, speaking engagements, and inquiries about sponsorship and partnership.
          router-link.btn.blue(to="/about#contact") Contact us
        .col-sm-7
          iframe(:src="`https://www.eventbrite.com/tickets-external?eid=${ eventbriteId }&ref=etckt`")

  section.sectionPartner.white
    .container
      .row
        .col-sm-12
          h2 Organizer
          hr
  
      .row
        .col-sm-12
          h2 Co-Organizer
          hr
  
      .row
        .col-sm-12
          h2 Partner Infos
          hr
  



</template>

<script>
import data_crew from "../data/crews.js"
export default {
  data(){
    return {
      speakers: [],
      crews: data_crew
    }
  }
}
</script>

<style lang="sass">

</style>
