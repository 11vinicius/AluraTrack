export enum TipoNotificacoes{
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface INotificacoes{
    titulo: string,
    texto: string,
    tipo: TipoNotificacoes,
    id: number
} 