import './App.css';
import FrameA from 'remoteApp/FrameA';
import useStore from 'remoteApp/store';

function App() {
  const [count, setCount] = useStore(0);

  return (
    <div className="App">
      <h1>Host Application</h1>
      <FrameA></FrameA>
      <div className="card">
        <button onClick={() => setCount((n) => n + 1)}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
