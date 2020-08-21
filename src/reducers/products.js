const INITIAL_STATE = {
  productsList: [],
  loading: false,
  errorMessage: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_START':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, productsList: action.payload, loading: false };
    case 'GET_PRODUCTS_FAILURE':
      return {
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
