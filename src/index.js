import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'
import reducers from './reducers';
import App from './App';
import './index.css'

// Create the Redux store
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
);

// Render the app with the Redux store wrapped in the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);