<template lang="pug">
.page.pageBlog
  section.sectionHero.blue
    //img.mountain(src="/img/mountain.svg", :style="{transform: `translateY(${scrollTop/10}px)`}")
    //video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container
      .row
        .col-sm-12
          h2 Blog
        .col-sm-12
          img(:src="slickPost.cover")
          h3 {{slickPost.title}}
          p {{slickPost.content.slice(0,40)}}
      .row
        .col-sm-12(v-for="post in posts")
          router-link(:to="getPostRoute(post)")
            img(:src="post.cover", style="width: 100%")
            h2 {{ post.title }}
            p {{ strip_tags(post.content).slice(0,200) }}
            br
            br
  section_footer
</template>

<script>
import {mapState} from 'vuex'
export default {
  metaInfo: {
    title: 'Blog', // set a title
    titleTemplate: require("../data/common").default.titleTemplate
  },
  computed:{
    ...mapState(['posts']),
    slickPost(){
      return this.posts[0]
    }
  }

}
</script>

<style>

</style>
