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
        alert("Error al iniciar sesión");
        return;
      }
    }
  }
});
