import PropTypes from 'prop-types';
import { data } from '../testing-data/data.json';

const variantData = data.find(e => e.variant === "a")

const FrameA = () => {
  return (
    <div>
      <h1>{variantData.headline}</h1>
      <img
        src={variantData.imageURL}
        style={{
          padding: '1em',
          border: '5px solid green',
        }}
      ></img>
      <h2>{variantData.summary}</h2>
      <p>{variantData.description}</p>
    </div>
  );
};

FrameA.propTypes = {
  src: PropTypes.string,
};

export default FrameA;
