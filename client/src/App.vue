<template>
  <!--container-->
  <div id="app" class="mt-0 pt-1">
    <navigation/>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view style="min-height: 80vh"></router-view>
    </transition>
    <footer
      class="d-block small m-auto text-center px-3 pt-4 pb-2"
      style="font-size:.75rem; color var(--secondary)"
    >
      &copy; 2020 &mdash; {{ year }} Adeoye Adefemi Opeoluwa
    </footer>
  </div>
</template>



<script>
import "animate.css";
import Navigation from './components/Navigation.vue';
export default {
  name: "App",
  components: {Navigation},
  data() {
    return {
      year: 2021,
    };
  },
};
</script>
<style >
/* define genereral styles for application*/

* {
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden !important;
  scroll-behavior: smooth;
  font-size: 16px;
}
body {
  width: 100vw;
  background: var(--background);

}
.section {
  padding: 7.5vh 12vw;
  min-height: 100vh;
}
:root {
  --background: #0d1023;
  --gradient: linear-gradient(#df56ad 0%, #0d1023 96.23%, #702b57 100%);
  --border: #707070;
  --text-color: #ffffff;
  --sec-color: #df56ad;
  --default-border: #707070;
  --default-dark-color: #0d1023;
  --default-pink: #df56ad;
  --default-white: #f1f1f1;
  --default-red: #f62b2b;
  --default-green: #39b545;
  --default-yellow: #fdca00;
  --lightbg: #0d1023;
  --lighttext: #fff;
  --default-content-color: #7714f1; /* default for mail and documentation items*/
  --primary: #00cfe8;
  --secondary: #707070;
  --tertiary: #7714f1;
  --warning: #fdca00;
  --danger: #f62b2b;
  --success: #39b545;
  --light: #f1f1f1;
  --background: #020514;
  --dark: var(--background);
  --foreground: rgba(255, 255, 255, 0.08);
  --text: #ccced2;
}



/*====================SOCILA LINKS======================*/
#social-links {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-evenly;
  bottom: 3vh;
  z-index: 1000;
  left: 3;
  transform: translateY(-50%);
}

#social-links img {
  width: 1.3rem;
  display: block;
}

p {
  word-spacing: 1.5px;
  font-weight: 300;
  font-size: 1.025rem;
}
#app {
  font-family: "Poppins", cursive, sans-serif;
  color: var(--text-color);
  background: var(--background);
  padding-top: 8.5vh;
}
@media screen and (min-width: 768px) {
  #app {
    padding: 0 7.5rem;
  }
}
.section {
  padding: 40px 15vw;
  padding-top: 20px;
  color: var(--text-color);
  min-height: 105vh;
  width: 100vw;
  box-sizing: border-box;
}

a:hover {
  color: var(--sec-color) !important;
  transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
