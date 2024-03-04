import React from 'react';
import './App.css';

import VariantChooser from 'abManager/VariantChooser';

const FrameA = React.lazy(() => import('home/FrameA'));
const FrameB = React.lazy(() => import('home/FrameB'));

function App() {
  return (
    <div className="App" style={{ width: 800, margin: 'auto' }}>
      <VariantChooser
        test="test1"
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
