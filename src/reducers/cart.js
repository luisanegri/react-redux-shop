const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const product = { ...action.payload, quantity: 1 };
      const existingCartItem = state.find(
        (product) => product.id === action.payload.id
      );
      if (existingCartItem) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...state, product];
    case 'REMOVE_FROM_CART':
      return state.filter((product) => product.id !== action.payload);
    case 'INCREMENT':
      const newArr1 = state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity++;
        }
        return product;
      });
      return newArr1;
    case 'DECREMENT':
      const newArr2 = state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity--;
        }
        return product;
      });
      return newArr2;
    case 'TOTAL':
      const newArr3 = state
        .map((item) => item.id)
        .reduce((total, value) => {
          return total + value.quantity * value.price;
        }, 0);
      return newArr3;
    default:
      return state;
  }
};
export default reducer;
