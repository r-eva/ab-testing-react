import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import FrameAModule from 'remote/FrameA';

const FrameA = FrameAModule.default;

console.log(FrameA);

const App = () => (
  <div className="container">
    <div>Name: wp-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <FrameA />
  </div>
);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
