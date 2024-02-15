<template>
  <h1>Componente estudiante</h1>
  <input type="text" v-model="id" />
  <button @click="consultarPorId">Consultar</button>
  <input type="text" v-model="name" />
    <input type="text" v-model="lastname" />
  <button @click="insertar">Insertar</button>
</template>

<script>
import {consultarEstudianteFacade, insertarFacade} from "../helpers/clienteEstudiante.js"
export default {
    data(){
        return {
            id : null,
            name: null,
            lastname : null,
        }
    },
    methods:{
        async consultarPorId(){
            const data = await consultarEstudianteFacade(this.id);
            console.log('desde componente\n')
            console.log(data.nombre);
            this.name = data.nombre;
        }, 
        async  insertar (){
            const estBody ={
                nombre: this.name,
                apellido: this.lastname,
                genero: "F",
                fechaNacimiento: "1998-02-02T00:00:00",
                direccion: "Quito Sur",
                ciudad: "Quito",
                parroquia: "Pichincha",
                pais: "Ecuador",
                celular: "0960719338",
            }   
            await insertarFacade(estBody)
        }
    }
}
</script>

<style>
</style>