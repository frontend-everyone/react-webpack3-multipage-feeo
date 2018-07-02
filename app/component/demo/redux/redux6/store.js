import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'

const middleware = [thunk];

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware));

export default store;