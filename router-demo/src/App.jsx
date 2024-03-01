import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGoToAbout = () => {
    navigate('/about'); // Navigate to the "/about" route
  };

  return (
    <div>
      <h1>Welcome to Home!</h1>
      <button onClick={handleGoToAbout}>Go to About Us</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
