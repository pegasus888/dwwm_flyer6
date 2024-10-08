<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-altlight py-3">
        <div class="container-lg">
            <a class="navbar-brand fw-bold text-muted visually-hidden" href="#">DW<sub><i>Blog</i></sub></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-links" aria-controls="nav-links" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="nav-links">
              <ul class="navbar-nav">
                <li class="nav-item mx-2">
                  <RouterLink class="text-decoration-none link-body-emphasis link-opacity-50-hover" :to="{ name: 'home' }">Home</RouterLink>
                </li>
                <li class="nav-item mx-2">
                  <RouterLink class="text-decoration-none link-body-emphasis link-opacity-50-hover" :to="{ name: 'about' }">About</RouterLink>
                </li>
                <li class="nav-item mx-2">
                  <RouterLink class="text-decoration-none link-body-emphasis link-opacity-50-hover" :to="{ name: 'Students' }">Students</RouterLink>
                </li>
                <!--    <li class="nav-item d-none d-lg-block">
                  <a class="btn btn-outline-primary ms-2" href="#">Login / Register</a>
                </li>-->
              </ul>
            </div>
        </div>
    </nav>

</template>

<script>
import {RouterLink} from "vue-router";

export default {
  components: {RouterLink}

}
</script>

<style>
li a.router-link-active {
color: #1b0539;
font-weight: bold;
}
</style>