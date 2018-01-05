<template lang="pug">
.manage_speaker_list
  .container
    .row
      .col-sm-12
        h1 Speaker List Manage
        .btn-group
          router-link.btn.btn-default(to="/manage/event" :class="{active: $route.path=='/manage/event'}") Events
          router-link.btn.btn-default(to="/manage/speaker" :class="{active: $route.path=='/manage/speaker'}") Speakers
          router-link.btn.btn-default(to="/manage/agency" :class="{active: $route.path=='/manage/agency'}") Agencies
          router-link.btn.btn-default(to="/manage/post" :class="{active: $route.path=='/manage/post'}") Posts
        hr
      .col-sm-12
        .panel.panel-default
          .panel-heading Speaker List
          .panel-body
            router-link.btn.btn-primary(to="/manage/speaker/new") + Add New Speaker
            input.forma-control(
              v-model="keyword", 
              placeholder="enter keyword...",
              list="speakerlist")
            datalist#speakerlist
              option(:value="speaker.name" v-for="speaker in sortedSpeaker")
            br
            ul.list-group
              .row
                .col-sm-12
                  
                .col-sm-4(v-for = "(speaker,spid) in filteredSpeaker", style="height: 80px")
                  .row
                    .col-sm-3
                      img(:src="speaker.headshot", style="width: 100%")
                    .col-sm-9
                      h4 {{spid+1}} | {{speaker.name}}
                        router-link.btn.btn-primary.pull-right(:to="'/manage/speaker/'+speaker.id") Edit
                
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
