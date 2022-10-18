<template>
  <div id="app">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="7">
          <VueForm @sent-form="sentForm" />
        </b-col>
        <b-col cols="10">
          <TableRegister :items="formList" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueForm from './components/VueForm.vue';
import TableRegister from './components/TableRegister.vue';

export default {
  name: 'App',
  components: {
    VueForm,
    TableRegister,
  },
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
