<template>
  <h1>PokeDex</h1>
  <card-container></card-container>
</template>

<script>
//import axios from "axios";
import cardContainer from "./components/CardContainer.vue";
export default {
  components: { cardContainer },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}
body {
  font-family: "Lato";
  background: linear-gradient(to right, #d4d3dd, #efefbb);
}

h1 {
  text-align: center;
}
</style>
