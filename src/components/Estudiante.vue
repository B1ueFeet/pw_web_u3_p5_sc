<template>
  <div class="contenedor">
    <div v-if="showId" class="consulta">
      <h3>{{ message }}</h3>
      <input v-model="id" type="text" />
      <button v-if="funcion === 'consultar' || funcion === 'actualizar' " @click="consultarPorId">
        Consultar
      </button>
      <button v-if="funcion === 'eliminar'" @click="eliminar">Eliminar</button>
    </div>

    <div v-if="showCampos" class="insertar">
      <h3 v-if="!showId" for="">{{message}}</h3>
      <h3 v-if="funcion === 'actualizar'" for="">Actualice los datos del Estudiante</h3>
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

      <button v-if="funcion === 'guardar'" @click="insertar">Guardar</button>
      <button v-if="funcion === 'actualizar'" @click="actualizar">
        Actualizar
      </button>
    </div>
  </div>
</template>

<script>
import {
  consultarEstudianteFacade,
  insertarFacade,
  actualizarFacade,
  eliminarFacade,
} from "../helpers/clienteEstudiante.js";
export default {
  props: {
    funcion: {
      type: String,
      required: true,
    },
    showId: {
      type: Boolean,
      required: true,
    },
    showCampos: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      id: null,
      name: null,
      lastname: null,
      genero: null,
      direccion: null,
      ciudad: null,
      parroquia: null,
      pais: null,
      celular: null,
      fechaNacimiento: null,
      message: null,
    };
  },
  mounted() {
    console.log("Se monto el componente ");
    this.handleMessage();
  },
  methods: {
    handleMessage() {
      switch (this.funcion) {
        case "consultar":
          this.message = "Ingrese el Id del elemento que desea Consultar";
          break;
        case "eliminar":
          this.message = "Ingrese el Id del elemento que desea Eliminar";
          break;
        case "guardar":
          this.message = "Ingrese los datos del Nuevo Estudiante";
          break;
        case "actualizar":
          this.message = "Ingrese el ID del estudiante a Actualizar";
          break;
        default:
          this.message = ""
      }
    },
    async consultarPorId() {
      const data = await consultarEstudianteFacade(this.id);
      console.log("desde componente\n");
      console.log(data);
      this.name = data.nombre;
      this.lastname = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
      this.genero = data.genero;
      this.direccion = data.direccion;
      this.ciudad = data.ciudad;
      this.pais = data.pais;
      this.parroquia = data.parroquia;
      this.celular = data.celular;
    },
    async insertar() {
      const estBody = {
        nombre: this.name,
        apellido: this.lastname,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        ciudad: this.ciudad,
        parroquia: this.parroquia,
        pais: this.pais,
        celular: this.celular,
      };
      await insertarFacade(estBody);
    },
    async actualizar() {
      const estBody = {
        nombre: this.name,
        apellido: this.lastname,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        ciudad: this.ciudad,
        parroquia: this.parroquia,
        pais: this.pais,
        celular: this.celular,
      };
      await actualizarFacade(this.id, estBody);
    },

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
  margin: 20px auto;
  background-color: #b784b7;
}

.consulta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  border-radius: 15px;
  background-color: #e493b3;
}

.insertar {
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