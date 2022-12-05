<script>
import axios from "axios";

export default {
  name: "SplashScreen",

  data() {
    return {
      highScores: [],
    };
  },

  async mounted() {
    try {
      const response = await axios.get("api/highScore");
      console.log(response.data);
      this.highScores = response.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    startGame() {
      this.$router.push("/game");
    },
  },
};
</script>

<template>
  <div class="splash-screen">
    <h1>Elf Invaders</h1>
    <button class="play" @click="startGame">Play</button>
    <h2>Quickest Times</h2>
    <ul>
      <li v-for="score in highScores" :key="score.id">
        {{ score.name }}: {{ score.timeTaken }}s
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.splash-screen {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(90deg, #f5a6a6 0%, #dcf5ce 100%);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.splash-screen h1 {
  font-family: "Permanent Marker", cursive;
  font-size: 5rem;
  color: #201010;
  margin: 0;
}

.splash-screen h2 {
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #201010;
  margin: 0;
  padding-top: 5rem;
}

.splash-screen ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Permanent Marker", cursive;
  font-size: 2.5rem;
  color: #201010;
}

.splash-screen li {
  margin: 0.5rem 0;
  font-size: 2.5rem;
}

.splash-screen button {
  font-size: 2rem;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}
</style>
