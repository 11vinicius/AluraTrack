<template>
    <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
            <Cronometro :tempoEmSegundos="tempoEmSegundos" />
            <button class="button" :disabled="cronometroRodando" @click="iniciar">
                <span class="icon">
                    <i class="fas fa-play"></i>
                </span>
                <span>play</span>
            </button>
            <button class="button" :disabled="!cronometroRodando" @click="finalizar">
                <span class="icon">
                    <i class="fas fa-stop"></i>
                </span>
                <span>stop</span>
            </button>
        </div>

    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from '@/components/Cronometro.vue';

export default defineComponent({
    name: "Temporizador",
    emits:['aoTemporizadorFinalizado'],

    components: {
        Cronometro
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        };
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.cronometroRodando = true
                this.tempoEmSegundos += 1;
            }, 1000);
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0
        }
    },
})
</script>
