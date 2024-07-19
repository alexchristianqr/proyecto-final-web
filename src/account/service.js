const mixinAccountService = {
  methods: {
    async register(data) {
      let response = {};

      try {
        const url = `${this.baseUrl}/account.php`;

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
    }
  }
};
