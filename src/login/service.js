const mixinLoginService = {
  methods: {
    async login(username, password) {
      let response = {};

      try {
        const url = `${this.baseUrl}/login.php`;
        const data = { username, password };

        const fetchResponse = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data)
        });

        response = await fetchResponse.json();
        const { success, result } = response;

        if (success) {
          this.setStorage("accessToken", "abc123");
          this.setStorage("fullname", result[0]["nombres"])
        }
      } catch (e) {
        console.error(e);
      }

      return this.response(response);
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
