import UserList from "../components/UserList";
import { render, waitFor, screen } from "@testing-library/react";

// Mock the global fetch API
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test("displays list of users after successful API call", async () => {
  // Mock a successful API response
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
    ],
  });

  // Render the component
  render(<UserList />);

  // Assert that the loading state is shown
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for the users to be fetched and displayed
  await waitFor(() => {
    expect(screen.getByText("1. Leanne Graham")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText("2. Ervin Howell")).toBeInTheDocument();
  });
});

// Successful API call and data rendering.
test("displays error message after failed API call", async () => {
  // Mock a failed API response
  fetch.mockRejectedValueOnce(new Error("Network error"));

  // Render the component
  render(<UserList />);

  // Assert that the loading state is shown
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for the error message to be displayed
  await waitFor(() => {
    expect(screen.getByText("Error: Network error")).toBeInTheDocument();
  });
});
