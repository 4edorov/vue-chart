<template>
  <div id="app">
    <main-chart />
  </div>
</template>

<script>
import MainChart from "./components/MainChart";

export default {
  name: "app",
  components: {
    MainChart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
