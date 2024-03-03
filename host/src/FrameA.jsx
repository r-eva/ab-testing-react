import './FrameA.css';
import useCount from './store';

export const FrameA = ({ src, style, ...props }) => {
  const [state, setState] = useCount();

  return (
    <div>
      <h1>Check out the Blinkist app</h1>
      <h2>Variant B</h2>
      <img
        src={src}
        style={{
          ...style,
          padding: '1em',
          border: '5px solid blue',
        }}
        {...props}
      ></img>
      <p>Meet the app that revolutionized reading.</p>
      <p>Meet the app that has 18 million users.</p>
      <button className="shared-btn" onClick={() => setState((n) => n + 1)}>
        SIGN UP: {state}
      </button>
    </div>
  );
};

export default FrameA;
