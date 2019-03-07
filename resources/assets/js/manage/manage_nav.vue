<template lang="pug">
    .btn-group
        router-link.btn.btn-default(to="/manage/event" ,:class="{active: $route.path=='/manage/event'}") Events
        router-link.btn.btn-default(to="/manage/speaker" ,:class="{active: $route.path=='/manage/speaker'}") Speakers
        router-link.btn.btn-default(to="/manage/agency" ,:class="{active: $route.path=='/manage/agency'}") Agencies
        //- router-link.btn.btn-default(to="/manage/post" ,:class="{active: $route.path=='/manage/post'}") Posts
        router-link.btn.btn-default(to="/manage/about" ,:class="{active: $route.path=='/manage/about'}") About
        router-link.btn.btn-default(to="/manage/contact" ,:class="{active: $route.path=='/manage/contact'}") Contact
        router-link.btn.btn-default(to="/manage/media" ,:class="{active: $route.path=='/manage/media'}") Media
</template>

<script>
export default {

}
</script>

<style>

</style>
