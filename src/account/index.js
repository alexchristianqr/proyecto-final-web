new Vue({
  el: "#app",
  data: () => ({
    formAccount: {
      fullname: null,
      email: null,
      password: null,
      repeat_password: null
    }
  }),
  mounted() {},
  methods: {
    submitFormAccount() {
      console.log(this.formAccount);
    }
  }
});
