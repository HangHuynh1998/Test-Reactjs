import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./style/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import reducers from "./store/reducers/reducers"
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, createLogger())))
ReactDOM.render(
  <Provider store={store}>
 <App />
  </Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
