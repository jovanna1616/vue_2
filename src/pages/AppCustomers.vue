<template>
  <div>
    <table>
      <thead>
        <th>Customer ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
        <tr v-for="(customer, key) in customers" :key="key">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td><button @click="removeCustomer(customer)">Remove customer</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService';

export default {
  name: 'AppCustomers',
  data() {
    return {
      customers: customerService.list()
    }
  },
  methods: {
    removeCustomer(customer) {
      customerService.removeCustomer(customer);
    }
  }
}
</script>

<style>

</style>
