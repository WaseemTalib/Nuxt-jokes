import axios from "axios";
export default {
  state: () => {
    return {
      jokes: [],
      isLoading: false
    };
  },
  actions: {
    async getJokes({ commit }) {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };
      try {
        const res = await axios.get(
          "https://icanhazdadjoke.com/search",
          config
        );
        commit("setJokes", res.data.results);
      } catch (err) {
        console.log(err);
      }
    },

    async searchJoke({ commit }, text) {
      commit("setJokes", []);
      const config = {
        headers: {
          Accept: "application/json"
        }
      };
      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );
        commit("setJokes", res.data.results);
      } catch (err) {
        console.log(err);
      }
    },
    setLoading({ commit, state }, value) {
      commit("setLoading", value);
    }
  },
  getters: {
    allJokes: state => state.jokes,
    isLoading: state => state.isLoading
  },
  mutations: {
    setJokes: (state, data) => (state.jokes = data),
    setLoading: (state, data) => (state.isLoading = data)
  }
};
