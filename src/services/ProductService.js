const products = [
  {id: 1, title: 'Umbrella', quantity: 5},
  {id: 2, title: 'Car', quantity: 150},
  {id: 3, title: 'Doll', quantity: 250},
  {id: 4, title: 'Knife', quantity: 350},
  {id: 5, title: 'Glass', quantity: 450}
];

export default class CustomerService {
    list() {
      return products
    }

    incrementQuantity(product) {
        product.quantity++
    }

    decrementQuantity(product) {
        product.quantity--
    }
}

export const productService = new CustomerService()