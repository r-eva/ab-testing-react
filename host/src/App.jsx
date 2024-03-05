import React from 'react';
import './App.css';

import VariantChooser from 'abManager/VariantChooser';

const FrameA = React.lazy(() => import('abManager/VariantA'));
const FrameB = React.lazy(() => import('abManager/VariantB'));

function App() {
  return (
    <div className="App" style={{ width: 800, margin: 'auto' }}>
      <VariantChooser
        test="testLandingPage"
        variations={{
          a: FrameA,
          b: FrameB,
        }}
        src="https://placedog.net/640/480?id=53"
        style={{ width: 640, height: 480 }}
      />
    </div>
  );
}

export default App;
