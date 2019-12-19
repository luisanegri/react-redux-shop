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
    fetch('http://localhost:3010/products')
      .then(res => res.json())
      .then(products => {
        dispatch(setProducts(products));
      });
  };
}
