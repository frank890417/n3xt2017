<template lang="pug">
.page.pageBlog
  section.sectionHero.blue
    //img.mountain(src="/img/mountain.svg", :style="{transform: `translateY(${scrollTop/10}px)`}")
    //video.bgVideo(src="http://taipeisoundscape.com/video/indexbgv_lower.mp4" autoplay muted loop)
    .container-fluid
      .row.row-cover(:style="cssbg(slickPost.cover)")
      .row
        .container
          .col-sm-12
            //- h2 Blog
            router-link.post.row(:to="getPostRoute(slickPost)")
              .col-info.col-sm-9.theme.white
                //- h3.eng {{ slickPost.title }}
                h2 {{ slickPost.title }}
                hr
                p {{ strip_tags(slickPost.content).slice(0,200) }}
                .btn.red Read More

  section.sectionPosts.blue
    .container
      .row
        .col-sm-12
          //- h3.eng People working with us
          h2 Posts
          hr  
      .row.row-posts
        slideIn.top.col-sm-4(v-for="post in posts")
          router-link.post(:to="getPostRoute(post)")
            .cover(:style="cssbg(post.cover)")
            .col-info.theme.white
              //- h3.eng {{ post.title }}
              h2 {{ post.title }}
              hr
              p {{ strip_tags(post.content).slice(0,200) }}
              .btn.red Read More

              
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
