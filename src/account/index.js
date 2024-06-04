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
      this.itemsReservaciones.push(this.formReservacion);
    }
  }
});
