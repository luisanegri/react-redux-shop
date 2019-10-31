import { combineReducers } from 'redux';
import products from './products';
import productDetail from './productDetail';
import cart from './cart';

export default combineReducers({
  products,
  productDetail,
  cart
});
