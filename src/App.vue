<template>
  <div id="app">
    <MainChart />
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
  margin-top: 60px;
}
</style>
