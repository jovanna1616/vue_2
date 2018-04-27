const customers = [
  {id: 1, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', productsList: [{title: 'milk'}, {title: 'bread'}, {title: 'peach'}]},
  {id: 2, firstName: 'Joan', lastName: 'Doe', email: 'joan@doe.com', productsList: [{title: 'milk'}, {title: 'bread'}, {title: 'peach'}]},
  {id: 3, firstName: 'Tom', lastName: 'White', email: 'tom@white.com', productsList: [{title: 'milk'}, {title: 'bread'}, {title: 'peach'}]},
  {id: 4, firstName: 'Jerry', lastName: 'Black', email: 'jerry@black.com', productsList: [{title: 'milk'}, {title: 'bread'}, {title: 'peach'}]}
];

let nextId = ''

export default class CustomerService{
    list() {
      return customers
    }

    removeCustomer(customer) {
      customers.splice(customers.indexOf(customer), 1);
    }
    addCustomer(newCustomer) {
      customers.push(newCustomer);
      newCustomer = {
        id: '',
        firstName: '',
        lastName: '',
        email: ''
      }
    }
    getCustomer(id) {
        return customers.find((customer) => customer.id == id);
    }
}
    
export const customerService = new CustomerService()