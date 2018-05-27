<template lang="pug">
  div.page_event_register(v-if="event")
    .container
      .row
        .col-sm-12
          ol.breadcrumb
            li.breadcrumb-item 
              router-link(to="/manage/event") Manage Event List
            li.breadcrumb-item.active Event Edit
          h2(v-if="event" ) Edit- {{ strip_tags(event.title) }}&nbsp;
            span
              span (
              span {{ event.draft?"Draft":"Published"  }}
              span )
              
            
            button.btn.btn-danger.pull-right(@click="deleteActivity") Delete
            button.btn.btn-primary.pull-right(@click="updateActivity") Save
            a.btn.btn-default.pull-right(
                    :href="getEventRoute(event)",
                    target="_blank") View Event
          h2(v-else) New Event - {{ strip_tags(event.title) }}
            button.btn.btn-primary.pull-right(@click="updateActivity") Save
          hr

        .col-sm-4
          .panel.panel-primary
            .panel-heading Basic Infos
            el-form.panel-body()
              .form-group
                labal.col-sm-3 Draft
                .col-sm-9
                  el-switch(v-model="event.draft")
                br
                br
              .form-group
                labal.col-sm-3 Type
                .col-sm-9
                  select.form-control(v-if="event"  v-model="event.type")
                    option(v-for="op in activityTypeOptions", :value="op.value") {{op.tag}}
                br
                br
              .form-group
                labal.col-sm-3 Title
                .col-sm-9
                  input.form-control(v-if="event" v-model="event.title")
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
                labal.col-sm-3 Custom Route
                .col-sm-9
                  input.form-control(v-model="event.routename",
                                    :placeholder="getEventRoute(event,{link: false})")
                br
                br
              .form-group
                labal.col-sm-3 Start Time
                .col-sm-9
                  el-form-item
                    el-date-picker(
                      v-model="event.start_datetime",
                      type="datetime",
                      placeholder="start time",
                      value-format="yyyy-MM-dd HH:mm:ss")

              .form-group
                labal.col-sm-3 End Time
                .col-sm-9
                  el-form-item
                    el-date-picker(
                      v-model="event.end_datetime",
                      type="datetime",
                      placeholder="end time",
                      value-format="yyyy-MM-dd HH:mm:ss")
              .form-group
                labal.col-sm-3 Cover
                .col-sm-9
                  img(:src="event.cover", style="width: 100%")
                  el-input(v-model="event.cover")
                    default_pic_selector( slot="append" @select_pic="select_pic_cover")

                br
                br
        .col-sm-8
          .button-group
            .btn(@click="panel='detail'"  ,:class="{'btn-primary':panel=='detail' }") Detail
            .btn(@click="panel='speaker'" ,:class="{'btn-primary':panel=='speaker' }") Speaker
            .btn(@click="panel='oganizer'" ,:class="{'btn-primary':panel=='oganizer' }") Organizers
            .btn(@click="panel='program'" ,:class="{'btn-primary':panel=='program' }") Program
            .btn(@click="panel='album'"   ,:class="{'btn-primary':panel=='album' }") Album
            //- .btn(@click="panel='organizer'"   ,:class="{'btn-primary':panel=='organizer' }") Organizer
          .panel.panel-default(v-show="panel=='detail'")
            .panel-heading Detail
            .panel-body
              .form-group
                labal.col-sm-3 Description
                .col-sm-9 
                  VueEditor.ve(
                    :id ="'description'",
                    v-model="event.description",
                    :useCustomImageHandler="true",
                    @imageAdded="handleImageAdded" )
                  br
                  br
                 
              .form-group
                labal.col-sm-3 Venue
                .col-sm-9
                  input.form-control(v-model="event.venue",
                                    placeholder="venue")
                br
                br
              .form-group
                labal.col-sm-3 Address
                .col-sm-9
                  input.form-control(v-model="event.address",
                                    placeholder="address")
                br
                br   
              .form-group
                labal.col-sm-3 Event Brite Link
                .col-sm-9
                  input.form-control(v-model="event.ticketlink",
                                    placeholder="paste eventbrite link")
                br
                br
              .form-group
                labal.col-sm-3 Album Link
                .col-sm-9
                  input.form-control(v-model="event.album_link",
                                    placeholder="paste album link")
                br
                br
              //.form-group
                labal.col-sm-3 註冊資訊
                .col-sm-9
                  VueEditor.ve(:id ="'register_info'", v-model="event.register_info")
                  br
                  br
          .panel.panel-default(v-if="panel=='oganizer'")
            .panel-heading Organizers
            .panel-body
              .row
                .col-sm-12
                  .form-group(style="margin-top: 10px")
                    .container-fluid
                      .row(v-for="(agency,sid) in event.agencies")
                        .col-sm-12.list-group
                          .list-group-item
                            .row(v-if="agencies.find(o=>o.id==agency.id)")
                              .col-sm-2
                                img(:src="agencies.find(o=>o.id==agency.id).logo", style="width: 100%")
                              .col-sm-5
                                h4(style="width: 100%") {{sid+1}}. {{agencies.find(o=>o.id==agency.id).name}}
                              .col-sm-5
                                el-select(v-model="agency.type")
                                  el-option(v-for="type in agencytypes", :label="type.label",:value="type.value")
                                .btn.btn-danger.pull-right(@click="event.agencies.splice(sid,1)") -
                                
                  .form-group
                    .row
                      .col-sm-12
                        .col-sm-6
                          input.form-control( list = "agencies", v-model="temp_agency_name")
                          datalist#agencies( v-if="agencies.length" )
                            option(v-for="agency in agencies" :value="agency.name") 
                        .col-sm-6
                          .btn.btn-primary.pull-right(@click="event.agencies.push({id: agencies.find(o=>o.name==temp_agency_name).id , type: 'organizer'});temp_agency_name=''") Add
                  
          .panel.panel-default(v-if="panel=='speaker'")
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
                         el-autocomplete.inline-input(
                              v-model="temp_speaker_name"
                              :fetch-suggestions="fetchSpeaker"
                              placeholder="Please enter speaker name",
                            @select="(item)=>{event.speaker.push(speakers.find(o=>o.name==item.value).id);temp_speaker_name=''}")
                        .col-sm-6
                          .btn.btn-primary.pull-right(@click="event.speaker.push(speakers.find(o=>o.name==temp_speaker_name).id);temp_speaker_name=''") Add

          .panel.panel-default(v-if="panel=='program'")
            .panel-heading Programs
            .panel-body
              .row(v-if="event.program && event.program.length")
                .col-sm-3
                  ul.list-group(v-for="(program,programId) in event.program", style="margin-top: 10px")
                    li.list-group-item(:class="{active: nowProgramId==programId}",
                                       @click="nowProgramId=programId") 
                      h4 {{programId+1}}. {{program.title}}
                        .btn.btn-danger.pull-right(@click="deleteProgram(program,programId)") -
                      h5 {{program.start_datetime}}
                .col-sm-9
                  .form-group(
                    v-if="event.program && event.program.length",
                    v-for="(program,programId) in [event.program[nowProgramId]]", 
                    style="margin-top: 10px")

                    .container-fluid
                      h4(style="width: 100%") {{program.title}}
                      .row.form-group
                        .col-sm-2
                          h5 Title
                        .col-sm-10
                          input.form-control(v-model="program.title", placeholder="Program Title")

                      .row.form-group
                        .col-sm-2
                          h5 Description
                        .col-sm-10
                          VueEditor.ve(
                            :id ="'program_description_'+programId", 
                            v-model="program.description"
                    :useCustomImageHandler="true",
                    @imageAdded="handleImageAdded" )                          
                      .row.form-group
                        el-form.col-sm-6(label-width="120px")
                          .row
                            el-form-item(label="Start datetime")
                              el-date-picker(
                                v-model="program.start_datetime",
                                type="datetime",
                                placeholder="start time",
                                value-format="yyyy-MM-dd HH:mm:ss")
                          .row
                            el-form-item(label="End datetime")
                              el-date-picker(
                                v-model="program.end_datetime",
                                type="datetime",
                                placeholder="end time",
                                value-format="yyyy-MM-dd HH:mm:ss")
                          .row
                            el-form-item(label="Speakers")
                              el-select(
                                multiple,
                                v-model="program.speakers"

                              )
                                el-option(v-for="sp in orderedSpeakers",
                                          :label="sp.name", :value="sp.id")
                      br
              .form-group
                .col-sm-12
                  .btn.btn-default.form-control(@click="newProgram") + Add Program
                  br
                  br
                  br
                  br
          .panel.panel-default(v-if="panel=='album'")
            .panel-heading Album
            .panel-body
              .form-group
                .row
                  .col-sm-12(v-for="(pic,picid) in event.album")
                    .row
                      .col-sm-9
                        .row
                          .col-sm-3
                            img(:src="pic.image", style="width: 100%;background-color: #eee;")
                          .col-sm-9
                            input.form-control(v-model="event.album[picid].image" ,placeholder="Picture url")
                            textarea.form-control(v-model="event.album[picid].caption", placeholder="Description")
                      
                      .col-sm-3
                        default_pic_selector(@select_pic="(obj)=>{event.album[picid].image=obj.url}")
                        .btn.btn-danger(@click="event.album.splice(picid,1)") Delete
                      .col-sm-12
                        hr
                  .col-sm-12
                    .btn.btn-primary(@click="event.album.push({image:'',caption:''})") + Add Photo

          .panel.panel-default(v-if="panel=='organizer'")
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
        type: "talksnetworking",
        title: "",
        description: "",
        place: "",
        draft: true,
        tag: [],
        speaker: [],
        agency: [],
        time_detail: "",
        register_info: "",
        cover: "",
        album: []
      },
      temp_speaker_name: "",
      temp_agency_name: "",
      activityTypeOptions: [
        {tag:'Conference',value:'conference'},
        {tag:'Talks & Networking',value:'talksnetworking'},
        {tag:'Event',value:'event'},
        {tag:'Mentorship',value:'mentorship'},
      ],
      agencytypes: [
        { label: "Organizer", value: "organizer" },
        { label: "Partner", value: "partner" },
        { label: "Sponsor", value: "sponsor" }
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
    fetchSpeaker(qs,cb){
      let result = this.speakers.map(o=>({value: o.name}))
                              .filter(n=>n.value.toLowerCase().indexOf(qs)!=-1)
      cb(result)
    },
    setEvent(event){
      if (event.tag ){
        event.tag = JSON.parse(event.tag)
      }
      if (event.speaker){
        event.speaker = JSON.parse(event.speaker)
      }
      if (event.agencies){
        event.agencies = JSON.parse(event.agencies)
        if (event.agencies.length>0 && typeof event.agencies[0] != 'object'){
          event.agencies =  event.agencies.map(id=>({id,type: "organizer"}) )
        }
      }else{
        event.agencies = []
      }
      if (!event.album){
        event.album=Array.from({length: 4},()=>({image: "",caption: ""}))
      }else{
        event.album = JSON.parse(event.album)
      }
      if (!event.speaker){
        event.speaker=[]
      }
      event.program.forEach(p=>{
        p.speakers = JSON.parse(p.speakers)
      })
      // console.log(event.album)

      this.event = event
      this.$set(this.event,"draft",this.event.draft?true:false)
    },
    deleteActivity(){
      if (confirm("Are you sure to delete event?")){
        Axios.post("/api/event/"+this.$route.params.id,{
          _method: "DELETE"
        }).then((res)=>{
          this.$message.success("Delete Success!")
        })
      }

    },
    select_pic_cover(obj){
      this.event.cover = obj.url
    },
    updateActivity(){
      //
      let eventClone = JSON.parse(JSON.stringify(this.event))
      eventClone.program.forEach(p=>p.speakers = JSON.stringify(p.speakers)) 


      if (this.$route.path=="/manage/event/new"){

        Axios.post("/api/event",{
          _method: "POST",
          ...eventClone,
          
        }).then((res)=>{
          // this.setEvent(res.data)
          this.$message.success("Create Success!")
          // alert("Create Success!")
        })
      }else{
        Axios.post("/api/event/"+this.$route.params.id,{
          _method: "PATCH",
          ...eventClone
          
        }).then((res)=>{
          // this.setEvent(res.data)
          this.$message.success("Save Success!")
        })
      }
      

    },
    newProgram(){
      
      Axios.post("/api/program",{
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
          this.$message.success("delete program Success!")
          this.event.program.splice(pid,1)
        })
      }
    }
  },
  computed: {
    ...mapState(['speakers','agencies']),
    nowProgram(){
      return this.event.program[this.nowProgramId]
    },
    orderedSpeakers(){
      return this.speakers.slice().sort((a,b)=>a.name>b.name?1:-1)
    }

  },
  watch: {
    // "event.start_datetime": function(){
    //   this.event.program.forEach(
    //     program=>{
    //       if (program.start_datetime=="" || !program.start_datetime){
    //         program.start_datetime=this.event.program.start_datetime
    //       }
    //     }
    //   )
    // }
  }
}
</script>

<style>
label{
  text-align: right
}
</style>
