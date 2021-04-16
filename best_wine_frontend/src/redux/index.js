import { createStore, combineReducers } from 'redux';

import { preferenceData, userRating } from './model';

const reducers = combineReducers({
  preferenceData,
  userRating
})

const store = createStore(reducers);
export default store
