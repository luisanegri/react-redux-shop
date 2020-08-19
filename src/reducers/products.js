import SHOP_PRODUCTS from './shop/shop-data';

const INITIAL_STATE = {
  productsList: SHOP_PRODUCTS,
};

console.log('INITIAL_STATE', INITIAL_STATE);
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
