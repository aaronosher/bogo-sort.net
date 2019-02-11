import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const middlewares = [];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, composedEnhancers);

export default store;