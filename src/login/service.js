const mixinLoginService = {
  methods: {
    async login() {
      const url = `${this.baseUrl}/post`;
      const data = { username: "admin@gmail.com", password: "Peru2024." };

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
      });

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

      const { status } = response;

      if (status === 200) {
        this.removeStorage("accessToken");
        return true;
      }

      return false;
    }
  }
};
