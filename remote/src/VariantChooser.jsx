import React from 'react';
import PropTypes from 'prop-types';
import { trackPageview, trackEvent } from './analytics-api';

import tests from 'abManager/tests';

const VariantChooser = ({ test, variations, ...props }) => {
  let [selectedVariant] = React.useState(
    tests[test][Math.floor(Math.random() * tests[test].length)].variant
  );

  const storedUserData = localStorage.getItem('userVariant');

  if (storedUserData) {
    // selected variant can be change on opening new tab ? The assigned variation doesn’t change after the page reloads meaning reloads, refresh and opening new page
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

  const handleSignUpClick = async () => {
    if (localStorage.getItem('userSignUp') === 'false') {
      await localStorage.setItem('userSignUp', 'true');
      let userIp = localStorage.getItem('userIP');
      trackEvent(`User clicked sign up page`, userIp ,selectedVariant);
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
