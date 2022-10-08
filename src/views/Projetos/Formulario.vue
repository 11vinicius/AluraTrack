<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
                <input type="text" class="input" id="nomeDoProjeto" v-model="nomeDoProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>

    </section>
</template>

<script lang="ts">
import {  TipoNotificacoes } from '@/Interface/INotificacoes';
import { useStore } from '@/store';
import { ALTERA_PROJETO, ADICIONA_PROJETO } from '@/store/tipo-mutaçoes.';
import { defineComponent } from 'vue';
import useNotificador from '@/hooks/Notificador'

export default defineComponent({
    name: 'Formulario',

    props: {
        id: {
            type: String
        }
    },


    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
            console.log(projeto )
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },


    data() {
        return {
            nomeDoProjeto: "",
        }
    },

    setup() {
        const store = useStore();
        const { notificar } = useNotificador()

        return {
            store,
            notificar
        }
    },

    methods: {
        salvar() {
            if(this.id){
                this.store.commit(ALTERA_PROJETO,{
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
                this.$router.push('/projetos')
            }else{
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
                this.nomeDoProjeto = '';
                this.$router.push('/projetos')
            }

            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacoes.SUCESSO, 'Salvo com sucesso.', 'Projeto foi cadastraado com sucesso.')
        },
        
    }

})
</script>

<style scoped>
.projetos {
    padding: 1.5rem;
}
</style>