<template>
    <h1>Estudiante Eliminar</h1>
    <Estudiante funcion="eliminar" :showId="true" :showCampos="false"/>

</template>

<script>
import Estudiante from '@/components/Estudiante.vue'
export default {
  components: {
    Estudiante
  }
}
</script>

<style>
</style>