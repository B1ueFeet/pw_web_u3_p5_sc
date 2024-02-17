<template>
  <h1>Pagina Guardar</h1>
  <Estudiante funcion="guardar" :showId="false" :showCampos="true"/>
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