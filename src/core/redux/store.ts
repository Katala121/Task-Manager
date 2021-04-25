import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './reducer';
import { Store } from '../models/types';

const reducers = combineReducers<Store>({ taskReducer })

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState().taskReducer);
});

export default store;
