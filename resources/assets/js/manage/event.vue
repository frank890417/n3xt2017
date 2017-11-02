<template lang="pug">
  div.page_event_register(v-if="event")
    .container
      .row
        .col-sm-12
          ol.breadcrumb
            li.breadcrumb-item 
              router-link(to="/activity") Manage Event List
            li.breadcrumb-item.active Event Edit
          br
          h2(v-if="event_id") Edit- {{ strip_tags(event.title) }}
            br
            button.btn.btn-danger.pull-right(@click="deleteActivity") Delete
            button.btn.btn-primary.pull-right(@click="updateActivity") Save
          h2(v-else) Add - {{ strip_tags(event.title) }}
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
                  input.form-control(v-model="event.start_datetime")
                br
                br
              .form-group
                labal.col-sm-3 EndTime
                .col-sm-9
                  input.form-control(v-model="event.end_datetime")
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
          .panel.panel-default
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
              .form-group
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
              .form-group
                labal.col-sm-3 Program
                .col-sm-9
                  .form-group(v-for="(program,programId) in event.program", style="margin-top: 10px")
                    .row
                      .col-sm-12
                        .container-fluid
                          h4(style="width: 100%") {{programId+1}}. {{program.title}}
                            .btn.btn-danger.pull-right(@click="event.program.splice(programId,1)") 刪除
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
                              input.form-control(v-model="program.start_datetime")                                       
                          .row.form-group
                            .col-sm-2
                              h5 End datetime
                            .col-sm-10
                              input.form-control(v-model="program.end_datetime")     
                          hr
                          br
                  .form-group
                    .col-sm-12
                      .btn.btn-default.form-control(@click="event.speaker.push({name: '',description:'',headshot:''})") + 新增
                      br
                      br
                      br
                      br
              .form-group
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
export default {
  data() {
    return {
      event_id: this.$route.params.id,
      newTag: "",
      event: {
        type: "activity",
        title: "",
        description: "",
        place: "",
        speaker: [],
        time_detail: "",
        register_info: "",
        cover: "",
        album: []
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
     Axios.get("/api/event/"+this.$route.params.id).then((res)=>{
      this.event = res.data
      this.event.tag = JSON.parse(this.event.tag)
    })
  },
  methods: {
    deleteActivity(){

    },
    select_pic_cover(obj){
      this.event.cover = obj.url
    },
    updateActivity(){
      Axios.post("/api/event/"+this.$route.params.id,{
        params: {
          _method: "POST",
          ...this.event
        }
      }).then((res)=>{
        // this.event = res.data
        // this.event.tag = JSON.parse(this.event.tag)
      })

    }
  }
}
</script>

<style>

</style>
