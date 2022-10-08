import { INotificacoes, TipoNotificacoes } from "@/Interface/INotificacoes";
import IProjetos from "@/Interface/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUI_PROJETO, NOTIFICAR } from './tipo-mutaçoes.';

interface Estado{
    projetos: IProjetos[],
    notificacoes: INotificacoes[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state:{
        projetos:[],
        notificacoes:[]
    },

    mutations:{
        [ADICIONA_PROJETO](state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjetos

            state.projetos.push(projeto);
        },

        [ALTERA_PROJETO](state, projeto:IProjetos){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id);
            state.projetos[index] = projeto
        },

        [EXCLUI_PROJETO](state, id:string){
            state.projetos = state.projetos.filter(proj=>proj.id != id);
        },
        [NOTIFICAR](state, novaNotificacao: INotificacoes){
            
            novaNotificacao.id = new Date().getTime();
            state.notificacoes.push(novaNotificacao);

            setTimeout(()=>{
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id);
            }, 3000)
        }
    }
});

export function useStore(): Store<Estado>{
    return vuexUseStore(key)
}