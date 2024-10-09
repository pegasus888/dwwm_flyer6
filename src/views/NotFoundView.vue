<script>
import SocialMediaIcons from "@/components/SocialMediaIcons.vue";
import Page404 from "@/components/Page404.vue";

export default {
  name: 'NotFoundView',
  components: {Page404, SocialMediaIcons}
}
</script>

<template>
  <body class="pt-5 pb-5">

  <Page404 />

  <div class="container pb-5">
      <SocialMediaIcons />
  </div>

  </body>
</template>

<style>
body {
  background: #f2ebfa;
  margin: 0;
}
</style>