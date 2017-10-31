<template>
    <div class="wrapper">
        <div class="top">
            <div v-if="seeds" class="seed"></div>
        </div>
        <div v-for="ingredient in ingredients" :key="ingredient" :class="ingredient"></div>
        <div class="bottom"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    ingredients() {
      return this.$store.getters.getIngredients;
    },
    seeds() {
      return this.$store.getters.getSeeds;
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 480px;
  width: 480px;
  margin: 20px auto;
}

.top {
  width: 80%;
  height: 15%;
  background: linear-gradient(#cc6918, #c46b19);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px -20px 10px #e27c28;
  margin: 5px auto;
  position: relative;
}

.seed {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10%;
  height: 10%;
  background-color: white;
  box-shadow: inset -3px -2px 5px #dbdbdb;
  border-radius: 50%;
  transform: rotate(-20deg);
}

.seed:after {
  content: "";
  position: absolute;
  top: -550%;
  left: -290%;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: inset -3px -2px 5px #dbdbdb;
  border-radius: 100%;
  transform: rotate(60deg);
}

.seed:before {
  content: "";
  position: absolute;
  top: 550%;
  left: 290%;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: inset -3px -2px 5px #dbdbdb;
  border-radius: 100%;
  transform: rotate(50deg);
}

.salad {
  width: 90%;
  height: 3%;
  background: linear-gradient(#389b11, #216d03);
  margin: 5px auto;
  border-radius: 20px;
}

.chesse {
  height: 2.5%;
  width: 87%;
  background: linear-gradient(#efcd23, #ffd400);
  border-radius: 50px;
  margin: 5px auto;
}

.bacon {
  width: 80%;
  height: 1.5%;
  background: linear-gradient(#b22c07, #b25306);
  margin: 5px auto;
}

.meat {
  height: 5%;
  width: 85%;
  background: linear-gradient(#843e05, #9e5417);
  margin: 5px auto;
  border-radius: 20px;
}

.bottom {
  width: 80%;
  height: 10%;
  background: linear-gradient(#cc6918, #c46b19);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px -20px 10px #e27c28;
  margin: auto;
}
</style>
