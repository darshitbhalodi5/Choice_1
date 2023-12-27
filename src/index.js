import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ComponentA from './App';

ReactDOM.render(
  <Provider store={store}>
    <ComponentA />
  </Provider>,
  document.getElementById('root')
);