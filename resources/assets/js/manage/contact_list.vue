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
            //- router-link.btn.btn-default(to="/manage/post/new") + Add Post
            el-table(:data = "records")
              el-table-column(prop="id" label="Id"  width="80")
              el-table-column(prop="name" label="Name" width="100")
              el-table-column(prop="last_name" label="Last_name" width="100")
              el-table-column(prop="email" label="Email" width="200")
              el-table-column(prop="message" label="Message" )
              el-table-column(prop="created_at" label="Created_at" width="140")
              el-table-column(fixed="right" prop="id" label="Function" width="100")
                template(slot-scope="scope")
                  el-button(@click="deleteRecord(scope.row)",type="danger") Delete
              
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
      this.loadRecords()
    },
    computed(){
        
    },
    methods: {
      loadRecords(){
        axios.get(this.url).then(res=>{
            this.$set(this,"records" ,res.data)
        })
      },
      deleteRecord(record){
        this.$confirm("Are you sure to delete this record?").then(()=>{
        axios.post("/api/contact/"+record.id,{
          _method: "DELETE",
        }).then((res)=>{
          // this.setEvent(res.data)
          this.$message.success("delete record Success!")
          this.loadRecords()
          // this.event.program=this.event.program.filter(p=>p.id != program.id)
        })
      })
      }
    }
}
</script>

<style>

</style>
