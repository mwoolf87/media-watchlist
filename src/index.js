import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import Favicon from 'react-favicon'

// creating store
const store = createStore(
  //root reducer coming from reducers folder
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    {/* wrapping provider in entire app component*/}
    <Provider store={store}>
    {/* Long favicon url, works but can be placed in variable */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);