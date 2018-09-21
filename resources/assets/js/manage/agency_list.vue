<template lang="pug">
.manage_speaker_list
  .container
    .row
      .col-sm-12
        h1 Agency List Manage
        .btn-group
          router-link.btn.btn-default(to="/manage/event" ,:class="{active: $route.path=='/manage/event'}") Events
          router-link.btn.btn-default(to="/manage/speaker" ,:class="{active: $route.path=='/manage/speaker'}") Speakers
          router-link.btn.btn-default(to="/manage/agency" ,:class="{active: $route.path=='/manage/agency'}") Agencies
          router-link.btn.btn-default(to="/manage/post" ,:class="{active: $route.path=='/manage/post'}") Posts
        hr
      .col-sm-12
        .panel.panel-default
          .panel-heading Agency List
          .panel-body
            router-link.btn.btn-primary(to="/manage/agency/new") + Add New Agency
            input.forma-control(
              v-model="keyword", 
              placeholder="enter keyword...",
              list="agencylist")
            datalist#agencylist
              option(:value="agency.name" v-for="agency in sortedagency")
            br
            br
            ul.list-group
              .row
                .col-sm-12
                  
                .col-sm-4(v-for = "(agency,spid) in filteredAgency", style="height: 80px")
                  .row
                    .col-sm-3
                      img(:src="agency.logo", style="width: 100%")
                    .col-sm-9
                      h4 {{spid+1}} | {{agency.name}}
                        router-link.btn.btn-primary.pull-right(:to="'/manage/agency/'+agency.id") Edit
                
</template>

<script>
import Axios from 'axios'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      posts: [],
      keyword: ""
      
    }
  },
  components:{
  },
  created(){
    Axios.get("/api/speaker").then((res)=>{
      this.speakers = res.data
    })
    Axios.get("/api/post").then((res)=>{
      this.posts = res.data
    })
    
  },
  computed:{
    ...mapState(['agencies']),
    sortedAgency(){
       return this.agencies
        .slice()
        .sort((a,b)=>{
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        } )
    },
    filteredAgency(){
      return this.sortedAgency.filter(agency=>agency.name.toLowerCase().indexOf(this.keyword.toLowerCase())!=-1)
       
    }
  }
}
</script>

<style>

</style>
