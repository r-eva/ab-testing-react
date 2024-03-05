import React from 'react';
import ReactDOM from 'react-dom/client';
import FrameA from './variations/FrameA';
import FrameB from './variations/FrameB';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FrameA />
    <FrameB />
  </React.StrictMode>
);

