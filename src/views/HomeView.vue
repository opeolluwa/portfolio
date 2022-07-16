<template>
  <view-layout>
    <v-row id="hero">
      <v-col cols="12" sm="6" align="center" justify="center" class="py-5">
        <h1>Hi, I&apos;m <br class="px-2">  Opeoluwa</h1>
        <p>
          A Software Developer with a primal interest in application&apos;s backend and Command Line Application.
        </p>
      </v-col>

      <v-col cols="12" sm="6" class="text-center">

        <v-img src="@/assets/images/hero-image.png" width="200" height="200" container-class="elevation-1"></v-img>

      </v-col>
    </v-row>
  </view-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import ViewLayout from '@/components/ViewLayout.vue'
export default Vue.extend({
  name: 'HomeView',
  components: {
    ViewLayout
  },
})
</script>
