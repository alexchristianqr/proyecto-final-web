const mixinGlobalService = {
  data: () => ({
    baseUrl: "https://httpbin.org"
  }),
  methods: {
    getStorage(item, isJson = false) {
      const data = localStorage.getItem(item);
      if (isJson) return JSON.parse(data);
      return data;
    },
    setStorage(item, data, isJson = false) {
      if (isJson) {
        const dataJson = JSON.stringify(data);
        localStorage.setItem(item, dataJson);
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
