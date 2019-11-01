import { SEARCH } from "../actions/searchProducts";

const reducer = (state = [], action = {}) => {
  console.log("action test:", action);
  switch (action.type) {
    case SEARCH:
      const { products, query } = action.payload;
      // const products = action.payload.products
      // const query = action.payload.query

      const filtered = products.filter(product => {
        return product.name.includes(action.payload.query);
      });

      console.log("filtered test:", filtered);

      return filtered;
    default:
      return state;
  }
};
export default reducer;
