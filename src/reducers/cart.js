const reducer = (state = [], action = {}) => {
  console.log('state', state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload.product];
    case 'REMOVE_FROM_CART':
      console.log('action being called?', action.payload);
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
