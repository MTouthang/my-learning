import { increment } from './actions'; // Import your actions

export const fetchCountAsync = () => async (dispatch) => {
  // Simulate asynchronous behavior (e.g., API call)
  const simulatedDelay = 2000; // Adjust delay as needed
  await new Promise((resolve) => setTimeout(resolve, simulatedDelay));

  // Dispatch actions based on simulated results
  const randomIncrement = Math.floor(Math.random() * 3) + 1; // Simulate random change
  dispatch(increment(randomIncrement));
};
