const mixinAccountService = {
  methods: {
    async register() {
      let success = false;

      try {
        const url = `${this.baseUrl}/post`; // https://api.php/
        const data = {};

        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data)
        });

        const { status } = response;

        if (status === 200) {
          this.pushStorage("usuarios", { ...this.formAccount }, true);
          success = true;
        }
      } catch (e) {
        console.error(e);
      }

      return this.response({ success });
    }
  }
};
