const mixinLoginService = {
  methods: {
    async login(username, password) {
      let success = false;

      try {
        const url = `${this.baseUrl}/login.php`;
        const data = { username, password };
        // const data = { username: "admin@gmail.com", password: "Peru2024." };

        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data)
        });

        console.log({response});

        const { status } = response;

        if (status === 200) {
          // const exists = this.mapStorage("usuarios", true, (items) => {
          //   return items.find((item) => item.email === username && item.password === password);
          // });
          // if (!exists) {
          //   success = false;
          // } else {
            this.setStorage("accessToken", "abc123");
            success = true;
          // }
        }
      } catch (e) {
        console.error(e);
      }

      return this.response({ success });
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
