<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EstudiantePaginaVue/>
</template>

<script>
import EstudiantePaginaVue from './pages/EstudiantePagina.vue'
export default {
  name: 'App',
  components: {
    EstudiantePaginaVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
