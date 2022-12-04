import

<template>
  <!-- Modal to display timeTaken with name input, cancel and confirm buttons to either reset the game or send score to databsae -->
  <div class="modal">
    <h2>Well done!</h2>
    <h3>You found all the elves in {{ timeTaken }} seconds</h3>
    <h4>Please enter your name</h4>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Enter your name"
      v-model="name"
    />
    <div class="modal-buttons">
      <button class="cancel" @click="cancel">Cancel</button>
      <button class="confirm" @click="confirm">Confirm</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CustomModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    timeTaken: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      name: "",
    };
  },
  methods: {
    async confirm() {
      // poast the score to the database then redirect to the splash screen
      if (this.name !== "") {
        try {
          await axios.post("api/highScore", {
            name: this.name,
            timeTaken: this.timeTaken,
          });
          // after the score is posted to the database, redirect to the splash screen
          this.$router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    },
    cancel() {
      // reset the game and redirect to the splash screen
      this.$router.push("/");
    },
  },
  computed: {
    nameInput() {
      return this.name;
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 5rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100;
}
h2 {
  font-size: 3rem;
  margin: 0;
}
h3 {
  font-size: 2rem;
  margin: 0;
}
h4 {
  font-size: 1.5rem;
  margin: 0;
}
input {
  width: 80%;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.5rem;
}
.modal-buttons {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.modal-buttons button {
  padding: 0.5rem 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
}
.modal-buttons .cancel {
  background-color: #f44336af;
  color: #fff;
}
.modal-buttons .confirm {
  background-color: #4caf4f94;
  color: #fff;
}
</style>

<style scoped>
.dark-mode div ::v-deep(.modal-content) {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
