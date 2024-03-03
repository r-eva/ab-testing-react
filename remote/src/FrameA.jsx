import './FrameA.css';
import useCount from './store';

export const FrameA = () => {
  const [state, setState] = useCount();

  return (
    <div>
      <button className="shared-btn" onClick={() => setState((n) => n + 1)}>
        SIGN UP: {state}
      </button>
    </div>
  );
};

export default FrameA;
