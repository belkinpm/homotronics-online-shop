Vue.component('cart', {
  props: ['cart'],
  template: `
    <div class="cart" @click="$emit('view-cart', $event)">
      <div class="cart-items">
        <h2>Your cart</h2>
        <div class="empty" v-if="!this.cart.length">
          Cart is empty
        </div>
        <cart-item
          v-for="item in cart"
          :key="item.id"
          :item="item"
          @del-from-cart="$emit('del-from-cart', item)"
        />
        <div class="total" v-if="this.cart.length">
          Total: {{countTotal}} USD
        </div>
        <div class="buttons" v-if="this.cart.length">
          <button class="btn btn-order" @click="$emit('clear-cart')">
            Complete order
          </button>
          <button class="btn btn-clear" @click="$emit('clear-cart')">
           Clear all
          </button>
        </div>
      </div>
    </div>
  `,
  computed: {
    countTotal() {
      let result = [0];

      this.cart.forEach((item) => {
        result.push(item.qty * item.price);
      });

      result = result.reduce((sum, el) => {
        return sum + el;
      });

      return result;
    }
  }
});

Vue.component('cart-item', {
  props: ['item'],
  template: `
    <div class="cart-item">
      <img :src="'../img/' + item.id + '.jpeg'" alt="" />
      <h4>{{item.title}}</h4>
      <item-counter :item="item" />
      <p>{{item.price * item.qty}} USD</p>
      <button class="btn btn-del" @click="$emit('del-from-cart', item)">
        &times;
      </button>
    </div>
    `
});
