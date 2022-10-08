<template>
    <div class="notificacoes">
        <article class="message" v-for="notificacao in notificacoes" :key="notificacao.id" :class="context[notificacao.tipo]">
            <div class="message-header">
                {{notificacao.title}}
            </div>
            <div class="message-body">
                {{notificacao.texto}}
            </div>
        </article>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { TipoNotificacoes} from '@/Interface/INotificacoes';

export default defineComponent({
    name: 'Notificacoes',

    data(){
        return{
            context:{
                [TipoNotificacoes.SUCESSO]: 'is-success',
                [TipoNotificacoes.FALHA]: 'is-danger',
                [TipoNotificacoes.ATENCAO]: 'is-warning'
            }
        }
    },

    setup() {
        const store = useStore();
        const notificacoes = computed(()=> store.state.notificacoes);

        return{
            notificacoes
        }
    }
})
</script>

<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>