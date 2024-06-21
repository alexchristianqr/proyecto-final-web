new Vue({
  el: "#app",
  data: () => ({
    optionsDestinos: [
      { key: null, value: "-- Seleccionar --" },
      { key: "cusco", value: "Cusco" },
      { key: "arequipa", value: "Arequipa" },
      { key: "ica", value: "Ica" },
      { key: "cajamarca", value: "Cajamarca" },
      { key: "lima", value: "Lima" }
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
    itemsReservaciones: [
      {
        imagen: "assets/imagenes/001.jpg",
        region: "cusco",
        destino: "Machu Picchu",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_003.jpeg",
        region: "cusco",
        destino: "Cuatro Lagunas",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_002.jpeg",
        region: "Cusco",
        destino: "Nevado del Ausangate",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: "assets/imagenes/arequipa_001.jpeg",
        region: "arequipa",
        destino: "Cañon del Colca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_002.jpeg",
        region: "arequipa",
        destino: "Circuito de Playas Camaná",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "arequipa",
        destino: "Ruta del Sillar",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: null,
        region: "ica",
        destino: "Cerro Blanco",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_001.jpg",
        region: "ica",
        destino: "Islas Ballestas",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "ica",
        destino: "Lineas de Nazca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: null,
        region: "cajamarca",
        destino: "Baños del Inca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "cajamarca",
        destino: "Provincia de San Pablo",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "cajamarca",
        destino: "Ventanillas de Combayo",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: null,
        region: "lima",
        destino: "Circuito Mágico del Agua",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "lima",
        destino: "Lunahuana",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "lima",
        destino: "Huaral",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      }
    ],
    tipoHabitaciones: [
      { key: "simple", value: "Habitacion Simple" },
      { key: "doble", value: "Habitacion Doble" },
      { key: "suite", value: "Habitacion Suite Matrimonial" }
    ],
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
    },
    formListaReservaciones: {
      nombre: null,
      fecha_entrada: null,
      fecha_salida: null
    }
  }),
  mounted() {},
  methods: {
    submitFormReservacion() {
      this.itemsReservaciones.push(this.formReservacion);
    },
    submitFormListaReservaciones() {
      alert("Filtrando...");
    },
    redirectLogin() {
      const urlRedirect = `account.html`;
      window.location.replace(urlRedirect);
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
