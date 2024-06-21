const mixinGlobalService = {
  data: () => ({
    baseUrl: "https://httpbin.org",
    loading: {
      button: false,
      radio: false,
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
    }
  }
};
