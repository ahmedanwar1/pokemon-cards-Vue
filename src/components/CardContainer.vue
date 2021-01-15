<template>
  <div class="card-container">
    <card
      v-for="poke in pokemonsArray"
      :key="poke.id"
      :poke-id="poke.id"
      :poke-name="poke.name"
      :poke-type="poke.type"
    />
  </div>
</template>

<script>
import axios from "axios";
import card from "./Card.vue";
export default {
  components: { card },
  data() {
    return {
      pokemonsArray: {},
    };
  },
  methods: {
    getPokes(i) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => {
          let mydata = response["data"];
          let myobj = {
            id: mydata.id,
            name: mydata.name,
            type: mydata.types[0].type.name,
          };
          this.pokemonsArray[mydata.id] = myobj;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    for (let i = 1; i <= 300; i++) {
      this.getPokes(i);
    }
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
