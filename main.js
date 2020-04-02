var app = new Vue({
  el: '#app',
  data: {
    items: [
      {
        id: 1,
        title: 'Notebook',
        descript:
          'Absolutely new and the most progressive laptop.',
        price: 1690,
        qty_onstore: 3,
        qty: 1
      },
      {
        id: 2,
        title: 'Mouse',
        descript: 'Wireless mouse suitable for all your devices.',
        price: 69,
        qty_onstore: 5,
        qty: 1
      },
      {
        id: 3,
        title: 'Keyboard',
        descript: 'New wireless keybord with longlife battery.',
        price: 299,
        qty_onstore: 4,
        qty: 1
      },
      {
        id: 4,
        title: 'TouchPad',
        descript: 'Stylish and simple wireless new generation device.',
        price: 199,
        qty_onstore: 2,
        qty: 1
      }
    ],
    cart: [],
    show: false,
    total: 0
  },
  methods: {
    increment: function(data) {
      if (data.qty < data.qty_onstore) {
        data.qty++;
      }
    },
    decrement: function(data) {
      if (data.qty > 1) {
        data.qty--;
      }
    },
    addToCart: function(data) {
      if (this.cart.length == 0) {
        this.cart.unshift(data);
      } else {
        this.cart.forEach(item => {
          if (item.id === data.id) {
            if (item.qty < item.qty_onstore) {
              item.qty++;
            }
          }
        });
        if (!this.cart.find(item => item.id === data.id)) {
          this.cart.unshift(data);
        }
      }
      this.countTotal();
    },
    delFromCart: function(data) {
      this.cart.splice(this.cart.indexOf(data), 1);
      data.qty = 1;
    },
    viewCart: function(event) {
      if (this.show == true) {
        if (event.target != document.querySelector('.cart')) {
          return;
        }
      }
      return (this.show = !this.show);
    },
    clearCart: function() {
      this.cart.splice(0);
      this.items.forEach(item => (item.qty = 1));
    },
    countTotal: function() {
      console.log(this.total);
    }
  }
});
