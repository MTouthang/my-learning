import './App.css';
// import Button from './components/Button';
// import Counter from './components/Counter';
// import LoginForm from './components/Form';
import ProductCard from './components/ProductCart';
import UserList from './components/UserList';

function App() {
  // const handleSubmit = (formData) => {
  //   // This function will be called when the login form is submitted
  //   console.log('Form submitted with:', formData);
  // };

  return (
    <div>
      {/* <h1>Login Page</h1>
      <LoginForm onSubmit={handleSubmit} /> */}
      {/* <ProductCard /> */}
      <UserList />
    </div>
  );
}
export default App;
