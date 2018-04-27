<template>
  <div class="container">
    {{ customer.firstName }}
    {{ customer.lastName }}
    {{ customer.email }}
    <ul>
        <li v-for="(product, key) in customer.productsList" :key="key">
            {{ product.title }}
        </li>
    </ul>
    <li class="nav-item active">
      <router-link class="nav-item nav-link" to="/customers">go back to costumers <span class="sr-only">(current)</span></router-link>
    </li>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService';

export default {
  name: 'LatestPurchases',
  created() {
      this.customer = customerService.getCustomer(this.$route.params.id);
    }
}
</script>

<style>

</style>
