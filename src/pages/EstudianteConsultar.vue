<template>
  <h1>Pagina Consultar</h1>
  <Estudiante funcion="consultar" :showId="true" :showCampos="true"/>
</template>

<script>
import Estudiante from '@/components/Estudiante.vue'
export default {
   created(){
    
    console.log(this.$route)
    console.log(this.$route.params.id)
    console.log(this.$route.query)
    console.log(this.$route.query.anio)
    console.log(this.$route.query.edad)
  },
  components: {
    Estudiante
  }
}
</script>

<style>
</style>