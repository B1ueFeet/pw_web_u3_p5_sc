<template>
 <div class="contenedor">
    <h1>Componente Estudiante</h1>

    <div class="consulta">
      <h3 for="">Ingrese el ID Estudiante a consultar</h3>
      <input v-model="id" type="text" />
      <button @click="consultarPorId">Consultar</button>
    </div>

    <div class="insertar">
      <h3 for="">Ingrese los datos del Estudiante a ingresar</h3>
      <label for="">Nombre:</label>
      <input v-model="name" type="text" />
      <label for="">Apellido:</label>
      <input v-model="lastname" type="text" />
      <label for="">Genero:</label>
      <input v-model="genero" type="text" />
      <label for="">Fecha de Nacimiento:</label>
      <input v-model="fechaNacimiento" type="text" />
      <label for="">Direccion:</label>
      <input v-model="direccion" type="text" />
      <label for="">Ciudad:</label>
      <input v-model="ciudad" type="text" />
      <label for="">Parroquia:</label>
      <input v-model="parroquia" type="text" />
      <label for="">Pais:</label>
      <input v-model="pais" type="text" />
      <label for="">Celular:</label>
      <input v-model="celular" type="text" />

      <button @click="insertar">Insertar</button>
    </div>
  </div>
</template>

<script>
import {consultarEstudianteFacade, insertarFacade} from "../helpers/clienteEstudiante.js"
export default {
    data(){
        return {
            id : null,
            name: null,
            lastname : null,
            genero: null,
            direccion: null,
            ciudad: null,
            parroquia:null,
            pais: null,
            celular: null,
            fechaNacimiento: null,

        }
    },
    methods:{
        async consultarPorId(){
            const data = await consultarEstudianteFacade(this.id);
            console.log('desde componente\n')
            console.log(data.nombre);
            this.name = data.nombre;
            this.lastname =data.apellido;
            this.fechaNacimiento = data.fechaNacimiento;
            this.genero = data.genero;
            this.direccion = data.direccion;
            this.ciudad = data.ciudad;
            this.pais = data.pais;
            this.parroquia = data.parroquia;
            this.celular = data.celular;
        }, 
        async  insertar (){
            const estBody ={
                nombre: this.name,
                apellido: this.lastname,
                genero: this.genero,
                fechaNacimiento: this.fechaNacimiento,
                direccion:this.direccion,
                ciudad:this.ciudad,
                parroquia: this.parroquia,
                pais: this.pais,
                celular: this.celular,
            }   
            await insertarFacade(estBody)
        }
    }
}
</script>

<style>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  border-radius: 30px;
  margin: 0 auto;
  background-color: #B784B7;
}

.consulta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  border-radius: 15px;
  background-color: #E493B3;
}

.insertar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  border-radius: 15px;
  background-color: #E493B3;
}

button {
  margin: 10px;
  background-color:#535C91;
  border-radius: 15px;
  color: whitesmoke;

}
button:hover{
    background: #8E7AB5;
}

label{
    text-align: left;
    width: 200px;
    margin-top: 10px;
}
input{
    width: 200px;
    border-radius: 15px;
}

h3{
  margin:  20px;
}
</style>