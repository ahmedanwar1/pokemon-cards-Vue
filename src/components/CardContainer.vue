<template>
  <div class="flex" v-if="!isloading">
    <card
      v-for="poke in allPokes"
      :key="poke.id"
      :pokeName="poke.name"
      :pokeTypes="poke.types"
      :pokeId="poke.id"
    ></card>
  </div>
  <div class="demo" v-else></div>
</template>

<script>
import card from "./Card.vue";
export default {
  components: { card },
  data() {
    return {
      pokemonsArray: [],
      isloading: true,
    };
  },
  computed: {
    allPokes() {
      return this.$store.getters.getPokes;
    },
  },
  async mounted() {
    this.isloading = true;
    await this.$store.dispatch("fetchAPIPokes", { start: 1, until: 70 });
    this.isloading = false;
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 110px 50px;
}
.demo:empty {
  margin: auto;
  width: 500px;
  height: 600px; /* change height to see repeat-y behavior */

  background-image: radial-gradient(
      circle 50px at 50px 50px,
      lightgray 99%,
      transparent 0
    ),
    linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    linear-gradient(lightgray 20px, transparent 0),
    linear-gradient(lightgray 20px, transparent 0),
    linear-gradient(lightgray 20px, transparent 0),
    linear-gradient(lightgray 20px, transparent 0);

  background-repeat: repeat-y;

  background-size: 100px 200px, /* circle */ 50px 200px,
    /* highlight */ 150px 200px, 350px 200px, 300px 200px, 250px 200px;

  background-position: 0 0, /* circle */ 0 0, /* highlight */ 120px 0,
    120px 40px, 120px 80px, 120px 120px;

  animation: shine 1s infinite;
}

@keyframes shine {
  to {
    background-position: 0 0, 100% 0, /* move highlight to right */ 120px 0,
      120px 40px, 120px 80px, 120px 120px;
  }
}
</style>
