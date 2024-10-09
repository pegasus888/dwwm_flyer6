<script>
import StarsBottom from "@/components/StarsBottom.vue";
import Post from "@/components/Post.vue";

export default {
  name: 'ReadPostView',
  components: {Post, StarsBottom}
}
</script>

<template>

  <body class="pt-5">
  <div class="mx-auto col-md-10">
    <h1 class="display-4 text-primary text-center mb-5 mt-4">Do You Really Need a Framework?</h1>

    <!--Post Card-->
    <div class="row pb-4 justify-content-center">

      <!--Card 1-->
      <div class="col-md-12">
        <div class="g-0 rounded overflow-hidden flex-md-row mb-4 position-relative">

          <div class="col-lg-auto col-12 d-lg-block text-center">
            <a href="https://www.julienrollin.com/posts/la-guerre-des-framework-js/" target="_blank" class="text-decoration-none">
              <img src="../../assets/images/frameworks_battle-min.png" alt="picture" class="bd-placeholder-img img-fluid rounded border border-altmysaddlebrown" style="object-fit: cover;">
            </a>
            <figure class="text-center">
              <figcaption class="blockquote-footer m-2 text-success opacity-25">
                From <cite title="La guerre des frameworks, Julien Rollin">https://www.julienrollin.com/posts/la-guerre-des-framework-js/</cite>
              </figcaption>
            </figure>

          </div>

          <Post />
        </div>
      </div>
      <!--/Card 1-->
    </div>
    <!--/Post Card-->

  <StarsBottom />

  </div>

  </body>
</template>

<style>
body {
  background: #f2ebfa;
  margin: 0;
}
</style>