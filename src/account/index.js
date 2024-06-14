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
  mounted() {},
  methods: {
    async submitFormAccount() {
      await this.register();
      this.showAlert("Usuario creado satisfactoriamente. Ir a iniciar sesión");
      const urlRedirect = `login.html?email=${this.formAccount.email}`;
      window.location.replace(urlRedirect);
    }
  }
});
