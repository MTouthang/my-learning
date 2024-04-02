// actions.test.js
import { increment, decrement } from '../redux/actions';
import { INCREMENT, DECREMENT } from '../redux/actionTypes';

describe('Actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(increment()).toEqual(expectedAction);
  });

  it('should create an action to decrement the counter', () => {
    const expectedAction = {
      type: DECREMENT,
    };
    expect(decrement()).toEqual(expectedAction);
  });
});
