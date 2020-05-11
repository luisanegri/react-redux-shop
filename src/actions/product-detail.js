import axios from 'axios';

const baseURL = 'https://webshop-db.herokuapp.com/products';

export const setItemDetail = (item) => ({
  type: 'SET_ITEM_DETAIL',
  payload: item,
});

export const getItemDetail = (itemId) => (dispatch) => {
  axios
    .get(`${baseURL}/${itemId}`)
    .then((response) => {
      const product = response.data;
      return product;
    })
    .then((product) => {
      dispatch(setItemDetail(product));
    });
};
