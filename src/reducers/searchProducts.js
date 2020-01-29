import { SEARCH } from '../actions/searchProducts';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case SEARCH:
      const { products } = action.payload;
      const filtered = products.filter(product => {
        return product.name.includes(action.payload.query);
      });
      return filtered;
    default:
      return state;
  }
};
export default reducer;
