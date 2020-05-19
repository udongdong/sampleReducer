/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux'
import Main from './src/view/Main'
import initStore from './src/store'

const store = initStore()

const App: () => React$Node = () => {
  return (
    <Provider store = {store}>
      <Main/>
    </Provider>
  );
};

export default App;
