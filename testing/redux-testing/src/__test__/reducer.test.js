// reducer.test.js
import CounterReducer from '../redux/reducers';

import { INCREMENT, DECREMENT } from '../redux/actionTypes';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(CounterReducer(undefined, {})).toEqual({ count: 0 });
  });

  it('should handle INCREMENT action', () => {
    expect(CounterReducer({ count: 0 }, { type: INCREMENT })).toEqual({
      count: 1,
    });
  });

  it('should handle DECREMENT action', () => {
    expect(CounterReducer({ count: 1 }, { type: DECREMENT })).toEqual({
      count: 0,
    });
  });
});
