
/**
 * @param {Number} price 
 * @param {Number} vat 
 * @returns {Number}
 */
function getDiscount(price, discount) {
  return price - price * (discount / 100);
}

/**
 * @param {Number} price 
 * @param {Number} vat 
 * @returns {Number}
 */
function getVat(price, vat) {
  return price * (vat / 100)
}

/**
 * @param {Array<Object>} products 
 * @returns {Number} 
 */
function getNumberOfProducts(products) {
    return products.
        reduce((totalProducts, product) => totalProducts + product.quantity, 0)
}

/**
 * @param {Array<Object>} products 
 * @returns {Number} 
 */
function getTotalBill(products) {
  return products
        .reduce((totalBill, product) => {
            const { price, discount, vat, quantity } = product,
                bill = (getDiscount(price, discount) + getVat(price, vat)) * quantity;
            
            return totalBill + bill;
        }, 0)
}

const products = [
  {
    price: 1000,
    quantity: 3,
    discount: 10,
    vat: 5
  },
  {
    price: 4999,
    quantity: 1,
    discount: 20,
    vat: 4.1
  },
  {
    price: 300,
    quantity:3,
    discount: 0,
    vat: 0
  },
  {
    price: 1800,
    quantity: 2,
    discount: 15,
    vat: 5
  },
  {
    price: 299,
    quantity: 4,
    discount: 0,
    vat: 0
  }
]

console.log(getTotalBill(products))
console.log(getNumberOfProducts(products))