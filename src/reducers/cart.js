import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    // case 'REMOVE_FROM_CART':
    //   return state.filter((product) => product.id !== action.payload);
    // case 'INCREMENT':
    //   const newArr1 = state.cartItems.map((product) => {
    //     if (product.id === action.payload.id) {
    //       product.quantity++;
    //     }
    //     return product;
    //   });
    //   return newArr1;
    // case 'DECREMENT':
    //   const newArr2 = state.cartItems.map((product) => {
    //     if (product.id === action.payload.id) {
    //       product.quantity--;
    //     }
    //     return product;
    //   });
    //   return newArr2;
    // case 'TOTAL':
    //   const newArr3 = state.cartItems
    //     .map((item) => item.id)
    //     .reduce((total, value) => {
    //       return total + value.quantity * value.price;
    //     }, 0);
    //   return newArr3;
    default:
      return state;
  }
};
export default reducer;
