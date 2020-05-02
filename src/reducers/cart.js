import { addProductToCart } from './cart.utils';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, cart: addProductToCart(state.cart, action.payload) };

    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cart: state.filter((product) => product.id !== action.payload),
      };

    case 'CLEAR_PRODUCT_FROM_CART':
      const decrementProductFromCart = (products, productToRemove) => {
        const existingCartProduct = products.find(
          (product) => product.id === productToRemove.id
        );

        if (existingCartProduct.quantity === 1) {
          return products.filter(
            (product) => product.id !== productToRemove.id
          );
        } else {
          return products.map((product) =>
            product.id === productToRemove
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
        }
      };

      return {
        ...state,
        decrementProductFromCart,
      };

    // case 'TOTAL':
    //   const newArr3 = state
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
