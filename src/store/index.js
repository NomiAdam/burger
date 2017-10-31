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
        },
        removeIngredient(state, payload) {
            const newArray = state.ingredients.filter(elem => payload != elem.key);
            state.ingredients = newArray;
        }
    },
    actions: {
        addIngredient({ commit }, payload) {
            commit("addIngredients", payload);
        },
        toggleSeeds({ commit }) {
            commit("toggleSeeds");
        },
        removeIngredient({ commit }, payload) {
            commit("removeIngredient", payload);
        }
    },
    getters: {
        getIngredients(state) {
            return state.ingredients;
        },
        getSeeds(state) {
            return state.seeds;
        },
        getTotalPrice(state) {
            let price = 10;
            state.ingredients.forEach(elem => price += elem.price);
            if (state.seeds) price += 5;
            return price;
        }
    }
});