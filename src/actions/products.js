export const SET_PRODUCTS = 'SET_PRODUCTS';

export function setProducts(products) {
  return {
    type: 'SET_PRODUCTS',
    payload: {
      products
    }
  };
}
export function getProducts() {
  return function(dispatch) {
    fetch('http://webshop-db.herokuapp.com/products')
      .then(res => res.json())
      .then(products => {
        console.log('products', products);
        dispatch(setProducts(products));
      });
  };
}
