<script>
import axios from 'axios';
import Footer from "@/components/Footer.vue";
import Stickytop from "@/components/Stickytop.vue";

export default {
  name: 'StudentsView',
  components: { Stickytop, Footer},
  data() {
    return {
      students: [],         // empty to begin with then length when go through data
      page: 1,              // tracking the current page
      loading: false,       // loading state to prevent duplicate requests
      itemsPerPage: 5,      // number of students to fetch per request
    }
  },
  mounted() {
    this.fetchStudentsData();

    // Adding event listener for scroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Cleaning up the event listener
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    async fetchStudentsData() {
      if (this.loading) return;       // Preventing multiple requests
      this.loading = true;            // Setting loading state

      try {
        const response = await axios.get('db.json');

        // Simulating pagination by slicing the data
        const newStudents = response.data.slice(
            (this.page - 1) * this.itemsPerPage,
            this.page * this.itemsPerPage
        );

        this.students.push(...newStudents);     // Appending new students to the array
        this.page++;                            // Incrementing the page for the next request
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;                   // Reseting loading state
      }
    },


    handleScroll() {
      // Checking if we are near bottom page
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 200;         // 200 pixels from bottom page

      if (scrollPosition >= threshold) {
        this.fetchStudentsData();                                // Fetching more students when scrolled near the bottom
        this.loading = false;
      }
    },


    redirect() {
      this.$router.push( { name: 'ReadPost' } )
    }
  }
}
</script>



<template>

  <body class="pt-5">

  <Stickytop />

  <!--     Student Section -->
  <section class="student-section pt-5">
    <div class="container-fluid w-75 p-3">

      <!--  Initial loading indicator (when no students have been fetched yet) -->
      <div v-if="!students.length && loading">
        <h2 class="h4 lead text-altmylightblueviolet fst-italic text-center my-lg-5">
          Loading students...
        </h2>
      </div>

      <!--     Student Cards (once students are loaded) -->
      <div v-else>
        <div class="card-body bg-success-subtle bg-opacity-10 rounded shadow mb-5 rounded"
             v-for="student in students"
             :key="student.id">

          <!--      Next: add cv link
          <RouterLink class="fw-bold text-decoration-none" :to="{ name: 'StudentDetails', params: { id: student.id } }">
          </RouterLink>-->
          <h2 class="ms-2 lead fw-semibold text-altmysaddlebrown">{{ student.name }}</h2>


          <p class="ms-2 lead text-altmydarkblue">{{ student.email }}</p>
          <span v-if="student.status === 'active'" class="ms-2 lead text-info">
                                  <button class="ms-5 bg-opacity-10 btn btn-altmypastelgreen text-altmysaddlebrown lead"
                                          @click="redirect"
                                  >
                                    Read My Post...
                                  </button>
                              </span>
          <span v-else-if="student.status === 'pending'" class="ms-2 lead text-info"> Post is pending </span>
          <span v-else class="ms-2 lead text-info"> No Post </span>
          <br>

          <br>

          <a v-bind:href="student.githublink" target="_blank" class="ms-4 text-altmydarkfuschia fst-italic"> Here's my Github </a>
        </div>
      </div>

      <!--   Infinite scroll loading indicator (visible when fetching more students) -->
      <div v-if="loading">
        <h2 class="h4 lead text-altmylightblueviolet fst-italic text-center my-lg-5">
          Loading more students...
        </h2>
      </div>

    </div>
  </section>
  <!--     /Student Section-->

  <Footer />

  </body>

</template>

<style>
body {
  background: #f2ebfa;
  margin: 0;
}
</style>