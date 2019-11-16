import React from 'react';
import {View, Text} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

export default App;
