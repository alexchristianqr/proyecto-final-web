new Vue({
  el: "#app",
  mixins: [mixinGlobalService, mixinLoginService],
  data: () => ({
    inputTypePass: "password",
    labelTypePass: "mostrar",
    formLogin: {
      email: "admin@gmail.com",
      password: "Peru2024@"
    }
  }),
  mounted() {
    this.setRedirectEmail();
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
      console.log(this.formLogin);

      const isLoggedIn = await this.login();
      const { email, password } = this.formLogin;

      if (email === "admin@gmail.com" && password === "Peru2024@") {
        window.location.replace("reserva.html");
      } else {
        this.showAlert("Error al iniciar sesión");
        return;
      }
    },
    setRedirectEmail() {
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
