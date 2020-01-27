const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [action.payload.products];
    default:
      return state;
  }
};

export default reducer;
