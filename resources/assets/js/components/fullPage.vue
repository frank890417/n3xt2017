<template lang="pug">
div
  transition(name="fade")
    .fullpage(v-if="show")
      slot
      .cross(@click="closeFullpage")
        i.fa.fa-times
</template>

<script>
export default {
  props: ["show"],
  methods: {
    closeFullpage(){
      this.$emit("closeFullpage")
    }
  }
}
</script>

