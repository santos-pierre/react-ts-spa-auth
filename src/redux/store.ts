import mainReducer from './mainReducer';
import { createStore, Store, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from './types/RootState';

export const store: Store<RootState, AnyAction> = createStore(
    mainReducer,
    composeWithDevTools()
);
