<template lang="pug">
div.manage_event_list
  .container
    .row
      .col-sm-12
        //- h1 Post List Manage
        manage_nav
        hr
      .col-sm-12
        .panel.panel-primary
          .panel-heading Post List
          .panel-body
            br
            router-link.btn.btn-default(to="/manage/post/new") + Add Post
            ul.list-group                 
              li.list-group-item(v-for = "(post,spid) in posts")
                .row
                  .col-sm-1
                    img(:src="post.cover", style="width: 100%")
                  .col-sm-11
                    h4 {{spid+1}} | {{post.title}}
                      router-link.btn.btn-primary.pull-right(:to="'/manage/post/'+post.id") Edit
    
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      events: [],
      speakers: [],
      posts: [],
      keyword: ""
      
    }
  },
  components:{
  },
  created(){
    Axios.get("/api/event").then((res)=>{
      this.events = res.data
    })
    Axios.get("/api/speaker").then((res)=>{
      this.speakers = res.data
    })
    Axios.get("/api/post").then((res)=>{
      this.posts = res.data
    })
    
  },
  computed:{
    sortedSpeaker(){
       return this.speakers
        .slice()
        .sort((a,b)=>{
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        } )
    },
    filteredSpeaker(){
      return this.sortedSpeaker.filter(speaker=>speaker.name.toLowerCase().indexOf(this.keyword.toLowerCase())!=-1)
       
    }
  }
}
</script>

<style>

</style>
