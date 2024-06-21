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
      await this.register();
      this.showAlert("Usuario creado satisfactoriamente. Ir a iniciar sesión");
      const url = `login.html?email=${this.formAccount.email}`;
      this.redirectUrl(url, 0);
    }
  }
});
