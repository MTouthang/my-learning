
import { renderHook, act } from '@testing-library/react';
import useToggle from './useToggle';

test('should toggle state', () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current[0]).toBe(false);

  act(() => {
    result.current[1](); // Toggle the state
  });
  expect(result.current[0]).toBe(true);
});
