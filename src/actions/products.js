import axios from 'axios';

const baseURL = 'https://webshop-db.herokuapp.com/products';

export const getProductsStart = () => ({
  type: 'GET_PRODUCTS_START',
});

export const getProductsSuccess = (products) => ({
  type: 'GET_PRODUCTS_SUCCESS',
  payload: products,
});

export const getProductsFailure = (errorMessage) => ({
  type: 'GET_PRODUCTS_FAILURE',
  payload: errorMessage,
});

export const getProducts = () => (dispatch) => {
  dispatch(getProductsStart());
  axios
    .get(`${baseURL}`)
    .then((response) => {
      const products = response.data;
      return products;
    })
    .then((products) => {
      dispatch(getProductsSuccess(products));
    })
    .catch((error) => dispatch(getProductsFailure(error.message)));
};
