import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      pokemonsArray: [],
    };
  },
  getters: {
    getPokes(state) {
      return state.pokemonsArray;
    },
  },
  mutations: {
    setPokes(state, payload) {
      state.pokemonsArray = payload.pokesArr;
      //console.log(state.pokemonsArray);
    },
  },
  actions: {
    async collectPokes(context, payload) {
      let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${payload.id}`
      );
      let data = await response.data;
      return data;
    },
    async fetchAPIPokes(context, payload) {
      let pokesArr = [];
      for (let i = payload.start; i <= payload.until; i++) {
        let mydata = await context.dispatch("collectPokes", { id: i });
        //console.log(mydata);
        pokesArr.push({
          id: mydata.id,
          name: mydata.name,
          types: mydata.types,
        });
      }
      context.commit("setPokes", { pokesArr });
    },
  },
});

export default store;
