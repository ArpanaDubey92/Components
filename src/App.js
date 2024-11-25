import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'; // Initial logo image
import newLogo from './stories/assets/accessibility.svg'; // New image after clicking

function App() {
  // State to track the current image
  const [imageSrc, setImageSrc] = useState(logo);

  // Handle image click event to toggle between images
  const handleImageClick = () => {
    setImageSrc((prevSrc) => (prevSrc === logo ? newLogo : logo));
  };

  return (
      <div className="App">
        <header className="App-header">
          <img
              src={imageSrc}
              className="App-logo"
              alt="logo"
              onClick={handleImageClick} // Add click event here
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
