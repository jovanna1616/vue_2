<template>
  <div>
    <input v-model="searchTerm" type="text" class="form-control" placeholder="search">
    <table>
        <thead>
          <th>Product ID</th>
          <th>Product title</th>
          <th>Product quantity</th>
          <th>&nbsp;</th>
        </thead>
        <tbody>
          <tr v-for="product in filterProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.quantity }}</td>
            <button @click="incrementQuantity(product)" class="btn btn-default">+</button>
            <button @click="decrementQuantity(product)" class="btn btn-default" v-if="product.quantity">-</button>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import { productService } from '../services/ProductService';

export default {
  name: 'AppProducts',
  data() {
    return {
      products: productService.list(),
      searchTerm: ''
    }
  },
  computed: {
    filterProducts() {
      return this.products.filter((product) => {
        return product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      });
    }
  },
  methods: {
    incrementQuantity(product) {
      productService.incrementQuantity(product);
    },
    decrementQuantity(product) {
      productService.decrementQuantity(product);
    }
  }
}
</script>

<style>

</style>
