<template>
  <view-layout>
    <v-row id="hero" align="center" justify="center" class="my-5" align-sm="center" justify-md="center">
      <v-col cols="12" sm="6">
        <h1 class="display-2">Hi, I&apos;m<br class="px-2">Opeoluwa</h1>
        <p class="text--secondary sub-hero my-4">
          A Software Developer with a primal interest in application&apos;s backend and Command Line Application.
        </p>
        <v-btn color="#0d1023" shaped dark large to="/projects" target="_blank" rel="noopener" class="mx-2">Explore
          Projects <v-icon right large>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="6" class="text-center">
        <v-img src="@/assets/images/hero-image.png" width="auto" height="auto" container-class="elevation-1"></v-img>
      </v-col>
    </v-row>


    <!--about -->
    <v-row id="about">
      <h2 class="display-1 text--capitalize">What I do</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam quos laudantium veritatis enim,
      necessitatibus et maiores magni, aspernatur illo officiis asperiores doloremque repudiandae debitis accusantium
      molestias nostrum? Ratione, nihil.
    </v-row>


    <!--contact-->
    <v-row id="contact" class="my-5">
      <div>
        <h2 class=" display-1 text-capitalize">Get in touch!</h2>
        <p class="sub-hero text--capitalize">let&apos;s talk about everything</p>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam quos laudantium veritatis enim,
      necessitatibus et maiores magni, aspernatur illo officiis asperiores doloremque repudiandae debitis accusantium
      molestias nostrum? Ratione, nihil.
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
