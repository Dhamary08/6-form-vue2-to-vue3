<template>
  <div class="fcc my-5">
    <h3 class="mb-4">Registro</h3>
    <vue-form :state="formState" @submit.prevent="submit()" class="d-flex">
      <b-container>
        <b-row>
          <b-col cols="6">
            <!-- NOMBRE COMPLETO -->
            <validate tag="label" :custom="{ validator: fullNameValidator }">
              <label for="name" class="d-flex flex-column text-left">
                Nombre
                <input type="text" v-model="model.name" name="name" required />
              </label>
              <field-messages>
                <div class="text-success small">Correcto</div>
                <div slot="required" class="small">Nombre es obligatorio</div>
                <div slot="validator" class="small text-danger">
                  Nombre es obligatorio
                </div>
              </field-messages>
            </validate>
          </b-col>
          <b-col cols="6">
            <validate tag="label" :custom="{ validator: nicknameValidator }">
              <label for="nickname" class="d-flex flex-column text-left">
                Apodo
                <input type="text" v-model="model.nickname" name="nickname" required />
              </label>
              <field-messages>
                <div class="text-success small">Correcto</div>
                <div slot="required" class="small">solo letras y números</div>
                <div slot="validator" class="small text-danger">
                  El apodo es obligatorio
                </div>
              </field-messages>
            </validate>
          </b-col>
          <!-- EMAIL -->
          <b-col cols="6 my-3">
            <validate tag="label" :custom="{ validator: mailValidator }">
              <label for="email" class="d-flex flex-column text-left">
                Correo Electrónico
                <input type="email" v-model="model.email" name="email" required />
              </label>
              <field-messages>
                <div class="text-success small">Correcto</div>
                <div slot="required" class="small">El correo es obligatorio</div>
                <div slot="validator" class="text-danger small">
                  El correo es obligatorio
                </div>
              </field-messages>
            </validate>
          </b-col>
          <!-- CONTRASEÑA -->
          <b-col cols="6 my-3">
            <validate tag="label" :custom="{ validator: passwordValidator }">
              <label for="password" class="d-flex flex-column text-left">
                Contraseña
                <input
                  type="password"
                  v-model="model.password"
                  name="password"
                  required
                />
              </label>
              <field-messages>
                <div class="text-success small">Correcto</div>
                <div slot="required" class="small">Contraseña es obligatorio</div>
                <div slot="validator" class="text-danger small">
                  La Contraseña tienen que ser mayor a 8 caracteres y contener números
                </div>
              </field-messages>
            </validate>
          </b-col>

          <b-col cols="12">
            <validate tag="label" :custom="{ validator: termsValidator }">
              <label for="terms" class="d-flex text-left">
                <input type="checkbox" v-model="model.terms" name="terms" class="mr-2" />
                Acepta términos y condiciones
              </label>
              <field-messages>
                <div class="text-success small">Correcto</div>
                <div slot="validator" class="text-danger small">obligatorio</div>
              </field-messages>
            </validate>
          </b-col>
          <b-col cols="12">
            <button class="btn btn-info my-3" type="submit">Enviar</button>
          </b-col>
        </b-row>
      </b-container>
    </vue-form>
    <!-- <pre>
      invalid: {{ formState.$invalid }}
      valid: {{ formState.$valid }}
    </pre>
    submittedState: {{ formState.$submittedState }}
    <div v-for="(value, key) in formState.$error" :key="key">
      <p>{{ key }} : {{ value }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      formState: {},
      model: {
        name: '',
        password: '',
        email: '',
        terms: false,
        nickname: '',
      },
    };
  },
  methods: {
    console(text) {
      console.log('text', text);
    },
    fullNameValidator: (value) => {
      let response = false;
      if (/^[a-zA-Z ñÑáéíóúÁÉÍÓÚ]*$/.test(value)) {
        response = true;
      }
      return response;
    },
    nicknameValidator: (value) => {
      let response = false;
      if (!/[^a-zA-Z0-9]/.test(value)) {
        response = true;
      }
      return response;
    },
    passwordValidator: (value) => {
      let response = false;
      if (/[0-9]/g.test(value) && value.length > 8) {
        response = true;
      }
      return response;
    },
    mailValidator: (value) => {
      let response = false;
      if (value.includes('@') && value.includes('.com')) {
        response = true;
      }
      return response;
    },
    termsValidator: (value) => value,
    submit() {
      if (this.formState.$invalid) {
        this.$bvToast.toast('Error al enviar el formulario', {
          title: 'Alerta',
          autoHideDelay: 5000,
          variant: 'warning',
        });
      } else {
        this.$bvToast.toast('Formulario enviado con éxito', {
          title: 'Mensaje',
          autoHideDelay: 5000,
          variant: 'success',
        });
        this.$emit('sent-form', this.model);
      }
    },
  },
};
</script>

<style scoped></style>
