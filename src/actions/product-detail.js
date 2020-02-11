import superagent from 'superagent';

export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

export function setProductsDetails(product) {
  return {
    type: 'SET_PRODUCTS_DETAILS',
    payload: product
  };
}

export function getProductDetail(productId) {
  return function(dispatch) {
    superagent(`https://webshop-db.herokuapp.com/products/${productId}`)
      .then(response => response.body)
      .then(product => {
        dispatch(setProductsDetails(product));
      });
  };
}
