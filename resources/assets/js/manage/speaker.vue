<template lang="pug">
  div.page_event_register(v-if="speaker")
    .container
      .row
        .col-sm-12
          ol.breadcrumb
            li.breadcrumb-item 
              router-link(to="/manage/event") Manage Event List
            li.breadcrumb-item.active Event Edit
          h2(v-if="event_id") Edit- {{ strip_tags(speaker.name) }}
            
            button.btn.btn-danger.pull-right(@click="deleteSpeaker") Delete
            button.btn.btn-primary.pull-right(@click="updateSpeaker") Save
          h2(v-else) New Event - {{ strip_tags(speaker.name) }}
            button.btn.btn-primary.pull-right(@click="updateSpeaker") Save
          hr

        .col-sm-4
          .panel.panel-primary
            .panel-heading Basic Infos
            .panel-body
              .form-group
                labal.col-sm-3 Name
                .col-sm-9
                  input.form-control(v-model="speaker.name")
                br
                br
              .form-group
                labal.col-sm-3 Company
                .col-sm-9
                  input.form-control(v-model="speaker.company")
                br
                br
              .form-group
                labal.col-sm-3 Position
                .col-sm-9
                  input.form-control(v-model="speaker.position")
                br
                br
              .form-group
                labal.col-sm-3 Email
                .col-sm-9
                  //- input.form-control(v-model="speaker.tag")
                  input.form-control(v-model="speaker.email")
                  
                br
                br
                br
           
              .form-group
                labal.col-sm-3 Headshot
                .col-sm-9
                  input.form-control(v-model="speaker.headshot")
                  img(:src="speaker.headshot", style="width: 100%")
                  default_pic_selector(@select_pic="select_pic_headshot")
                br
                br
        .col-sm-8
          .panel.panel-default
            .panel-heading Detail
            .panel-body
              .form-group
                labal.col-sm-3 Short Description
                .col-sm-9
                  textarea.form-control(v-model="speaker.description")
                  br
                  br
              .form-group
                labal.col-sm-3 Bio
                .col-sm-9
                  VueEditor.ve(:id ="'bio'", v-model="speaker.bio" )
                  br
                  br
              .form-group
                labal.col-sm-3 QA
                .col-sm-9
                  VueEditor.ve(:id ="'qa'", v-model="speaker.qa" )
                  br
                  br
              //.form-group
                labal.col-sm-3 註冊資訊
                .col-sm-9
                  VueEditor.ve(:id ="'register_info'", v-model="event.register_info")
                  br
                  br
              //.form-group
                labal.col-sm-3 Speaker
                .col-sm-9
                  .form-group(v-for="(speaker,speakerId) in event.speaker", style="margin-top: 10px")
                    .row
                      .col-sm-12
                        .container-fluid
                          h4(style="width: 100%") {{speakerId+1}}. {{speaker.name}}
                            .btn.btn-danger.pull-right(@click="event.speaker.splice(speakerId,1)") 刪除
                          .row.form-group
                            .col-sm-2
                              h5 姓名
                            .col-sm-10
                              input.form-control(v-model="speaker.name", placeholder="姓名")
                          .row.form-group
                            .col-sm-2
                              h5 照片
                            .col-sm-10(style="display: flex")
                              .imgs
                                img(:src="speaker.cover" , style="width: 80px")
                              .control(style="width: 100%")
                                input.form-control(v-model="speaker.cover", placeholder="照片網址")
                                default_pic_selector(@select_pic="(obj)=>{event.speaker[speakerId].cover=obj.url}")
                          
                          .row.form-group
                            .col-sm-2
                              h5 描述
                            .col-sm-10
                              VueEditor.ve(:id ="'speaker_description_'+speakerId", v-model="speaker.description")                          
                          .row.form-group
                            .col-sm-2
                              h5 其他
                            .col-sm-10
                              VueEditor.ve(:id ="'speaker_other_'+speakerId", v-model="speaker.other")                  
                          hr
                          br
                  .form-group
                    .col-sm-12
                      .btn.btn-default.form-control(@click="event.speaker.push({name: '',description:'',headshot:''})") + 新增
                      br
                      br
                      br
                      br
              //.form-group
                labal.col-sm-3 Program
                .col-sm-9
                  .form-group(v-for="(program,programId) in event.program", style="margin-top: 10px")
                    .row
                      .col-sm-12
                        .container-fluid
                          h4(style="width: 100%") {{programId+1}}. {{program.title}}
                            .btn.btn-danger.pull-right(@click="deleteProgram(program,programId)") 刪除
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
                            .col-sm-2
                              h5 Start datetime
                            .col-sm-10
                              input.form-control(v-model="program.start_datetime", placeholder="yyyy/mm/dd hh:mm:ss")                                       
                          .row.form-group
                            .col-sm-2
                              h5 End datetime
                            .col-sm-10
                              input.form-control(v-model="program.end_datetime", placeholder="yyyy/mm/dd hh:mm:ss")    
                          
                          hr
                          br
                  .form-group
                    .col-sm-12
                      .btn.btn-default.form-control(@click="event.program.push({title: '',description:'',start_datetime:'',end_datetime: ''})") + 新增
                      br
                      br
                      br
                      br
              //.form-group
                .row
                  .col-sm-12
                    label 相簿
                  .col-sm-12(v-for="(pic,picid) in event.album")
                    .row
                      .col-sm-9
                        .row
                          .col-sm-3
                            img(:src="pic.image", style="width: 100%")
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

            br
            br
          </template>

