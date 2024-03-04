import React from 'react';
import PropTypes from 'prop-types';
import { trackPageview, trackEvent } from './analytics-api';

import tests from 'abManager/tests';

const VariantChooser = ({ test, variations, ...props }) => {
  let [selectedVariant] = React.useState(
    tests[test][Math.floor(Math.random() * tests[test].length)]
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
        trackPageview(selectedVariant);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  const Component = variations[selectedVariant];

  const handleSignUpClick = async () => {
    if (localStorage.getItem('userSignUp') === 'false') {
      await localStorage.setItem('userSignUp', 'true');
      trackEvent(`user signup on variant ${selectedVariant}`);
    }
  };

  return (
    <React.Suspense fallback={<div>Loading variant</div>}>
      <Component {...props} />
      <button onClick={handleSignUpClick}>SIGN UP</button>
    </React.Suspense>
  );
};

VariantChooser.propTypes = {
  test: PropTypes.string,
  variations: PropTypes.object,
};

export default VariantChooser;
