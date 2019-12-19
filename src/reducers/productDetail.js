const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'SET_PRODUCTS_DETAILS':
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;
