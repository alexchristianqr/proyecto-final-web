new Vue({
  el: "#app",
  mixins: [mixinGlobalService, mixinAccountService],
  data: () => ({
    formAccount: {
      fullname: null,
      email: null,
      password: null,
      repeat_password: null
    }
  }),
  beforeMount() {
    this.existsAccessToken();
  },
  mounted() {},
  methods: {
    async submitFormAccount() {
      this.loading.button = true;
      const data = {
        "data_persona": {
          "nombre": this.formAccount.fullname,
          "apellido": "",
          "tipo_documento": null,
          "nrodocumento": null,
          "sexo": null,
          "edad": null
        },
        "data_cliente": {
          "empresa": "Personal"
        },
        "data_usuario": {
          "nombres":this.formAccount.fullname,
          "apellidos": "",
          "rol": "cliente",
          "username": this.formAccount.email,
          "pwd": this.formAccount.password,
          "estado": "activo"
        }
      }
      const response = await this.register(data);

      const { success } = response;

      if (!success) {
        this.loading.button = false;
        return;
      }

      this.showAlert("Usuario creado satisfactoriamente. Ir a iniciar sesión");
      const url = `login.html?email=${this.formAccount.email}`;
      this.redirectUrl(url, 0);
    }
  }
});
