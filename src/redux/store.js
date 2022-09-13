import { combineReducers, compose, legacy_createStore } from 'redux';
import itemsReducer from './items-reducer';

const ReactReduxDevTools = window
  .__REDUX_DEVTOOLS_EXTENSIONS__ && window
  .__REDUX_DEVTOOLS_EXTENSIONS__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      items: itemsReducer
    }),
    undefined,
    compose(
      ReactReduxDevTools
    )
  )
}

export default configureStore;