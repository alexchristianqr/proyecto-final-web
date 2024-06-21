const mixinAccountService = {
  methods: {
    async register() {
      const url = `${this.baseUrl}/post`;// https://api.php/
      const data = {};

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
      });

      const { status } = response;

      if (status === 200) {
        this.setStorage("user", this.formAccount, true);
        return true;
      }

      return false;
    }
  }
};
