<template lang="pug">
div.manage_event_list
  .container
    .row
      .col-sm-12
        h1 Event List Manage
        .btn-group
          router-link.btn.btn-default(to="/manage/event" :class="{active: $route.path=='/manage/event'}") Manage Events
          router-link.btn.btn-default(to="/manage/speaker" :class="{active: $route.path=='/manage/speaker'}") Manage Speakers
          router-link.btn.btn-default(to="/manage/agency" :class="{active: $route.path=='/manage/agency'}") Manage Agencies
          router-link.btn.btn-default(to="/manage/post" :class="{active: $route.path=='/manage/post'}") Manage Posts
        hr
      .col-sm-12
        .panel.panel-default
          .panel-heading Event List
          .panel-body
            ul.list-group
              li.list-group-item(v-for = "(event,eid) in allevents")
                .row
                  .col-sm-2
                    img(:src="event.cover", style="width: 100%")
                  .col-sm-10
                    h4 {{ getDurationText(event.start_datetime,event.end_datetime) }}
                      span &nbsp;&nbsp;/&nbsp;&nbsp;{{event.type}}
                    h3 {{event.title}}
                      span.drafttag(v-if="event.draft") (Draft)
                      router-link.btn.btn-primary.pull-right(:to="'/manage/event/'+event.id") Edit
              li.list-group-item
                router-link.btn.btn-default(to="/manage/event/new") + Add New Event


     
</template>

<script>
import Axios from 'axios'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      speakers: [],
      posts: [],
      keyword: ""
      
    }
  },
  components:{
  },
  mounted(){
    this.$store.dispatch("loadEvents")
    Axios.get("/api/speaker").then((res)=>{
      this.speakers = res.data
    })
    Axios.get("/api/post").then((res)=>{
      this.posts = res.data
    })
    
  },
  computed:{
    ...mapState(['allevents']),
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

<style lang="sass?indentedSyntax">
  .drafttag
    padding: 5px 10px
    margin-left: 10px
    border-radius: 5px
    background-color: #eee
</style>
