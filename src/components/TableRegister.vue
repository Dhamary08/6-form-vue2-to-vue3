<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      fields: [
        { key: 'name', label: 'Nombre' },
        { key: 'nickname', label: 'Apodo' },
        { key: 'email', label: 'Correo Electónico' },
      ],
    };
  },
  /* methods:{

  } */
};
</script>
