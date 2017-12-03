<template lang="pug">
.page.pagePost
  section.sectionHero.white
    //pre(v-html="titles")
    .container.cover(:style="cssbg(post.cover)")


  section.sectionContent.white
    .container(v-if="post")
      .row
        .col-sm-12
          //- img(:src="post.cover")
          h2 {{post.title}}
          h3.date {{ getDateText( post.updated_at ) }} 
          hr
          p(v-html="post.content")


  section.sectionNav.blue
    .container-fluid
      .row
        .col-sm-6
          router-link.photoBlock(
            :style="cssbg(nav.pre.cover)",
            :to="getPostRoute(nav.pre)" ,
            v-if="nav.pre")
            .content
              hr
              h3 Previous Post 
              h2(v-html="nav.pre.title")
        .col-sm-6
          router-link.photoBlock(
            :style="cssbg(nav.post.cover)",
            :to="getPostRoute(nav.post)" ,
            v-if="nav.post")
            .content
              hr
              h3 Next Post 
              //h2 Building United Communities
              h2(v-html="nav.post.title")
      //.row
        .col-sm-12(v-for="post in posts")
          router-link(:to="'/post/'+post.title")
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
  props: [
    'title'
  ],
  metaInfo: {
    title: 'Blog', // set a title
    titleTemplate: require("../data/common").default.titleTemplate
  },
  computed:{
    ...mapState(['posts']),
    titles(){
      return this.posts.map(o=>this.strip_tags(o.title).replace(/\s/g, "_"))
    },
    post(){
      // console.log()
      return this.posts.find(o=> this.strip_tags(o.title).replace(/\s/g, "_").replace(/\?/g,"")==this.title )
    },
    nav(){
      let nowIndex = this.posts.map(o=>this.strip_tags(o.title).replace(/\s/g, "_") ).indexOf( this.title )
      let pre = this.posts[nowIndex-1]
      let post = this.posts[nowIndex+1]
      return {
        pre: pre,post: post
      }
    }
  }

}
</script>

<style>

</style>
