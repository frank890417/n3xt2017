<template lang="pug">
.page.pageSpeaker
  section.sectionHero.blue
    //img.mountain(src="/img/mountain.svg", :style="{transform: `translateY(${scrollTop/10}px)`}")
    //video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container
      .row
        .col-sm-12
          h2 Speaker
  section_footer
</template>

<script>
export default {
  metaInfo: {
    title: 'Speaker', // set a title
    titleTemplate: require("../data/common").default.titleTemplate
  },
}
</script>

<style>

</style>
