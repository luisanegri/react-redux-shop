const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_WISH':
      return [...state, action.payload.product];
    case 'REMOVE_FROM_WISH_LIST':
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
