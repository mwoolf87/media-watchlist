import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CharkaProvider} from "@chakra-ui/core";
import rootReducer from './redux/reducers/rootReducer';


// creating store
const store = createStore(
  //root reducer coming from reducers folder
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    {/* wrapping provider in entire app component*/}
    <CharkaProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CharkaProvider>

  </React.StrictMode>,
  document.getElementById('root')
);