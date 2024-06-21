new Vue({
  el: "#app",
  data: () => ({
    items: [
      { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      { age: 21, first_name: "Larsen", last_name: "Shaw" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 38, first_name: "Jami", last_name: "Carney" }
    ],
    selected: "reservar",
    options: [
      { text: "RESERVA", value: "reservar" },
      { text: "MIS RESERVACIONES", value: "mis_reservaciones" }
    ],
    fieldsReservaciones: [
      {
        key: "fullname",
        label: "Cliente",
        sortable: true,
        class: "align-middle"
      },
      {
        key: "email",
        label: "Correo",
        sortable: false,
        class: "align-middle"
      },
      {
        key: "habitacion",
        label: "Habitación",
        sortable: false,
        class: "align-middle"
      },
      {
        key: "fecha_entrada",
        label: "Fecha de Entrada",
        sortable: true,
        class: "align-middle"
      },
      {
        key: "fecha_salida",
        label: "Fecha de Salida",
        sortable: true,
        class: "align-middle"
      },
      {
        key: "actions",
        label: "Acciones",
        sortable: false
      }
    ],
    itemsReservaciones: [
      {
        fullname: "Alex Quispe",
        email: "alex.quispe@gmail.com",
        habitacion: "Habitacion Simple",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        fullname: "Alex Quispe",
        email: "alex.quispe@gmail.com",
        habitacion: "Habitacion Simple",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        fullname: "Alex Quispe",
        email: "alex.quispe@gmail.com",
        habitacion: "Habitacion Simple",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      }
    ],
    tipoHabitaciones: [
      { key: "simple", value: "Habitacion Simple" },
      { key: "doble", value: "Habitacion Doble" },
      { key: "suite", value: "Habitacion Suite Matrimonial" }
    ],
    formListaReservaciones: {
      nombre: null,
      fecha_entrada: null,
      fecha_salida: null
    },
    formReservacion: {
      nombre: null,
      email: null,
      destino: null,
      habitacion: "simple",
      fecha_entrada: null,
      fecha_salida: null,
      ajustes: {
        adultos: 1,
        infantes: 0,
        habitaciones: 1
      }
    }
  }),
  mounted() {},
  methods: {
    submitFormReservacion() {
      this.itemsReservaciones.push(this.formReservacion);
    },
    submitFormListaReservaciones() {
      alert(123);
    },
    onSeleccionarFechaEntrada(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.formReservacion.fecha_entrada = ctx.selectedYMD;
    },
    onSeleccionarFechaSalida(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.formReservacion.fecha_entrada = ctx.selectedYMD;
    }
  }
});
