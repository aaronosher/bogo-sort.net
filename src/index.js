import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import Message from './js/Message'
import store from './js/store';
import './css/style.css'
import './js/socket';

ReactDOM.render(
  <Provider store={store}>
    <Message />
  </Provider>,
  document.getElementById('react-container') // eslint-disable-line no-undef
)
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  module.hot.accept()                    // eslint-disable-line no-undef  
}