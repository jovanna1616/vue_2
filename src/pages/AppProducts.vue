<template>
  <table>
      <thead>
        <th>Product ID</th>
        <th>Product title</th>
        <th>Product quantity</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { productService } from '../services/ProductService';

export default {
  name: 'AppProducts',
  data() {
    return {
      products: productService.list()
    }
  },
}
</script>

<style>

</style>
