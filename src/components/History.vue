<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-for="burger in burgers" :key="burger.id" style="width:100%">
          <div class="wrapper">
            <div class="top">
              <div v-if="burger.seeds" class="seed"></div>
            </div>
            <div v-for="(item, key) in burger.ingredients" :key="key" :class="item">&nbsp;</div>
            <div class="bottom"></div>
          </div>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{burger.id}}</h3>
            </div>
          </v-card-title>
          <h4 style="text-decoration: underline">Ingredients</h4>
          <ul>
            <li v-for="(item, key) in burger.ingredients" :key="key">{{item}}</li>
          </ul>
          <v-card-actions>
            <!--TODO - make share button work-->
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange" @click="deleteFromFirebase(burger.id)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  computed: {
    burgers() {
      return this.$store.getters.getBurgers;
    }
  },
  methods: {
    deleteFromFirebase(payload) {
      this.$store.dispatch("deleteFromFirebase", payload);
    }
  }
};
</script>

<style scoped>
* {
  text-align: center;
  width: 100%;
}
ul {
  list-style: none;
  padding: 10px;
}
.wrapper {
  height: 250px;
  width: 200px;
  margin: auto;
  padding-top: 50px;
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

