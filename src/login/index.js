new Vue({
  el: "#app",
  mixins: [mixinGlobalService, mixinLoginService],
  data: () => ({
    inputTypePass: "password",
    labelTypePass: "mostrar",
    formLogin: {
      email: "",
      password: ""
    }
  }),
  beforeMount() {
    this.existsAccessToken();
  },
  mounted() {
    this.setCompleteEmail();
  },
  methods: {
    showPassword() {
      if (this.inputTypePass === "text") {
        this.inputTypePass = "password";
        this.labelTypePass = "mostrar";
      } else {
        this.inputTypePass = "text";
        this.labelTypePass = "ocultar";
      }
    },
    async submitFormLogin() {
      this.loading.button = true;

      const { email, password } = this.formLogin;
      const { success } = await this.login(email, password);

      if (!success) {
        this.loading.button = false;
        this.showAlert("Error al iniciar sesión");
        return;
      }

      const url = "/reserva.html";
      this.redirectUrl(url, 5000);
    },
    setCompleteEmail() {
      const urlParams = new URLSearchParams(window.location.search);
      const email = urlParams.get("email");
      if (email) {
        this.formLogin.email = email === "null" ? "" : email;
        this.formLogin.password = null;
        this.$refs.utpInputPassword.focus(); // Aplicar focus
      }
    }
  }
});
