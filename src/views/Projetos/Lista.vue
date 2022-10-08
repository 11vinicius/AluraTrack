<template>
    <h1 class="title">Projetos</h1>
    <router-link :to="{name:'novoprojeto'}">
        Novo Projeto
    </router-link>
    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="projeto in projetos" :key="projeto.id">
                <td>{{projeto.id}}</td>
                <td>{{projeto.nome}}</td>
                <td>
                    <router-link :to="{name:'editar projeto', params:{id: projeto.id}}" class="button">
                        <span class="icon is-small">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </router-link>
                    <button class="button ml-2 is-danger" @click="exclui(projeto.id)">
                        <span class="icon is-small">
                            <i class="fas fa-trash"></i>
                        </span>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { computed } from '@vue/reactivity';
import { EXCLUI_PROJETO } from '@/store/tipo-mutaçoes.';

export default defineComponent({
    name: 'Projeto',

    setup() {
        const store = useStore();

        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    },

    methods:{
        exclui(id: string){
            this.store.commit(EXCLUI_PROJETO, id)
        }
    }


})
</script>