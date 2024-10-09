<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'DWWM'
  },
  subtitle: {
    type: String,
    default: 'PROMO 2024-2025'
  }
});
</script>


<template>

  <body class="pb-5">
  <section class="bg-altligh ms-5 me-5 p-5 rounded">
  <header>
    <div class="container-fluid text-center ">
      <h1 class="display-5 text-primary">{{ title }}</h1>
      <h2 class="h1 lead text-primary mt-3">{{ subtitle }}</h2>
      <div class="">
        <img src="../assets/images/computerflyer1-min.jpg" alt="computer picture" class="w-75 my-5 rounded object-fit-cover">
      </div>
    </div>
  </header>


    <h3 class="h2 lead text-center text-success">Parcours Développeur Web</h3>
    <h4 class="display-6 text-center text-success"><a href="#" class="text-success text-decoration-none">DW<sub><i>Blog</i></sub></a></h4>
    <h5 class="visually-hidden">Where Developers Suffer Together, from https://daily.dev/</h5>


</section>
  </body>

</template>


<style>
body {
  background: #f2ebfa;
  margin: 0;
}
</style>