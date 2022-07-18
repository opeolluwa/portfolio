<template>
    <nav class="view-container">
        <!--logo-->
        <a href="/"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="115"
                height="26" viewBox="0 0 115 26">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_37" data-name="Rectangle 37" width="115" height="26"
                            transform="translate(9479 1053)" fill="#fff" />
                    </clipPath>
                </defs>
                <g id="Mask_Group_5" data-name="Mask Group 5" transform="translate(-9479 -1053)"
                    clip-path="url(#clip-path)">
                    <text id="Opeoluwa." transform="translate(9537 1072)" fill="#fff" font-size="20"
                        font-family="Poppins-Bold, Poppins" font-weight="00">
                        <tspan x="-56.61" y="0">Opeoluwa</tspan>
                        <tspan y="0" fill="#df56ad" font-size="33" font-family="Poppins-SemiBold, Poppins"
                            font-weight="600">.</tspan>
                    </text>
                </g>
            </svg></a>

        <ul id="nav-items-container" class="nav">
            <li class="nav-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact">project</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/resume">Resume</router-link>
            </li>
        </ul>

        <ul id="socials">
            <li>
                <a href="https://www.linked.com/in/adeoye-ao">
                    <v-btn icon color="inherit">
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                </a>
            </li>

            <li>
                <a href="https://www.github.com/opeolluwa">
                    <v-btn icon color="inherit">
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                </a>
            </li>

            <li>
                <router-link :to="{ name: 'contact-page' }">
                    <v-btn icon color="">
                        <v-icon>mdi-email</v-icon>
                    </v-btn>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'AppNavigation',
    components: {
    },
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/navigation.scss"
</style>