import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import Tarefas from '../views/Tarefas.vue';
import Projeto from '../views/Projeto.vue';
import Formulario from '../views/Projetos/Formulario.vue';
import Lista from '../views/Projetos/Lista.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefas
    }, 
    {
        path: '/projetos',
        component: Projeto,
        children:[
            {
                path:'',
                name:'lista',
                component: Lista
            },
            {
                path:'/novo',
                name:'novoprojeto',
                component: Formulario
            },
            {
                path:'/:id',
                name:'editar projeto',
                component: Formulario,
                props: true
            }
        ]
    }

]

export const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
});