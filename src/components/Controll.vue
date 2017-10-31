<template>
    <div>
        <button @click="addIngredient('bacon')">Přidat Slaninu</button>
        <button @click="addIngredient('salad')">Přidat Salát</button>
        <button @click="addIngredient('chesse')">Přidat Sýr</button>
        <button @click="addIngredient('meat')">Přidat Maso</button>
        <button @click="toggleSeeds">Přidat/Odebrat semínka</button>
    </div>
</template>

<script>
export default {
  methods: {
    addIngredient(paylod) {
      this.$store.dispatch("addIngredient", paylod);
    },
    toggleSeeds() {
      this.$store.dispatch("toggleSeeds");
    }
  }
};
</script>

<style scoped>
 button {
     border-radius: 0;
     border: 1px solid black;
     background-color: transparent;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     font-size: 1em;
     transition: .25s opacity ease-in-out;
 }
 button:hover {
     opacity: 0.7;
 }
</style>