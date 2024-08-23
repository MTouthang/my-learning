import { useRef } from "react";

const LoginForm = () => {
  // Create refs for the input fields
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access the input values using refs
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Log the values to the console (you can handle them as needed)
    console.log("Username:", username);
    console.log("Password:", password);

    // Optionally, reset the form fields
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
