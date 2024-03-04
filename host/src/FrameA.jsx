import PropTypes from 'prop-types';

const FrameA = ({ src, style, ...props }) => {
  return (
    <div>
      <h1>Check out the Blinkist App</h1>
      <h2>Variant A</h2>
      <img
        src={src}
        style={{
          ...style,
          padding: '1em',
          border: '5px solid green',
        }}
        {...props}
      ></img>
      <p>Meet the app that revolutionized reading.</p>
      <p>Meet the app that has 18 million users.</p>
    </div>
  );
};

FrameA.propTypes = {
  src: PropTypes.string,
  style: PropTypes.string,
};

export default FrameA;
