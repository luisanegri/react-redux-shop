import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import cart from './cart';
import wish from './wish';
import user from './user';

export default combineReducers({
  products,
  product,
  cart,
  wish,
  user,
});
