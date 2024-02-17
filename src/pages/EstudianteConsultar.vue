<template>
  <h1>Pagina Consultar</h1>
  <Estudiante funcion="consultar" :showId="true" :showCampos="true"/>
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