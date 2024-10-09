<script>
import SocialMediaIcons from "@/components/SocialMediaIcons.vue";
import {defineComponent} from "vue";
import Article from "@/components/Article.vue";

export default defineComponent({
  components: {Article, SocialMediaIcons}
})


</script>

<template>

  <body class="pt-5 pb-5">
  <h1 class="display-5 text-altmypurpleblue text-center my-lg-5">Make Good Art</h1>

  <section class="bg-success-subtle bg-opacity-10 mt-5 ms-5 me-5 p-5 rounded">

    <div class="col-6 my-3 mx-auto">    <!-- plus: col-md-2-->

      <figure class="text-center">
        <blockquote class="blockquote">
          <div class="h2 text-altmysaddlebrown lead text-decoration-none">
              <h1 class="h2 text-altmysaddlebrown lead">We know how hard it is to be a developer.</h1>
              <h2 class="text-altmysaddlebrown lead"> It doesn’t have to be.</h2>
              <h3 class="h2 text-altmysaddlebrown lead">Learn, Collaborate, and Grow Together!</h3>
          </div>
        </blockquote>
        <figcaption class="blockquote-footer mt-2 mb-4 text-success opacity-75">
          From <cite title="Where Developers Suffer Together, Daily.dev">https://daily.dev/</cite>
        </figcaption>
      </figure>
    </div>

    <Article />
    <SocialMediaIcons />

  </section>

  </body>
</template>

<style>
body {
  background: #f2ebfa;
  margin: 0;
}
</style>
