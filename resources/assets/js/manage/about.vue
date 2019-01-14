<template lang="pug">
  div.page_event_about
    .container
      .row.mb-2
        .col-sm-12
          button.btn.btn-primary(@click="savePageData(about)") Save
      .row(@keyup="updateJsonEditor")
        .col-sm-12
          #jsoneditor
  
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      about: {}


    }
  },
  methods: {
    updateJsonEditor(){
      this.$set(this.about,"content",this.editor.get())
      console.log("json updated")
    },
    savePageData(page){
      this.$set(this.about,"content",this.editor.get())
      console.log(page)
      let pageClone = JSON.parse(JSON.stringify(page))
      pageClone.content = JSON.stringify(pageClone.content)

      axios.post("/api/page/"+page.title,{
        _method: "PATCH",
        ...pageClone
      }).then((res)=>{
        // this.setEvent(res.data)
        this.$message.success("Save Success!")
      })
    }
  },
  created(){
    axios.get("/api/page/about").then((res)=>{
      if (res.data){
        console.log(res.data)
        this.$set(this,"about",res.data)
        this.about.content = this.about.content?JSON.parse(this.about.content):{}
        var container = document.getElementById("jsoneditor");
        this.editor = new JSONEditor(container);
        console.log(this.about)
        this.editor.set(this.about.content);
        // this.editor.expandAll()
      }
    })
  }

}
</script>

<style>

</style>
