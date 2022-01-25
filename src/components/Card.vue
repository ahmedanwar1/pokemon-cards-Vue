<template>
  <div class="card">
    <div
      class="character"
      :style="{
        backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png)`,
      }"
    ></div>
    <div
      class="card-shape"
      :style="{ backgroundColor: getPokeBackgroundColor }"
    ></div>
    <div class="details" :style="{ backgroundColor: getPokeBackgroundColor }">
      <h1>{{ pokeName }}</h1>
      <div class="number">#{{ pokeId.toString().padStart(3, "0") }}</div>
      <div class="types">{{ pokeTypes[0].type.name }}</div>
      <router-link :to="`/home/${pokeId}`">Show more</router-link>
    </div>
    <div
      class="shadow"
      :style="{ backgroundColor: getPokeBackgroundColor }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["pokeName", "pokeTypes", "pokeId"],
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
    getPokeBackgroundColor() {
      console.log();
      return this.colors[this.pokeTypes[0].type.name];
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  transition: 0.5s;
  margin: 50px;
}
.character {
  position: absolute;
  z-index: 100;
  top: -100px;
  left: 35px;
  width: 200px;
  height: 200px;
  transition: 0.5s;
  background-size: contain;
  background-repeat: no-repeat;
}

.card-shape {
  width: 250px;
  height: 100px;
  transform: skewY(163deg);
  border-radius: 15px;
  border-bottom-right-radius: 0;
  position: relative;
  z-index: 2;
}
.details {
  text-align: center;
  width: 250px;
  height: 300px;
  position: relative;
  bottom: 65px;
  border-radius: 15px;
  border-top-right-radius: 0;
  padding: 40px 15px 15px 15px;
  z-index: 3;
}
.shadow {
  opacity: 0.7;
  width: 30px;
  height: 300px;
  display: inline-block;
  position: absolute;
  right: -15px;
  bottom: 93px;
  border-radius: 15px;
}

.card:hover {
  transform: scale(1.1);
}

.card:hover .character {
  transform: scale(1.05);
}

.number {
  background: rgba(255, 255, 255, 0.6);
  display: inline-block;
  padding: 15px;
  border-radius: 7px;
  padding: 3px 10px;
}

.types {
  margin: 30px 0;
}

a {
  background: rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 7px;
  transition: 0.3s;
  box-shadow: 0 0 5px #555;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  line-height: 40px;
  color: #000;
}
a:visited {
  color: #000;
}

a:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
