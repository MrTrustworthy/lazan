<script setup>
    defineProps({
        speed: {
            type: Number,
            required: false,
        },
    });
</script>

<template>
    <div class="greetings">
    </div>
    <div id="main-canvas"></div>
</template>


<script>
    import GameScreen from '../app/gamescreen.js'

    export default {
        name: 'Canvas',
        data() {
            return {
                gs: null
            }
        },
        methods: {
            init: function () {


                let container = document.getElementById('main-canvas');
                this.gs = new GameScreen(container)

            },
        },
        mounted() {
            this.init();
        }
    }
</script>