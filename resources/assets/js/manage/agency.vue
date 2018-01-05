<template lang="pug">
  div.page_event_register(v-if="agency")
    .container
      .row
        .col-sm-12
          ol.breadcrumb
            li.breadcrumb-item 
              router-link(to="/manage/agency") Manage Agency List
            li.breadcrumb-item.active Edit
          h2(v-if="event_id") Edit- {{ strip_tags(agency.name) }}
            button.btn.btn-danger.pull-right(@click="deleteagency") Delete
            button.btn.btn-primary.pull-right(@click="updateagency") Save
            a.btn.btn-default.pull-right(
                    :href="'/manage/agency/'+agency.id",
                    target="_blank") View agency
            
          h2(v-else) New Agency - {{ strip_tags(agency.name) }}
            button.btn.btn-primary.pull-right(@click="updateagency") Save
          hr

        .col-sm-4
          el-form.panel.panel-primary(label-width="120px")
            .panel-heading Basic Infos
            .panel-body
              el-form-item(label="Name")
                el-input(v-model="agency.name")
              el-form-item(label="Link")
                el-input(v-model="agency.link")
              el-form-item(label="Logo")
                img(:src="agency.logo", style="width: 100%")
                el-input(v-model="agency.logo")
                  default_pic_selector( slot="append" @select_pic="select_pic_logo")


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
      agency: {
        name: "",
        link: "",
        logl: "",
        event_id: null,
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
      Axios.get("/api/agency/"+this.$route.params.id).then((res)=>{
        this.setagency(res.data)
      })

    }
  },
  computed: {
  },
  methods: {
    setagency(agency){
      // event.tag = JSON.parse(event.tag)
      this.agency = agency
    },
    deleteagency(){
      if (confirm("Are you sure to delete agency?")){
        Axios.post("/api/agency/"+this.$route.params.id,{
          _method: "DELETE"
        }).then((res)=>{
          alert("Delete Success!")
          this.$router.push("/manage/event")
        })
      }


    },
    select_pic_logo(obj){
      Vue.set(this.agency,"logo",obj.url)

    },
    updateagency(){
      if (this.$route.path=="/manage/agency/new"){
        Axios.post("/api/agency",{
          _method: "POST",
          ...this.agency          
        }).then((res)=>{
          this.setagency(res.data)
          alert("Create Success!")
        })
      }else{
        Axios.post("/api/agency/"+this.$route.params.id,{
          _method: "PATCH",
          ...this.agency
        }).then((res)=>{
          this.setagency(res.data)
          alert("Save Success!")
        })
      }
      store.dispatch("loadagencys");
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
