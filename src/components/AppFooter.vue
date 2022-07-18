<template>

    <div style="width: 100%">
        <div>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </div>

        <v-divider></v-divider>

        <div class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </div>

</template>
<script>
export default {
    data: () => ({
        icons: [
            'mdi-home',
            'mdi-email',
            'mdi-calendar',
            'mdi-delete',
        ],
        items: [
            'default',
            'absolute',
            'fixed',
        ],
        padless: false,
        variant: 'default',
    }),
    computed: {
        localAttrs() {
            const attrs = {}

            if (this.variant === 'default') {
                attrs.absolute = false
                attrs.fixed = false
            } else {
                attrs[this.variant] = true
            }
            return attrs
        },
    },
}
</script>

<style>
</style>