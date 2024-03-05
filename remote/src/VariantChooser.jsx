import React from 'react';
import PropTypes from 'prop-types';
import { trackPageview } from './analytics-api';

import tests from 'abManager/tests';

const VariantChooser = ({ test, variations, ...props }) => {
  let [selectedVariant] = React.useState(
    tests[test][Math.floor(Math.random() * tests[test].length)].variant
  );

  const storedUserData = localStorage.getItem('userVariant');

  if (storedUserData) {
    selectedVariant = storedUserData;
  } else {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.ip);
        localStorage.setItem('userIP', data.ip);
        localStorage.setItem('userVariant', selectedVariant);
        localStorage.setItem('userSignUp', 'false');
        trackPageview(selectedVariant, data.ip);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  const Component = variations[selectedVariant];

  return (
    <React.Suspense fallback={<div>Loading variant</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

VariantChooser.propTypes = {
  test: PropTypes.string,
  variations: PropTypes.object,
};

export default VariantChooser;
