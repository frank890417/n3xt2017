<template lang="pug">
.manage_speaker_list
  .container
    .row
      .col-sm-12
        //- h1 Speaker List Manage
        manage_nav
        hr
      .col-sm-12
        .panel.panel-primary
          .panel-heading Speaker List Manage
          .panel-body
            .container-fluid
              .row
                .col-sm-10
                  el-input.forma-control(
                    v-model="keyword", 
                    placeholder="enter keyword...",
                    list="speakerlist")
                .col-sm-2
                  router-link.btn.btn-primary(to="/manage/speaker/new") + Add New Speaker
            datalist#speakerlist
              option(:value="speaker.name" v-for="speaker in sortedSpeaker")
            br
            br
            ul.list-group.mt-3
              .row     
                .col-sm-4.mt-2(v-for = "(speaker,spid) in filteredSpeaker", style="height: 80px")
                  .row
                    .col-sm-3
                      img(:src="speaker.headshot", style="width: 100%")
                    .col-sm-9
                      h4 {{speaker.id}} | {{speaker.name}}
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
      return this.sortedSpeaker.filter(speaker=>
        speaker.name.toLowerCase().indexOf(this.keyword.toLowerCase())!=-1 ||
        speaker.id==this.keyword
      )
       
    }
  }
}
</script>

<style>

</style>
