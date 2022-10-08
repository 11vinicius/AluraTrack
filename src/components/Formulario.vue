<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" area-label="Formulário de criação para uma nova tarefa">
                <input v-model="descricao" type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
        <div class="column is-3">
            <div class="select">
                <select v-model="idProjeto">
                    <option value=""></option>
                    <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                        {{projeto.nome}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from '@/components/Temporizador.vue';
import { useStore } from 'vuex';

import { key } from '@/store';
import { computed } from '@vue/reactivity';

export default defineComponent({
    name: "Formulario",
    emits:['aoSalvarTarefa'],

    components:{
        Temporizador
    },

    setup(){
        const store = useStore(key);

        return {
            projetos: computed(()=> store.state.projetos)
        }
    },

    data(){
        return {
            descricao: '',
            idProjeto:''
        }
    },

    methods:{
        finalizarTarefa( tempoDecorrido: number):void{
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = ''
        }
    }
   
})
</script>

<style>
    .formulario{
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }
</style>
