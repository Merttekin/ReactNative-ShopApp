import React from 'react';
import {View, Text} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>App</Text>
      </View>
    </Provider>
  );
}

export default App;
