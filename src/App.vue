<template>
  <div id="app">
    <v-container>
      <v-toolbar absolute dense>
        <v-toolbar-title>Burger builder</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat @click="goTo('')">Objednávka</v-btn>
          <v-btn flat @click="goTo('history')">Historie</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
    <main class="mt-5">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    goTo(payload) {
      this.$router.push("/" + payload);
    }
  }
};
</script>

<style>
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
  width: 100%;
  position: relative;
}
</style>
