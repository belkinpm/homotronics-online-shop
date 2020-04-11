Vue.component('catalog', {
  props: ['items'],
  template: `
    <div class="catalog">
      <h1>Catalog</h1>
      <catalog-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        @add-to-cart="$emit('add-to-cart', item)"
      />
    </div>
  `
});

Vue.component('catalog-item', {
    props: ['item'],
    template: `
      <div class="item">
        <img :src="'../img/' + item.id + '.jpeg'" alt="" />
        <h3>{{item.title}}</h3>
        <p class="descript">{{item.descript}}</p>
        <p class="onstock">On stock: {{item.qty_onstore}}</p>
        <p class="price">{{item.price}} USD</p>
        <item-counter :item="item" />
        <button class="btn btn-add" @click="$emit('add-to-cart', item)">
          Add to cart
        </button>
      </div>
    `
  });