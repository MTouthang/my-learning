import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { fetchCountAsync } from '../redux/thunk'; // Import the thunk to be tested
import { INCREMENT } from '../redux/actionTypes'; // Import the action type if needed

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Thunk', () => {
  it('should dispatch increment action after a delay', async () => {
    const store = mockStore({});
    await store.dispatch(fetchCountAsync());
    const actions = store.getActions();

    // Ensure that the correct action is dispatched
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(INCREMENT); // Check if the action type is INCREMENT
    // Add more assertions if needed based on the action payload or other conditions
  });
});
