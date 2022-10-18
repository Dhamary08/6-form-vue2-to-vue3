<template>
  <div id="app">
    <b-container>
      <router-view to="/"></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formList: [],
    };
  },
  methods: {
    sentForm(value) {
      this.formList.push({ ...value });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 6em;
}
</style>
