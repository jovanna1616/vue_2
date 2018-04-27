const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', productsList: []},
    {id: 2, firstName: 'Joan', lastName: 'Doe', email: 'joan@doe.com', productsList: []},
    {id: 3, firstName: 'Tom', lastName: 'White', email: 'tom@white.com', productsList: []},
    {id: 4, firstName: 'Jerry', lastName: 'Black', email: 'jerry@black.com', productsList: []}
];

export default class CustomerService{
    list() {
      return customers
    }

    removeCustomer(customer) {
      customers.splice(customers.indexOf(customer), 1);
    }
}
    
export const customerService = new CustomerService()