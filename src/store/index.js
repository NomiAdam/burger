import Vue from "vue";
import Vuex from "vuex";

import * as firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        burger: {
            ingredients: [],
            totalPrice: 0
        },
        burgers: [{}],
        seeds: false
    },
    mutations: {
        addIngredients(state, payload) {
            const ingredient = {
                id: payload.id,
                type: payload.type
            }
            const totalPrice = state.burger.totalPrice + payload.price;
            state.burger.ingredients.push(ingredient);
            state.burger.totalPrice = totalPrice;
        },
        toggleSeeds(state) {
            state.seeds = !state.seeds;
        },
        removeIngredient(state, payload) {
            const newArray = state.burger.ingredients.filter(elem => payload != elem.id);
            state.burger.ingredients = newArray;
        },
        fetchBurgers(state, payload) {
            state.burgers = payload;
        },
        resetBurger(state) {
            state.burger = {
                ingredients: [],
                totalPrice: 0
            },
            state.seeds = false;
        },
        removeBurger(state, payload) {
            const newArray = state.burgers.filter(data => data.id !== payload);
            state.burgers = newArray;
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
        },
        saveBurger({ commit, state }) {
            const ingredients = [];
            state.burger.ingredients.forEach(item => ingredients.push(item.type));
            const burger = {
                totalPrice: state.burger.totalPrice,
                ingredients,
                seeds: state.seeds
            }
            firebase.database().ref("orders").push(burger).then(() => commit("resetBurger")).catch(err => console.log(err));
        },
        fetchBurgers({ commit }) {
            firebase.database().ref("orders").on("value", data => {
                const arrayOfBurgers = [];
                let obj = data.val();
                for (let key in obj) {
                    const burger = {
                        id: key,
                        ingredients: obj[key].ingredients,
                        totalPrice: obj[key].totalPrice,
                        seeds: obj[key].seeds
                    }
                    arrayOfBurgers.push(burger);
                    commit("fetchBurgers", arrayOfBurgers);
                }
                (err) => console.log(err)
            });
        },
        deleteFromFirebase({ commit }, payload) {
            console.log(payload);
            firebase.database().ref("orders").child(payload).remove().then(() => {
                commit("removeBurger", payload);
            }).catch(err => {
                console.log(err);
            })
        }
    },
    getters: {
        getIngredients(state) {
            return state.burger.ingredients;
        },
        getSeeds(state) {
            return state.seeds;
        },
        getTotalPrice(state) {
            let price = state.burger.totalPrice;
            if (state.seeds) price += 5;
            return price;
        },
        getBurgers(state) {
            return state.burgers;
        }
    }
});