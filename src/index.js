new Vue({
  el: "#app",
  mixins: [mixinGlobalService],
  data: () => ({
    optionsDestinos: [
      { text: "Todos", value: null },
      { text: "Cusco", value: "cusco" },
      { text: "Arequipa", value: "arequipa" },
      { text: "Ica", value: "ica" },
      { text: "Cajamarca", value: "cajamarca" },
      { text: "Lima", value: "lima" }
    ],
    fieldsReservaciones: [
      {
        key: "destino",
        label: "Destino",
        sortable: false,
        class: "align-middle"
      },
      {
        key: "personas",
        label: "Personas",
        sortable: false,
        class: "align-middle"
      },
      {
        key: "fecha_entrada",
        label: "Fecha de Entrada",
        sortable: false,
        class: "align-middle"
      },
      {
        key: "fecha_salida",
        label: "Fecha de Salida",
        sortable: false,
        class: "align-middle"
      },
      {
        key: "actions",
        label: "Acciones",
        sortable: false
      }
    ],
    items: [],
    tipoHabitaciones: [
      { key: "simple", value: "Habitacion Simple" },
      { key: "doble", value: "Habitacion Doble" },
      { key: "suite", value: "Habitacion Suite Matrimonial" }
    ],
    filterReservacion: {
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
  mounted() {
    this.load((items) => {
      this.items = items;
    });
  },
  methods: {
    submitFormReservacion() {
      this.itemsReservaciones.push(this.formReservacion);
    },
    submitFilterListaReservaciones() {
      const items = this.getStorage("destinos_turisticos", true);

      if (!this.filterReservacion.destino) {
        this.items = items; // Todos los destinos
      } else {
        this.items = items.filter((item) => {
          return item.region.toUpperCase() === this.filterReservacion.destino.toUpperCase(); // Destino en específico
        });
      }
    },
    redirectLogin() {
      const urlRedirect = `account.html`;
      window.location.replace(urlRedirect);
    },
    onSeleccionarFechaEntrada(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.filterReservacion.fecha_entrada = ctx.selectedYMD;
    },
    onSeleccionarFechaSalida(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.filterReservacion.fecha_entrada = ctx.selectedYMD;
    }
  }
});
