import { createStore } from 'redux';

import data from './model';


const store = createStore(data);
// store.subscribe(() => console.log(store.getState()))
export default store
