import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const handleGoToAbout = () => {
    navigate('/other-page'); // Navigate to the "/about" route
  };

  return (
    <div>
      <h1>Welcome to Dashboard!</h1>
      <button onClick={handleGoToAbout}> Go to other page </button>
    </div>
  );
}

function OtherPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate one step back in history
  };
  return (
    <>
      <p> Other page</p>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
