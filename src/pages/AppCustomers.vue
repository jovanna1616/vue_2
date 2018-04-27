<template>
  <div>
    <form @submit.prevent="addCustomer">
      <label for="Cutomer ID"></label>
      <input v-model="newCustomer.id" type="text" placeholder="Customer ID">
      <label for="Cutomer First Name"></label>
      <input v-model="newCustomer.firstName" type="text" placeholder="First Name">
      <label for="Cutomer Last Name"></label>
      <input v-model="newCustomer.lastName" type="text" placeholder="Last Name">
      <label for="Cutomer Email"></label>
      <input v-model="newCustomer.email" type="email" placeholder="Email">
      <button>Add customer</button>
    </form>
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
          <router-link :to="'/customers/'+ customer.id">Latest purchases <span class="sr-only">(current)</span></router-link>
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
      customers: customerService.list(),
      newCustomer: {
        id: '',
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  methods: {
    removeCustomer(customer) {
      customerService.removeCustomer(customer);
    },
    addCustomer() {
      customerService.addCustomer(this.newCustomer);
    }
  }
}
</script>

<style>

</style>
