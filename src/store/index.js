import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        ingredients: [],
        seeds: false
    },
    mutations: {
        addIngredients(state, payload) {
            state.ingredients.push(payload);
        },
        toggleSeeds(state) {
            state.seeds = !state.seeds;
        }
    },
    actions: {
        addIngredient({ commit }, payload) {
            commit("addIngredients", payload);
        },
        toggleSeeds({ commit }) {
            commit("toggleSeeds");
        }
    },
    getters: {
        getIngredients(state) {
            return state.ingredients;
        },
        getSeeds(state) {
            return state.seeds;
        }
    }
});