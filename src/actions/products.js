import axios from 'axios';

export const SET_PRODUCTS = 'SET_PRODUCTS';

const baseURL = 'https://webshop-db.herokuapp.com/products';
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
    axios
      .get(`${baseURL}`)
      .then(function(response) {
        const products = response.data;
        return products;
        // console.log(products);
      })
      .then(products => {
        dispatch(setProducts(products));
      });
  };
}
