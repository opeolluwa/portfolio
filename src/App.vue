<template>
  <v-app>
    <v-app-bar flat app color="#0d1023">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none"></v-app-bar-nav-icon>
      <AppNavigation />
    </v-app-bar>


    <v-main class="view-container">
      <router-view />
    </v-main>

    <v-footer class="view-container">
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNavigation from '@/components/AppNavigation.vue';
import AppFooter from '@/components/AppFooter.vue';
export default Vue.extend({
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
});
</script>


<style lang="sass">
@import "@/assets/scss/main.scss"
</style>