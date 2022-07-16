<template>
    <v-container class="view-container">
        <slot></slot>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ViewLayout',
    components: {
    },
})
</script>
<style>
</style>