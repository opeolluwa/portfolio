<template>
  <div class="container">
    <!--=======================SOCIAL LINKS-=====================-->
    <social-links />
    <!--main content-->

    <main>
      <Hero id="home" />
      <div class="row my-4">
        <About id="about" class="col-md-6 col-xs-12" />
        <Skills class="col-md-6 col-xs-12" />
      </div>
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
import SocialLinks from "../components/SocialLinks.vue";
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
    SocialLinks,
  },
};
</script>

<style scoped>
.about-me {
  display: flex;
  justify-content: space-between;
}
</style>