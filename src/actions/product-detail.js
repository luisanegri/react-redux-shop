import superagent from 'superagent';

export const SET_ITEM_DETAIL = 'SET_ITEM_DETAIL';

export function setItemDetail(item) {
  return {
    type: 'SET_ITEM_DETAIL',
    payload: item,
  };
}

export function getItemDetail(itemId) {
  return function (dispatch) {
    superagent(`https://webshop-db.herokuapp.com/products/${itemId}`)
      .then((response) => response.body)
      .then((product) => {
        dispatch(setItemDetail(product));
      });
  };
}
