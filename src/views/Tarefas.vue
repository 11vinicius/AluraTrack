<template>
       <div class="column is-three-quarter conteudo">
          <Formulario @aoSalvarTarefa="salvarTarefa"/>
          <div class="lista">
            <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
          </div>
          <Box v-if="listaEstaVazia">
            Você não esta muito produtivo hoje!
          </Box>
      </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Formulario from '@/components/Formulario.vue';
  import Tarefa from '@/components/Tarefa.vue';
  import Box from '@/components/Box.vue';
  import ITarefa from '@/Interface/ITarefa';
  
  export default defineComponent({
      name: "Tarefas",
  
      data(){
        return{
          tarefas: [] as ITarefa[],
        }
      },
  
      components: { 
        Formulario,
        Tarefa,
        Box
      },
  
      computed:{
        listaEstaVazia(): boolean {
          return this.tarefas.length === 0
        }
      },
  
      methods:{
        salvarTarefa(tarefa: ITarefa){
          this.tarefas.push(tarefa)
        },
       
      }
  });
  </script>
  
 