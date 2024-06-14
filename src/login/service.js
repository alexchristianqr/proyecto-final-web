const mixinLoginService = {
  data: () => ({}),
  methods: {
    async login() {
      const url = `${this.baseUrl}/post`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          username: "admin",
          password: "Peru2024."
        })
      });
      console.log({ response });

      const { status } = response;

      if (status === 200) {
        this.setStorage("accessToken", "abc123");
        return true;
      }

      return false;
    },
    async logout() {
      const url = `${this.baseUrl}/post`;
      const response = await fetch(url, {
        method: "POST"
      });
      console.log({ response });

      const { status } = response;

      if (status === 200) {
        this.removeStorage("accessToken");
        return true;
      }

      return false;
    }
  }
};
