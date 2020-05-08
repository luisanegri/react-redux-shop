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
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
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
    default:
      return state;
  }
};
export default reducer;
