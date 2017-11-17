<template lang="pug">
  div.page_event_register(v-if="event")
    .container
      .row
        .col-sm-12
          ol.breadcrumb
            li.breadcrumb-item 
              router-link(to="/manage/event") Manage Event List
            li.breadcrumb-item.active Event Edit
          h2(v-if="event_id") Edit- {{ strip_tags(event.title) }}
            
            button.btn.btn-danger.pull-right(@click="deleteActivity") Delete
            button.btn.btn-primary.pull-right(@click="updateActivity") Save
          h2(v-else) New Event - {{ strip_tags(event.title) }}
            button.btn.btn-primary.pull-right(@click="updateActivity") Save
          hr

        .col-sm-4
          .panel.panel-primary
            .panel-heading Basic Infos
            .panel-body
              .form-group
                labal.col-sm-3 Type
                .col-sm-9
                  select.form-control(v-model="event.type")
                    option(v-for="op in activityTypeOptions", :value="op.value") {{op.tag}}
                br
                br
              .form-group
                labal.col-sm-3 Title
                .col-sm-9
                  input.form-control(v-model="event.title")
                br
                br
              .form-group
                labal.col-sm-3 SubTitle
                .col-sm-9
                  input.form-control(v-model="event.subtitle")
                br
                br
              .form-group
                labal.col-sm-3 Tag
                .col-sm-9
                  //- input.form-control(v-model="event.tag")
                  .form-inline
                    input.form-control(v-model="newTag")
                    .btn.btn-primary(@click="event.tag.push(newTag);newTag=''") + 
                  .btn.btn-default(v-for="(tag,tagid) in event.tag") {{tag}}
                    span(@click="event.tag.splice(tagid,1)") &nbsp;-
                  
                br
                br
                br
              .form-group
                labal.col-sm-3 StartTime
                .col-sm-9
                  datePicker(v-model="event.start_datetime", name="event_start_time", :config="{format: 'YYYY-MM-DD HH:mm:ss',useCurrent: true}")
                  //- input.form-control(v-model="event.start_datetime", placeholder="yyyy/mm/dd hh:mm:ss")
                br
                br
              .form-group
                labal.col-sm-3 EndTime
                .col-sm-9
                  datePicker(v-model="event.end_datetime", name="event_end_time", :config="{format: 'YYYY-MM-DD HH:mm:ss',useCurrent: true}")
                br
                br
              .form-group
                labal.col-sm-3 Cover
                .col-sm-9
                  input.form-control(v-model="event.cover")
                  img(:src="event.cover", style="width: 100%")
                  default_pic_selector(@select_pic="select_pic_cover")
                br
                br
        .col-sm-8
          .button-group
            .btn(@click="panel='detail'"  ,:class="{'btn-primary':panel=='detail' }") Detail
            .btn(@click="panel='speaker'" ,:class="{'btn-primary':panel=='speaker' }") Speaker
            .btn(@click="panel='program'" ,:class="{'btn-primary':panel=='program' }") Program
            .btn(@click="panel='album'"   ,:class="{'btn-primary':panel=='album' }") Album
            .btn(@click="panel='organizer'"   ,:class="{'btn-primary':panel=='organizer' }") Organizer
          .panel.panel-default(v-show="panel=='detail'")
            .panel-heading Detail
            .panel-body
              .form-group
                labal.col-sm-3 Description
                .col-sm-9
                  VueEditor.ve(:id ="'description'", v-model="event.description" )
                  br
                  br
              //.form-group
                labal.col-sm-3 註冊資訊
                .col-sm-9
                  VueEditor.ve(:id ="'register_info'", v-model="event.register_info")
                  br
                  br
          .panel.panel-default(v-show="panel=='speaker'")
            .panel-heading Speaker
            .panel-body
              .row
                .col-sm-12
                  .form-group(style="margin-top: 10px")
                    .container-fluid
                      .row(v-for="(speaker,sid) in event.speaker")
                        .col-sm-12.list-group
                          .list-group-item
                            .row(v-if="speakers.find(o=>o.id==speaker)")
                              .col-sm-2
                                img(:src="speakers.find(o=>o.id==speaker).headshot", style="width: 100%")
                              .col-sm-10
                                h4(style="width: 100%") {{sid+1}}. {{speakers.find(o=>o.id==speaker).name}}
                                  .btn.btn-danger.pull-right(@click="event.speaker.splice(sid,1)") -
                  .form-group
                    .row
                      .col-sm-12
                        .col-sm-6
                          input.form-control( list = "speakers", v-model="temp_speaker_name")
                          datalist#speakers(v-if="speakers.length")
                            option(v-for="speaker in speakers" :value="speaker.name") 
                        .col-sm-6
                          .btn.btn-primary.pull-right(@click="event.speaker.push(speakers.find(o=>o.name==temp_speaker_name).id);temp_speaker_name=''") Add
                  //.form-group
                    .col-sm-12
                      .btn.btn-default.form-control(@click="event.speaker.push({name: '',description:'',headshot:''})") + Add
                      br
                      br
                      br
                      br
          .panel.panel-default(v-show="panel=='program'")
            .panel-heading Programs
            .panel-body
              .row
                .col-sm-3
                  ul.list-group(v-for="(program,programId) in event.program", style="margin-top: 10px")
                    li.list-group-item(:class="{active: nowProgramId==programId}",
                                       @click="nowProgramId=programId") 
                      h4 {{programId+1}}. {{program.title}}
                        .btn.btn-danger.pull-right(@click="deleteProgram(program,programId)") -
                      h5 {{program.start_datetime}}
                .col-sm-9
                  .form-group(v-for="(program,programId) in [event.program[nowProgramId]]", style="margin-top: 10px")
                    .container-fluid
                      h4(style="width: 100%") {{program.title}}
                      .row.form-group
                        .col-sm-2
                          h5 Title
                        .col-sm-10
                          input.form-control(v-model="program.title", placeholder="姓名")

                      .row.form-group
                        .col-sm-2
                          h5 Description
                        .col-sm-10
                          VueEditor.ve(:id ="'program_description_'+programId", v-model="program.description")                          
                      .row.form-group
                        .col-sm-6
                          .row
                            .col-sm-3
                              h5 Start datetime
                            .col-sm-9
                              input.form-control(v-model="program.start_datetime", placeholder="yyyy/mm/dd hh:mm:ss")                                       
                        .col-sm-6
                          .row
                            .col-sm-3
                              h5 End datetime
                            .col-sm-9
                              input.form-control(v-model="program.end_datetime", placeholder="yyyy/mm/dd hh:mm:ss")    
                      
                      hr
                      br
              .form-group
                .col-sm-12
                  .btn.btn-default.form-control(@click="newProgram") + 新增
                  br
                  br
                  br
                  br
          .panel.panel-default(v-show="panel=='album'")
            .panel-heading Album
            .panel-body
              .form-group
                .row
                  .col-sm-12
                    label 相簿
                  .col-sm-12(v-for="(pic,picid) in event.album")
                    .row
                      .col-sm-9
                        .row
                          .col-sm-3
                            img(:src="pic.image", style="width: 100%;background-color: #eee;")
                          .col-sm-9
                            input.form-control(v-model="event.album[picid].image" ,placeholder="照片網址")
                            textarea.form-control(v-model="event.album[picid].caption", placeholder="描述")
                      
                      .col-sm-3
                        default_pic_selector(@select_pic="(obj)=>{event.album[picid].image=obj.url}")
                        .btn.btn-danger(@click="event.album.splice(picid,1)") 刪除
                      .col-sm-12
                        hr
                  .col-sm-12
                    .btn.btn-primary(@click="event.album.push({image:'',caption:''})") 新增照片

          .panel.panel-default(v-show="panel=='organizer'")
            .panel-heading Organizers
            .panel-body
              .form-group
                .row
                  .col-sm-12
                    label 
            br
            br
          </template>

