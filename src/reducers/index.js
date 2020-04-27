import { combineReducers } from 'redux';
import products from './products';
import productDetail from './productDetail';
import cart from './cart';
import wish from './wish';
import search from './searchProducts';
import user from './user';

export default combineReducers({
  products,
  productDetail,
  cart,
  wish,
  search,
  user,
});
