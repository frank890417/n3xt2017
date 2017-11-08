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
            ul.list-group
              li.list-group-item(v-for = "(speaker,spid) in speakers")
                .row
                  .col-sm-1
                    img(:src="speaker.headshot", style="width: 100%")
                  .col-sm-11
                    h4 {{spid+1}} | {{speaker.name}}
                      router-link.btn.btn-primary.pull-right(:to="'/manage/speaker/'+speaker.id") Edit
              li.list-group-item
                router-link.btn.btn-default(to="/manage/speaker/new") + Add New Speaker
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      events: [],
      speakers: []
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
    
  }
}
</script>

<style>

</style>
