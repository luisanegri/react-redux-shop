import { SEARCH } from "../actions/search";

const reducer = (state = [], action = {}) => {
  switch ((action, type)) {
    case SEARCH:
      return action.payload.products.filteR(product => {
        product.id === action.payload.id;
      });
  }
};
export default reducer;
