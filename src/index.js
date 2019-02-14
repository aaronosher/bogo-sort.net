import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './js/App'
import store from './js/store';
import './css/style.css'
import './js/socket';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container') // eslint-disable-line no-undef
)
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  module.hot.accept()                    // eslint-disable-line no-undef  
}