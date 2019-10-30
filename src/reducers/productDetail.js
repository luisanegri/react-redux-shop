const reducer = (state = {}, action = {}) => {
  console.log('state', state);
  switch (action.type) {
    case 'SET_PRODUCTS_DETAILS':
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;