<script>

import default_pic_selector from '../default_pic_selector.vue'
import { VueEditor } from 'vue2-editor'
import Axios from 'axios'
import store from '../store'
export default {
  data() {
    return {
      event_id: this.$route.params.id,
      newTag: "",
      speaker: {
        name: "",
        company: "",
        position: "",
        qa: "",
        event_id: null,
        email: "",
        bio: "",

      },
      activityTypeOptions: [
        {tag:'Workshop',value:'workshop'},
        {tag:'Event',value:'event'},
        {tag:'Mentorship Program',value:'mentorship'},
      ]
    }
  },
  components:{
    VueEditor , default_pic_selector
  },
  mounted(){
    if (this.event_id){
      Axios.get("/api/speaker/"+this.$route.params.id).then((res)=>{
        this.setSpeaker(res.data)
      })

    }
  },
  computed: {
  },
  methods: {
    setSpeaker(speaker){
      // event.tag = JSON.parse(event.tag)
      this.speaker = speaker
    },
    deleteSpeaker(){
      if (confirm("Are you sure to delete speaker?")){
        Axios.post("/api/speaker/"+this.$route.params.id,{
          _method: "DELETE"
        }).then((res)=>{
          alert("Delete Success!")
          this.$router.push("/manage/event")
        })
      }


    },
    select_pic_headshot(obj){
      this.speaker.headshot = obj.url
    },
    updateSpeaker(){
      if (this.$route.path=="/manage/speaker/new"){
        Axios.post("/api/speaker",{
          _method: "POST",
          ...this.speaker          
        }).then((res)=>{
          this.setSpeaker(res.data)
          alert("Create Success!")
        })
      }else{
        Axios.post("/api/speaker/"+this.$route.params.id,{
          _method: "PATCH",
          ...this.speaker
        }).then((res)=>{
          this.setSpeaker(res.data)
          alert("Save Success!")
        })
      }
      store.dispatch("loadSpeakers");
    },
    // deleteProgram(program,pid){
    //   if (confirm("Are you sure to delete program?")){

    //     Axios.post("/api/program/"+program.id,{
    //       _method: "DELETE",
    //     }).then((res)=>{
    //       // this.setEvent(res.data)
    //       alert("delete Success!")
    //     })
    //     this.event.program.splice(this.pid,1)
    //   }
    // }
  }
}
</script>

<style>

</style>
