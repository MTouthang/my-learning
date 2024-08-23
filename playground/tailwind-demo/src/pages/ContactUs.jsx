import { useForm } from "react-hook-form";

const ContactUs = () => {
  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Function to handle the form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can handle form submission here (e.g., send data to an API)

    // Clear the form data
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 50,
              message: "Message must be at least 50 characters long",
            },
          })}
        />
        {errors.message && (
          <span style={{ color: "red" }}>{errors.message.message}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;
