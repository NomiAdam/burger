<template>
  <div>
    <button @click="addIngredient('bacon')">Přidat Slaninu</button>
    <button @click="addIngredient('salad')">Přidat Salát</button>
    <button @click="addIngredient('chesse')">Přidat Sýr</button>
    <button @click="addIngredient('meat')">Přidat Maso</button>
    <button @click="toggleSeeds">Přidat/Odebrat semínka</button>
    <button @click="saveBurger">Kup burger</button>
    <h5>Click on ingredient to delete it from burger</h5>
  </div>
</template>

<script>
export default {
  methods: {
    addIngredient(payload) {
      const date = new Date();
      let price;
      switch (payload) {
        case "bacon":
          price = 10;
          break;
        case "salad":
          price = 5;
          break;
        case "chesse":
          price = 15;
          break;
        case "meat":
          price = 20;
          break;
        default:
          price = 0;
          break;
      }
      const item = {
        id: date.getTime(),
        type: payload,
        price: price
      };
      this.$store.dispatch("addIngredient", item);
    },
    toggleSeeds() {
      this.$store.dispatch("toggleSeeds");
    },
    saveBurger() {
      if (this.$store.getters.getIngredients.length !== 0) {
        this.$store.dispatch("saveBurger");
      } else {
        console.log("You have to choose ingredients");
      }
    },
    goTo() {
      this.$router.push("/history");
    }
  }
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 5px;
  border-radius: 0;
  border: 1px solid black;
  background-color: transparent;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1em;
  transition: 0.25s opacity ease-in-out;
}
button:hover {
  opacity: 0.7;
}
</style>