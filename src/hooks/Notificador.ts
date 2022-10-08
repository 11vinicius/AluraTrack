import { TipoNotificacoes } from "@/Interface/INotificacoes"
import { store } from '@/store';
import { NOTIFICAR } from "@/store/tipo-mutaçoes.";

type Notificador = {
    notificar: (tipo: TipoNotificacoes, title: string, texto: string)=> void
}

export default (): Notificador =>{
    const notificar = (tipo: TipoNotificacoes, titulo:string, texto: string):void=>{
        store.commit(NOTIFICAR,{
            titulo,
            texto,
            tipo
        })
    }   
    return {
        notificar
    }
}