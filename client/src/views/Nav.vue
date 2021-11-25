<template>
  <nav
    class="navbar navbar-expand-lg fixed shadow-lg"
    :class="{ onScroll: !view.topOfPage }"
    id="navbar"
  >
    <logo class=" mx-auto" />

  </nav>
</template>







<script>
import Logo from "../components/Logo.vue";
export default {
  components: { Logo },
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>

<style>

@media screen and (max-width: 400px) {
  #navbar {
    position: fixed;
    z-index: 10000;
    margin: 0;
    padding: 10px !important;
    width: 100% !important;
    align-items: center !important;
    display: flex;
    transition: all 450ms 50ms ease-in-out;
    color: transparent;
    color: #fff;
    display: none;
    display: flex !important;
    justify-content: space-between;
  }

  .onScroll {
    transition: 300ms ease-in-out;
    background: var(--light);
    display: block;
    box-shadow: transparent;
  }

  #navbar > .container {
    display: flex;
    align-items: center !important;
    align-content: center;
  }

  #navbar > .container a:first-child {
    display: block !important;
    color: #000;
    text-decoration: none;
  }
}
</style>