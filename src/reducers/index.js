import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import cart from './cart';
import wish from './wish';
import user from './user';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  products,
  product,
  cart,
  wish,
  user,
});

export default persistReducer(persistConfig, rootReducer);
