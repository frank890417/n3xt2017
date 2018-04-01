<template lang="pug">
  section.sectionFooter.blue
    .container
      .row
        .col-sm-12.text-center
          router-link(to="/")
            img.logo(src="/img/logo_n3xt_white.svg" style="width: 150px")
          ul.social_icons
            li
              a(href="https://www.facebook.com/n3xtcon/" target="_blank")
                i.fa.fa-facebook
            li
              a(href="https://twitter.com/N3xtCon" target="_blank")
                i.fa.fa-twitter
            li
              a(href="https://www.instagram.com/n3xtcon/" target="_blank")
                i.fa.fa-instagram
            li
              a(href="https://www.linkedin.com/company/n3xtcon/" target="_blank")
                i.fa.fa-linkedin
          p.text-center Copyright © 2017  |  n3xt con  |  Los Angeles, California<br>n3xt con is 501(c)(3) non-profit organization.
                
</template>

<script>
export default {

}
</script>

<style>

</style>
