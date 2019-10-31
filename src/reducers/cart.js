const reducer = (state = [], action = {}) => {
  console.log('state', state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload.product];
    default:
      return state;
  }
};

export default reducer;
