new Vue({
  el: "#app",
  data: () => ({
    formLogin: {
      nombre: null,
      email: null,
      habitacion: "simple",
      fecha_entrada: null,
      fecha_salida: null
    }
  }),
  mounted() {},
  methods: {
    submitFormLogin() {
      console.log(this.formLogin);
      window.location.replace("reserva.html");
    }
  }
});
