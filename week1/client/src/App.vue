<template>
  <div id="app">
    <div id="nav-bar" v-if="playing">
      <router-link to="/">Home</router-link>
      <router-link to="/game">Game</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      elves: [],
      playing: false,
    };
  },

  async mount() {
    // hit the API endpoint and fetch them elves
    const response = await axios.get("http://localhost:3000/api/elf");
    // set the elves data in the above array
    this.elves = response.data;
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

}
</style>
