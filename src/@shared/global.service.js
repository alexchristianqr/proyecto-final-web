const mixinGlobalService = {
  data: () => ({
    baseUrl: "https://httpbin.org",
    loading: {
      button: false,
      radio: false
    },
    itemsDestinosTuristicos: [
      {
        imagen: "assets/imagenes/001.jpg",
        region: "CUSCO",
        destino: "Machu Picchu",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_003.jpeg",
        region: "CUSCO",
        destino: "Cuatro Lagunas",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_002.jpeg",
        region: "CUSCO",
        destino: "Nevado del Ausangate",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: "assets/imagenes/arequipa_001.jpeg",
        region: "AREQUIPA",
        destino: "Cañon del Colca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_002.jpeg",
        region: "AREQUIPA",
        destino: "Circuito de Playas Camaná",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "AREQUIPA",
        destino: "Ruta del Sillar",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: null,
        region: "ICA",
        destino: "Cerro Blanco",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_001.jpg",
        region: "ICA",
        destino: "Islas Ballestas",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "ICA",
        destino: "Lineas de Nazca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: null,
        region: "CAJAMARCA",
        destino: "Baños del Inca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "CAJAMARCA",
        destino: "Provincia de San Pablo",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "CAJAMARCA",
        destino: "Ventanillas de Combayo",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: null,
        region: "LIMA",
        destino: "Circuito Mágico del Agua",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "LIMA",
        destino: "Lunahuana",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: null,
        region: "LIMA",
        destino: "Huaral",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      }
    ]
  }),
  methods: {
    load(callback) {
      // if (!this.getStorage("destinos_turisticos")) {
      this.setStorage("destinos_turisticos", this.itemsDestinosTuristicos, true);
      callback(this.itemsDestinosTuristicos);
      // }
    },
    showAlert(message) {
      alert(message);
    },
    getStorage(item, isJson = false) {
      const data = localStorage.getItem(item);

      if (isJson) return JSON.parse(data);

      return data;
    },
    setStorage(item, data, isJson = false) {
      if (isJson) {
        const dataJson = JSON.stringify(data);
        localStorage.setItem(item, dataJson);
        return;
      }

      localStorage.setItem(item, data);
      return;
    },
    removeStorage(item) {
      localStorage.removeItem(item);
      return;
    },
    existsAccessToken() {
      const currentPathname = window.location.pathname;

      if (this.isValidAccessToken()) {
        switch (currentPathname) {
          case "/login.html":
          case "/account.html":
            const url = "/reserva.html";
            this.redirectUrl(url, 0);
            break;
          default:
            console.error("La página web no existe");
        }
      }

      return;
    },
    checkAccessToken() {
      if (!this.isValidAccessToken()) {
        const url = "/login.html";
        this.redirectUrl(url);
        this.showAlert("Su token ha expirado, por favor, inicie sesión nuevamente");
        return;
      }

      return;
    },
    isValidAccessToken() {
      let esValido = false;

      const accessToken = this.getStorage("accessToken") || false;
      esValido = accessToken;

      return esValido;
    },
    logout() {
      this.removeStorage("accessToken");

      const url = "/login.html";
      this.redirectUrl(url, 1000);
    },
    redirectUrl(url, time = 5000, callback) {
      setTimeout(() => {
        window.location.href = url;
        callback();
      }, time);
    }
  }
};
