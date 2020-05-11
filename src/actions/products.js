import axios from 'axios';

const baseURL = 'https://webshop-db.herokuapp.com/products';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const getProducts = () => (dispatch) => {
  axios
    .get(`${baseURL}`)
    .then((response) => {
      const products = response.data;
      return products;
    })
    .then((products) => {
      dispatch(setProducts(products));
    });
};
