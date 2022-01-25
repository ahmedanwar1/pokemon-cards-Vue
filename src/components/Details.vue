<template>
  <div>
    <img
      :src="`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`"
      width="250"
      alt=""
    />
  </div>
  <h1>Id: {{ poke.id }}</h1>
  <h1>Name: {{ poke.name }}</h1>
</template>

<script>
export default {
  data() {
    return {
      poke: {},
    };
  },
  methods: {
    async getById() {
      let mydata = await this.$store.dispatch("collectPokes", {
        id: this.$route.params.id,
      });
      this.poke = mydata;
    },
  },
  mounted() {
    this.getById();
  },
};
</script>

<style></style>
