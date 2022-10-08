import { TipoNotificacoes } from "@/Interface/INotificacoes"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tipo-mutaçoes."

export const notificar ={
    methods: {
        notificar(tipo: TipoNotificacoes, titulo:string, texto: string):void{
            store.commit(NOTIFICAR,{
                titulo,
                texto,
                tipo
            })
        }   
    },
} 