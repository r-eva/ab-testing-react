import React from 'react';
import './App.css';

import VariantChooser from 'abManager/VariantChooser';
import HandleVariantClick from 'abManager/HandleVariantClick';

const FrameA = React.lazy(() => import('abManager/VariantA'));
const FrameB = React.lazy(() => import('abManager/VariantB'));

function App() {
  const handleButtonClick = () => {
    // track A/B Testing Click
    HandleVariantClick();

    // Do other thing required for the application
  };
  return (
    <div className="App" style={{ width: 800, margin: 'auto' }}>
      <VariantChooser
        test="testLandingPage"
        variations={{
          a: FrameA,
          b: FrameB,
        }}
      />
      <button onClick={handleButtonClick}>SIGN UP</button>
    </div>
  );
}

export default App;
