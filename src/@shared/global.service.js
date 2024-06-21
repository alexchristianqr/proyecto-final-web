const mixinGlobalService = {
  data: () => ({
    baseUrl: "https://httpbin.org",
    loading: {
      button: false,
      radio: false
    }
  }),
  methods: {
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
