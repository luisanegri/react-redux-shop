import { createSelector } from 'reselect';

const selectProductsState = (state) => state.products;
export const selectProducts = createSelector(
  [selectProductsState],
  (products) => products.productsList.products
);

export const selectProductsForPreview = createSelector(
  [selectProducts],
  (products) => Object.keys(products).map((key) => products[key])
);
