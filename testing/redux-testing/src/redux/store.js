import { createStore } from 'redux';
import CounterReducer from './reducers';

const store = createStore(CounterReducer);

export default store;
