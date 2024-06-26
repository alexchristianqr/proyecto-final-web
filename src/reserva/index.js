new Vue({
  el: "#app",
  mixins: [mixinGlobalService],
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
    selected: "reserva",
    options: [
      { text: "DESTINOS", value: "destinos", icon: "bi bi-search" },
      { text: "RESERVA", value: "reserva", icon: "bi bi-file-earmark-text" },
      { text: "MIS RESERVACIONES", value: "mis_reservaciones", icon: "bi bi-list-check" }
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
  beforeMount() {
    this.checkAccessToken();
  },
  mounted() {},
  methods: {
    submitFormReserva() {
      this.loading.button = true;
      this.itemsReservaciones.push(this.formReservacion);

      setInterval(() => {
        this.loading.button = false;
      }, 5000);
    },
    seleccionarMenu(value) {
      this.loading.radio = true;

      console.log({ value });
      switch (value) {
        case "reserva":
          setTimeout(() => {
            this.initFormReserva();
            this.loading.radio = false;
          }, 3000);
          break;
        case "mis_reservaciones":
          setTimeout(() => {
            this.listarReservaciones();
            this.loading.radio = false;
          }, 3000);
          break;
        default:
          console.error("Opcion no permitida");
      }

      // this.loading.radio = false;
    },
    initFormReserva() {
      // alert("Formulario reserva");
    },
    listarReservaciones() {
      // alert("Mi lista de reservaciones");
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
