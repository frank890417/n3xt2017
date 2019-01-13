<template lang="pug">
div.manage_event_list
  .container
    .row
      .col-sm-12
        //- h1 Event List Manage
        manage_nav
        hr
      .col-sm-12
        .panel.panel-primary
          .panel-heading Event List
          .panel-body
            ul.list-group
              li.list-group-item(v-for = "(event,eid) in allevents")
                .row
                  .col-sm-2
                    img(:src="event.cover", style="width: 100%")
                  .col-sm-10
                    h4 {{(event.start_datetime||'').split('-')[0]}} {{ getDurationText(event.start_datetime,event.end_datetime) }}
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
  created(){
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
