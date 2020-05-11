const INITIAL_STATE = {
  productItem: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ITEM_DETAIL':
      return { ...state, productItem: action.payload };
    default:
      return state;
  }
};

export default reducer;
