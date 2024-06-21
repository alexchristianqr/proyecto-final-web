new Vue({
  el: "#app",
  mixins: [mixinGlobalService, mixinLoginService],
  data: () => ({
    loading: false,
    inputTypePass: "password",
    labelTypePass: "mostrar",
    formLogin: {
      email: "admin@gmail.com",
      password: "Peru2024."
    }
  }),
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
      this.loading = true;
      console.log(this.formLogin);

      const isLoggedIn = await this.login();
      const { email, password } = this.formLogin;

      if (password === "Peru2024.") {
        this.loading = false;
        window.location.replace("reserva.html");
      } else {
        this.loading = false;
        this.showAlert("Error al iniciar sesión");
        return;
      }
    },
    setCompleteEmail() {
      const urlParams = new URLSearchParams(window.location.search);
      const email = urlParams.get("email");
      if (email) {
        this.formLogin.email = email;
        this.formLogin.password = null;
        this.$refs.utpInputPassword.focus(); // Aplicar focus
      }
    }
  }
});
