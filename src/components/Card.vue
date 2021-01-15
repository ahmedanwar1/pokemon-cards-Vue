<template>
  <div class="card" :style="`background: ${pokeBackgroundColor}`">
    <div class="img-container">
      <img
        :src="`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`"
        alt=""
      />
    </div>
    <div class="info">
      <div class="number">#{{ pokeId.toString().padStart(3, "0") }}</div>
      <h3 class="name">{{ pokeName }}</h3>
      <span class="type">Type: {{ pokeType }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pokeId", "pokeName", "pokeType"],
  data() {
    return {
      colors: {
        fire: "#FDDFDF",
        grass: "#DEFDE0",
        electric: "#FCF7DE",
        water: "#DEF3FD",
        ground: "#f4e7da",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#98d7a5",
        bug: "#f8d5a3",
        dragon: "#97b3e6",
        psychic: "#eaeda1",
        flying: "#F5F5F5",
        fighting: "#E6E0D4",
        normal: "#F5F5F5",
      },
    };
  },
  computed: {
    pokeBackgroundColor() {
      return this.colors[this.pokeType];
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(222, 253, 224);
  text-align: center;
  margin: 15px;
  border-radius: 15px;
  padding: 5px 5px 18px 5px;
  box-shadow: 2px 1px 2px #ccc, -1px -1px 2px #ccc;
}

.img-container {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  margin: 15px;
  width: 120px;
  height: 120px;
  text-align: center;
}

.img-container img {
  max-width: 90%;
  margin-top: 10px;
}

.info {
}

.info .number {
  background: rgba(0, 0, 0, 0.1);
  display: inline-block;
  border-radius: 7px;
  padding: 3px 10px;
}

.info h3.name {
}

.info .type {
  font-size: 15px;
  color: #222;
}
</style>
