import mainReducer from './mainReducer';
import { createStore, Store, AnyAction, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from './types/RootState';
import thunk from 'redux-thunk';

export const store: Store<RootState, AnyAction> = createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
