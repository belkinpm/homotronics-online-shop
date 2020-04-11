Vue.component('item-counter', {
  props: ['item'],
  template: `
        <div class="qty-count">
            <button class="btn-decr" @click="decrement(item)">-</button>
            <div class="qty">{{item.qty}}</div>
            <button class="btn-incr" @click="increment(item)">+</button>
        </div>
    `,
  methods: {
    increment(item) {
      if (item.qty < item.qty_onstore) {
        item.qty++;
      }
    },
    decrement(item) {
      if (item.qty > 1) {
        item.qty--;
      }
    }
  }
});
