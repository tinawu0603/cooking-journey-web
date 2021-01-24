import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import recipeReducer from './recipe/reducers';

const rootReducer = combineReducers({
  recipeReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default createStore(rootReducer);
// export default createStore(rootReducer, applyMiddleware(thunk));