<script>
import default_pic_selector from '../default_pic_selector.vue'
import { VueEditor } from 'vue2-editor'
import {mapState } from 'vuex'
import Axios from 'axios'
import store from '../store'
import datePicker from 'vue-bootstrap-datetimepicker'

export default {
  data() {
    return {
      event_id: this.$route.params.id,
      newTag: "",
      panel: "detail",
      nowProgramId: 0,
      event: {
        type: "activity",
        title: "",
        description: "",
        place: "",
        tag: [],
        speaker: [],
        time_detail: "",
        register_info: "",
        cover: "",
        album: []
      },
      temp_speaker_name: "",
      activityTypeOptions: [
        {tag:'Workshop',value:'workshop'},
        {tag:'Event',value:'event'},
        {tag:'Mentorship Program',value:'mentorship'},
      ]
    }
  },
  components:{
    VueEditor , default_pic_selector, datePicker
  },
  mounted(){

    store.dispatch("loadSpeakers");
    Axios.get("/api/event/"+this.$route.params.id).then((res)=>{
      this.setEvent(res.data)
    })
  },
  methods: {
    setEvent(event){
      event.tag = JSON.parse(event.tag)
      event.speaker = JSON.parse(event.speaker)
      if (!event.album){
        event.album=Array.from({length: 4},()=>({image: "",caption: ""}))
      }else{
        event.album = JSON.parse(event.album)
      }
      console.log(event.album)
      this.event = event
    },
    deleteActivity(){
      if (confirm("Are you sure to delete event?")){
        Axios.post("/api/event/"+this.$route.params.id,{
          _method: "DELETE"
        }).then((res)=>{
          alert("Delete Success!")
        })
      }

    },
    select_pic_cover(obj){
      this.event.cover = obj.url
    },
    updateActivity(){
      if (this.$route.path=="/manage/event/new"){
        Axios.post("/api/event",{
          _method: "POST",
          ...this.event
          
        }).then((res)=>{
          this.setEvent(res.data)
          alert("Create Success!")
        })
      }else{
        Axios.post("/api/event/"+this.$route.params.id,{
          _method: "PATCH",
          ...this.event
          
        }).then((res)=>{
          this.setEvent(res.data)
          alert("Save Success!")
        })
      }
      

    },
    newProgram(){
      
      Axios.post("/api/program/",{
        _method: "POST",
        event_id: this.$route.params.id,
        title: "",
        description: "",
      }).then((res)=>{
        console.log(res.data)
        this.event.program.push(res.data)
      })
      
    },
    deleteProgram(program,pid){
      if (confirm("Are you sure to delete program?")){

        Axios.post("/api/program/"+program.id,{
          _method: "DELETE",
        }).then((res)=>{
          // this.setEvent(res.data)
          alert("delete Success!")
          this.event.program.splice(pid,1)
        })
      }
    }
  },
  computed: {
    ...mapState(['speakers'])
  }
}
</script>

<style>

</style>
