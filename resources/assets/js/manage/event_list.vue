<template lang="pug">
div.manage_event_list
  .container
    .row
      .col-sm-12
        h1 Event List Manage
        hr
      .col-sm-12
        .panel.panel-default
          .panel-heading Event List
          .panel-body
            ul.list-group
              li.list-group-item(v-for = "(event,eid) in events")
                .row
                  .col-sm-2
                    img(:src="event.cover", style="width: 100%")
                  .col-sm-10
                    h4 {{eid+1}} | {{event.title}}
                      router-link.btn.btn-primary.pull-right(:to="'/manage/event/'+event.id") Edit
                    p.disabled {{event.start_datetime}} - {{event.end_datetime}}
              li.list-group-item
                router-link.btn.btn-default(to="/manage/event/new") + Add New Event

      .col-sm-12
        h1 Speaker List Manage
        hr
      .col-sm-12
        .panel.panel-default
          .panel-heading Speaker List
          .panel-body
            
            br
            input.form-control(
              v-model="keyword", 
              placeholder="enter keyword...",
              list="speakerlist")
            datalist#speakerlist
              option(:value="speaker.name" v-for="speaker in sortedSpeaker")
            br
            ul.list-group
              .row
                .col-sm-4(v-for = "(speaker,spid) in filteredSpeaker", style="height: 80px")
                  .row
                    .col-sm-2
                      img(:src="speaker.headshot", style="width: 100%")
                    .col-sm-10
                      h4 {{spid+1}} | {{speaker.name}}
                        router-link.btn.btn-primary.pull-right(:to="'/manage/speaker/'+speaker.id") Edit
              li.list-group-item
                router-link.btn.btn-default(to="/manage/speaker/new") + Add New Speaker


      .col-sm-12
        h1 Post List Manage
        hr
      .col-sm-12
        .panel.panel-default
          .panel-heading Post List
          .panel-body
            br
            router-link.btn.btn-default(to="/manage/post/new") + Add New Speaker
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
  mounted(){
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
