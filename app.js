const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addBtn(num) {
      this.number = this.number + num;
    },
  },
  computed: {
    RESULT() {
      if (this.number != 37) {
        if (this.number < 37) {
          return `Not there yet | ${this.number}`;
        } else {
          return `Too much! | ${this.number}`;
        }
      } else {
        return this.number;
      }
    },
  },
  watch: {
    number(value) {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
});
app.mount("#assignment");
