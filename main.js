const API = 'api';

new Vue({
  el: '#app',
  data: {
    userSearch: '',
    items: [],
    filtered: [],
    cart: [],
    show: false,
  },

  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => console.log(error));
    },
    filter() {
      let regexp = new RegExp(this.userSearch, 'i');
      this.filtered = this.items.filter((item) => regexp.test(item.title));
    },
    addToCart(data) {
      if (this.cart.length == 0) {
        this.cart.unshift(data);
      } else {
        this.cart.forEach((item) => {
          if (item.id === data.id) {
            if (item.qty < item.qty_onstore) {
              item.qty++;
            }
          }
        });
        if (!this.cart.find((item) => item.id === data.id)) {
          this.cart.unshift(data);
        }
      }
    },
    delFromCart(data) {
      this.cart.splice(this.cart.indexOf(data), 1);
      data.qty = 1;
    },
    viewCart(event) {
      if (this.show == true) {
        if (event.target != document.querySelector('.cart')) {
          return;
        }
      }
      return (this.show = !this.show);
    },
    clearCart() {
      this.cart.splice(0);
      this.items.forEach((item) => (item.qty = 1));
    },
  },

  mounted() {
    this.getJson(`${API}/catalog.json`).then((data) => {
      for (let item of data) {
        this.$data.items.push(item);
        this.$data.filtered.push(item);
      }
    });
  },
});
