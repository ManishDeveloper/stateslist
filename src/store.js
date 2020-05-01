import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
const initialState = {}

const middilware = [thunk];

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middilware)));

export default store;
