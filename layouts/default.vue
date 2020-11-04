<template>
    <div>
        <menu-cha />
        <div class="container section">
            <div class="columns">
                <div class="column">
                    <nuxt />
                </div>
                <div class="column is-one-third form-cha menuD">
                    <canales-ayuda />
                </div>
            </div>
        </div>
        <footer-vue />
    </div>
</template>
<script>
import FooterVue from '~/components/FooterVue'
import MenuCha from '~/components/MenuCha'
import CanalesAyuda from '~/components/CanalesAyuda'

export default {
    components: {
        FooterVue,
        MenuCha,
        CanalesAyuda
    }
}
</script>