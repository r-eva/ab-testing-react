import PropTypes from 'prop-types';
import { data } from '../testing-data/data.json';

const variantData = data.find((e) => e.variant === 'b');

const FrameB = () => {
  return (
    <div>
      <h1>{variantData.headline}</h1>
      <img
        src={variantData.imageURL}
        style={{
          padding: '1em',
          border: '5px dashed blue',
          width: '30rem',
          height: '30rem',
        }}
      ></img>
      <h2>{variantData.summary}</h2>
      <p>{variantData.description}</p>
    </div>
  );
};

FrameB.propTypes = {
  src: PropTypes.string,
};

export default FrameB;
