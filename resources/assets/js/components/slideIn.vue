<template lang="pug">
div.slideIn(:class="{active: scrollTop>elTop}")
  slot
    h2 hello {{scrollTop}} / {{elTop}}
</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  data(){
    return {
      elTop: 0  

    }
  },
  computed: {
    ...mapState(['scrollTop']),
  },
  methods:{
    updateElTop(){
      this.elTop=$(this.$el).offset().top - $(window).outerHeight()*0.8
    }
  },
  mounted(){
    this.updateElTop()
  },
  watch:{
    scrollTop(){
      if (this.$el){
        this.updateElTop()
      }else{
        this.elTop= 0
      }
    }
  }
}
</script>

<style lang="sass?indentedSyntax">
.slideIn
  opacity: 0
  transition: 0.6s
  transform: translateY(30px)
  &.active
    opacity: 1
    transform: translateY(0px)
.slideIn.left
  opacity: 0
  transition: 0.6s
  transform: translateX(30px)
  &.active
    opacity: 1
    transform: translateX(0px)
.slideIn.scale
  opacity: 0
  transition: 0.6s
  transform: scale(0.5)
  &.active
    opacity: 1
    transform: scale(1)
</style>
