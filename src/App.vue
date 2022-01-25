<template>
  <img src="./assets/logo.png" />
  <router-view></router-view>
  <footer>
    All right reserved &copy; 2021 | Ahmed Anwar
  </footer>
</template>

<script>
import cardContainer from "./components/CardContainer.vue";
export default {
  components: { cardContainer },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  text-align: center;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 222, 45, 1) 100%
  );
  min-height: 100vh;
  margin: 0;
}
footer {
  background: #333;
  color: #fff;
  padding: 20px;
  font-size: 18px;
}
</style>
