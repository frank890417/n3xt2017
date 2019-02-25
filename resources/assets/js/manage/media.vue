<template lang="pug">
.page_event_media
  .container
    .row
      .col-sm-12
        h1 Manage Media
        manage_nav
        hr

    .row.mb-5.mt-5
      .col-sm-12
        h3 Media Upload
      .col-sm-3
        img(:src="imageUrl", style="width: 100%;backgorund-color:#ddd;")
      .col-sm-9
        h4 Upload Image and get url
        el-input(placeholder="Title", v-model="imageTitle")
        el-input(v-model="imageUrl")
          default_pic_selector( slot="append" @select_pic="select_pic_cover")
    .row.pt-3
      .col-sm-12
        h3 Media List
        hr
        .list-group
          .col-sm-12.list-group-item(v-for="media in medias").mt-2
            .col-sm-2
              img(:src="media.url", style="width: 100%;backgorund-color:#ddd;")
            .col-sm-10.pt-3
              h4 {{media.title}}
              h5 {{media.created_at}}
              el-input(v-model="media.url")
          
</template>

<script>
import axios from 'axios'
import default_pic_selector from '../default_pic_selector.vue'
export default {
  data(){
    return {
      imageUrl: "https://via.placeholder.com/350x220",
      imageTitle: "",
      medias: []
    }
  },
  methods: {
    select_pic_cover(obj){
      this.$set(this,"imageUrl",obj.url)
      axios.post("/api/media",{
          _method: "POST",
          url: this.imageUrl,
          title: this.imageTitle
      }).then((res)=>{

        this.$message.success("Upload Success!")
        this.imageTitle=""
        this.imageUrl=""
        this.reloadAllMedias()
      })
    },
    reloadAllMedias(){
        
      axios.get("/api/media").then(res=>{
        this.$set(this,"medias",res.data)
      })
    }
  },
  created(){
    this.reloadAllMedias()
  },
  components: {
    default_pic_selector
  }

}
</script>