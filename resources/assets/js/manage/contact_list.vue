<template lang="pug">
div.manage_contact_list
  .container
    .row
      .col-sm-12
        //- h1 Contact List Manage
        manage_nav
        hr
      .col-sm-12
        .panel.panel-primary
          .panel-heading Contact List
          .panel-body
            br
            router-link.btn.btn-default(to="/manage/post/new") + Add Post
            el-table(:data = "records | orderDate")
                el-table-column(prop="id" width="80")
                el-table-column(prop="name" width="100")
                el-table-column(prop="last_name" width="100")
                el-table-column(prop="email" width="200")
                el-table-column(prop="message" )
                el-table-column(prop="created_at" width="140")
                
            //- ul.list-group                 
            //-   li.list-group-item(v-for = "(record,spid) in records")
            //-     .row
            //-       .col-sm-1
            //-         img(:src="record.cover", style="width: 100%")
            //-       .col-sm-11
            //-         h4 {{spid+1}} | {{record.title}}
            //-           router-link.btn.btn-primary.pull-right(:to="'/manage/record/'+record.id") Edit
    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            url: "/api/contact",
            records: []
        }
    },
    created(){
        axios.get(this.url).then(res=>{
            this.records = res.data
        })
    },
    computed(){
        // orderedRecords(){
            // return this.records.sort((a,b)=>(   ))
        // }
    }
}
</script>

<style>

</style>
