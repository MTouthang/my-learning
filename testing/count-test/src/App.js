// App.js
import React, { Suspense } from "react";

function App() {
  const OtherComponent = React.lazy(() => {
    // Using Promise + setTimeout to simulate a longer delay,
    // normally we just return the import
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./components/OtherComponent"));
      }, 1000);
    });
  });

  return (
    <div>
      <h1>My App</h1>
      {/* Suspense handles the fallback while data is loading */}
      <div className="App">
        <Suspense fallback={<div> Loading... </div>}>
          <OtherComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
