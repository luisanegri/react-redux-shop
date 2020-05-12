import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
export const store = createStore(reducer, enhancer);
export const persistor = persistStore(store);
export default { store, persistor };
