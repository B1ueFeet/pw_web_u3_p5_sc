<template>
 <div class="contenedor">
    <h1>Estudiante Eliminar</h1>

    <div class="consulta">
      <h3 for="">ID de Estudiante</h3>
      <input v-model="id" type="text" />
      <button @click="eliminar">Eliminar</button>
    </div>
 </div>

</template>

<script>
import {
  eliminarFacade,
} from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFacade(this.id);
    },
  },
};
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
  background-color: #b784b7;
}

.consulta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  border-radius: 15px;
  background-color: #e493b3;
}

button {
  margin: 10px;
  background-color: #535c91;
  border-radius: 15px;
  color: whitesmoke;
}
button:hover {
  background: #8e7ab5;
}

label {
  text-align: left;
  width: 200px;
  margin-top: 10px;
}
input {
  width: 200px;
  border-radius: 15px;
}

h3 {
  margin: 20px;
}
</style>