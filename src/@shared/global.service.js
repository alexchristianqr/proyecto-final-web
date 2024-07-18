const mixinGlobalService = {
  data: () => ({
    baseUrl: "http://proyecto-final-web.test/api/v1/service",
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
        destino: "Nevado del Auzangate",
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
        imagen: "assets/imagenes/arequipa_003.jpg",
        region: "AREQUIPA",
        destino: "Ruta del Sillar",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: "assets/imagenes/ica_002.jpg",
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
        imagen: "assets/imagenes/ica_003.jpg",
        region: "ICA",
        destino: "Lineas de Nazca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: "assets/imagenes/cajamarca_001.jpg",
        region: "CAJAMARCA",
        destino: "Baños del Inca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_002.jpg",
        region: "CAJAMARCA",
        destino: "Provincia de San Pablo",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_003.jpg",
        region: "CAJAMARCA",
        destino: "Ventanillas de Combayo",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },

      {
        imagen: "assets/imagenes/lima_001.jpg",
        region: "LIMA",
        destino: "Circuito Mágico del Agua",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_002.png",
        region: "LIMA",
        destino: "Lunahuana",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_003.jpg",
        region: "LIMA",
        destino: "Huaral",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_004.jfif",
        region: "CUSCO",
        destino: "Sacaywaman",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_005.jpg",
        region: "CUSCO",
        destino: "Centro Historico de Cusco",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_006.jfif",
        region: "CUSCO",
        destino: "Qorikancha",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_007.jfif",
        region: "CUSCO",
        destino: "Santuario animal de Cochahuasi",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_008.jpg",
        region: "CUSCO",
        destino: "Tambomachay",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_009.jfif",
        region: "CUSCO",
        destino: "Cerro 7 colores",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cusco_010.jpg",
        region: "CUSCO",
        destino: "Islay",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_004.jpg",
        region: "AREQUIPA",
        destino: "Puerto Inka",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_005.jfif",
        region: "AREQUIPA",
        destino: "Chachani",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_006.jpg",
        region: "AREQUIPA",
        destino: "Reserva Nacional de Salinas y Aguada Blanca",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_007.jpg",
        region: "AREQUIPA",
        destino: "Yanahuara",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_008.avif",
        region: "AREQUIPA",
        destino: "Mirador Carmen Alto",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_009.jpg",
        region: "AREQUIPA",
        destino: "Misti",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/arequipa_010.jpg",
        region: "AREQUIPA",
        destino: "Cañon de Cotahuasi",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_004.jfif",
        region: "ICA",
        destino: "Huacachina",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_005.avif",
        region: "ICA",
        destino: "Tacama",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_006.jpg",
        region: "ICA",
        destino: "Tambo Colorado",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_007.jfif",
        region: "ICA",
        destino: "Reserva Nacional San Fernando",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_008.jfif",
        region: "ICA",
        destino: "Ciudad de Chincha",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_009.jfif",
        region: "ICA",
        destino: "Cañon de los Perdidos",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/ica_010.jpg",
        region: "ICA",
        destino: "Tabernero",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_004.avif",
        region: "CAJAMARCA",
        destino: "Cerro Santa Apolonia",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_005.avif",
        region: "CAJAMARCA",
        destino: "Laguna San Nicolas",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_006.jpg",
        region: "CAJAMARCA",
        destino: "Granja Porcón",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_007.jpg",
        region: "CAJAMARCA",
        destino: "Jaén",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_008.jfif",
        region: "CAJAMARCA",
        destino: "Ventanillas de Otuzco",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_009.jpg",
        region: "CAJAMARCA",
        destino: "Parque Nacional Cutervo",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/cajamarca_010.jpg",
        region: "CAJAMARCA",
        destino: "Ciudad de Cajabamba",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_004.jfif",
        region: "LIMA",
        destino: "Barranco",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_005.jpg",
        region: "LIMA",
        destino: "Catacumbas Museo San Francisco",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_006.webp",
        region: "LIMA",
        destino: "Centro Historico de Lima",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_007.avif",
        region: "LIMA",
        destino: "Palacio de Gobierno",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_008.png",
        region: "LIMA",
        destino: "Santiago de Surco",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_009.jpg",
        region: "LIMA",
        destino: "Barrio Chino",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
      {
        imagen: "assets/imagenes/lima_010.jpg",
        region: "LIMA",
        destino: "Plaza San Martin",
        personas: "1 Adultos - 0 Infantes - 1 Habitacion(es)",
        fecha_entrada: "31-05-2024",
        fecha_salida: "31-05-2024"
      },
    ]
  }),
  methods: {
    response({ success = false, message = null, result = null }) {
      return {
        success,
        message,
        result
      };
    },
    load(callback) {
      // if (!this.getStorage("destinos_turisticos")) {
      this.setStorage("destinos_turisticos", this.itemsDestinosTuristicos, true);
      callback(this.itemsDestinosTuristicos);
      // }
    },
    showAlert(message) {
      alert(message);
    },
    mapStorage(item, isJson = false, callback) {
      let dataItem = this.getStorage(item, isJson);

      if (!Array.isArray(dataItem)) throw new Error("[dataItem] no es un arreglo");

      return callback(dataItem);
    },
    pushStorage(item, data, isJson = false) {
      let dataItem = this.getStorage(item, isJson);

      if (typeof data === "Object") throw new Error("[data] no es un objeto");
      if (!dataItem) dataItem = [];
      if (!Array.isArray(dataItem)) throw new Error("[dataItem] no es un arreglo");

      dataItem.push(data);
      this.setStorage(item, dataItem, isJson);
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
