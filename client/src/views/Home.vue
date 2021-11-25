<template>
  <div class="container">
    <!--=======================SOCIAL LINKS-=====================-->
    <div id="social-links">
      <a href="https://www.linkedin.com/in/adeoye-adefemi-0669b41b5">
        <img src="./../assets/linkedin.svg"
      /></a>
      <a href="https://twitter.com/_opeolluwa">
        <img src="./../assets/twitter.svg" />
      </a>
      <a href="https://github.com/opeolluwa">
        <img src="./../assets/github.svg" />
      </a>
    </div>
    <!--main content-->

    <main class="cotainer">
      <Hero id="home" />
      <About id="about" />
      <Skills />
      <Contact class="mb-4 pb-4" />

      <!-- <router-view/> -->
    </main>
  </div>
</template>

<script>
import Hero from "./../components/Hero.vue";
import About from "./../components/About.vue";
import Skills from "../components/Skills.vue";
import Contact from "./../components/Contact.vue";
export default {
  name: "Home",
  data() {
    return {
      view: "Home",
    };
  },
  components: {
    Hero,
    About,
    Skills,
    Contact,
  },
};
</script>

<style scoped>

</style>