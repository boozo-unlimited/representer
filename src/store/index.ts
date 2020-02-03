
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'                 // defaults to localStorage for web
import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const initialState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer)

// To use the browser extension 'Redux DevTools'
// As explained here: https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware()));
export const persistor = persistStore(store);

export default store;
