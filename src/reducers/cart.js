const reducer = (state = [], action = {}) => {
  console.log('state', state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload.product];
    case 'REMOVE_FROM_CART':
      console.log('action being called?', action.payload);
      return state.filter(product => product.id !== action.payload);
    case 'INCREMENT':
      const newArr1 = state.map(product => {
        if (product.id === action.payload.id) {
          console.log('found the product!', product);
          product.quantity++;
        }
        return product;
      });
      return newArr1;
    case 'DECREMENT':
      const newArr2 = state.map(product => {
        if (product.id === action.payload.id) {
          console.log('found the product!', product);
          product.quantity--;
        }
        return product;
      });
      return newArr2;
    // find returns only one
    // const p = state.find(product => product.id === action.payload.id);
    // console.log('p??????', p, action);
    // console.log(p.quantity);
    // return [...state, p.quantity + 1];
    default:
      return state;
  }
};

export default reducer;
