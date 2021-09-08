<template>
  <div class="container">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue"
export default {
    components: {
        Navigation
    },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
