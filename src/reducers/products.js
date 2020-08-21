const INITIAL_STATE = {
  productsList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, productsList: action.payload };
    default:
      return state;
  }
};

export default reducer;
