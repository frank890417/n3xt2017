<template lang="pug">
.pageIndex
  section.sectionHero.blue
    video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container
      .row
        .col-sm-12
          h1 Unleash<br>the Future.
          h4 SOCAL'S FAST GROWING TECH COMMUNITY WITH LA SPIRIT
          hr
          h5 FOR UPDATES & EXCLUSIVE OFFERS
          .btn.red Subscribe
          ul.numbers
            li 
              .title Attendies
              .number 500+
            li 
              .title Speakers
              .number 40+
            li 
              .title Sessions
              .number 20+
            li 
              .title Pitch Teams
              .number 10+
  section.sectionCaption.red
    .container
      .row
        .col-sm-6 
          h3 
            span Connecting
            br
            span Infinity
          img(src="/img/s2_people.png")
        .col-sm-6
          h2 n3xtcon is a haven for creative authenticity.
          hr
          p We believe entrepreneurialspirit is an immutable individual trait that cannot be smothered. n3xt con’s missionis to establish an environment in which such spirit not only flourishes but inspires more people to make a long lasting impact in their lives and beyond.
          .btn.blue About us
  section.sectionLen.blue
    .container
      .row
        .col-sm-6 
          h2 Sees the future<br>through an<br>entrepreneurial lens
          hr
          p Our team consists of individuals from creative, business, technology, and science backgrounds, and it is our dream to expand our community with such diversity across the world.<br><br>On the one hand, we promote scalability while innovating on a global scale, but on the other hand, we want to emphasize the unlimited potential for any innovative problem-solving ideas in daily life.
          .btn.red About us
        .col-sm-6
          .block.blue
          img(src="/img/s2_people.png")

  section.sectionPlatform.blue
    .container
      .row
        .col-sm-6
        .col-sm-6 
          h2 A platform for industry insight, and the newest technology trends.
          hr
          p ​Each year, we host a variety of events including workshops, mentorship programs, networking events, mixers, and our annual national conference. In 2016 & 2017, we hosted one of the largest annual conferences in Southern California which attracted over 700 working professionals, startup founders, investors, and industry leaders
          .btn.red Explore Events
  section.sectionPhoto.red
    .container
      .row
        .col-sm-12
          h2 Event Photos
          hr

          h4  For  Young Entrepreneurs <br>&amp; Professionals
  section.sectionEvent.white
    .container
      .row
        .col-sm-6 
          h2 Featured Event
          hr
          h4 9/7/2017   THU.  6PM /  UCS EEB 132 
          .event
            h3 Building United Communities:<br>
              span.big Job and Professional Journey
          p Starting any journey with the end in mind makes perfect sense. However when it comes to career kickstarts, changes and promotions, it’s important to think about the embarkation point and plan from there. 
          .btn.red RSVP Now
        .col-sm-6 
          .block.blue
      
  section.sectionEvent.blue
    .container
      .row
        .col-sm-6 
          h2 Annual Timeline
          hr
          .event.purple
            h4 9/7/2017   THU.  6PM
            h2 WORKSHOP
            p Starting any journey with the end in mind makes perfect sense. However when it comes to career kickstarts.. 
          .btn.ghost.white RSVP Now
        .col-sm-6 
  section.sectionPartner.white.text-center
    .container
      .row
        .col-sm-12
          h2 STRATEGIC PARTNERS
        .col-sm-12
          img.logo(src="http://www.crosscamp.us/wp-content/uploads/2015/03/CrossCampus.png")
          img.logo(src="https://liaoyuanavatar.imgix.net/upload/feed/image/159911bb496-57ea9af32cb6a8ad7e63e2c1-a1412a8bb2bd8775?fit=max&w=960&h=600")
          img.logo(src="http://media.marketwire.com/attachments/201005/598031_Logo_300dpi_noline_nochinese.jpg")

  section.sectionContact.blue
    .container
      .row
        .col-sm-6
          h2 Contact us
          hr
          p Feel free to contact us for any questions,  recommendations, speaking engagements, and inquiries about sponsorship and partnership.
          .infos
            .email Email |  info@n3xtcon.com

            .call Call ​| (213) 536-1923
          
        .col-sm-6
          .form-group
            input.form-control
            input.form-control
            textarea.form-control
            .btn.red Send
  section.sectionCopyright.blue
    .container
      .row
        .col-sm-12
          p.text-center Copyright © 2017  |  n3xt con  |  Los Angeles, California<br>n3xt con is 501(c)(3) non-profit organization.
              
  </template>

<script>
  export default {
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>

<style lang="sass" scoped>
</style>

