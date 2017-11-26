<template lang="pug">
.slideIn(:class="{active: activeClass}")
  slot
    //h2 hello {{activeClass}} 
  //- h2 {{activeClass}}
</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'

export default {
  data(){
    return {
      elTop: 0,
      r: parseInt(Math.random()*100),
    }
  },
  computed: {
    ...mapState(['scrollStream$','resizeStream$']),
  },
  methods:{
    updateElTop(){
      this.elTop= $(this.$el).offset().top - $(window).outerHeight()*0.8
      console.log(this.elTop)
    }
  },
  mounted(){
    this.updateElTop()
    let _this = this
    //如果尺寸有變動(event stream)就重新抓取元素位置
    this.resizeStream$.subscribe(()=>{
      this.updateElTop()
    })

  },
  subscriptions(){
    //取得scrollStream(滑動位置)轉換為超過此物件的stream，並指取變化值
    let result = this.scrollStream$
      .map(scrollTop=>scrollTop>this.elTop)
      .distinctUntilChanged()
    return {
      activeClass: result
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
