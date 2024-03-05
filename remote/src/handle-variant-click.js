import { trackEvent } from './analytics-api';

const HandleVariantClick = async (selectedVariant) => {
  if (localStorage.getItem('userSignUp') === 'false') {
    await localStorage.setItem('userSignUp', 'true');
    let userIp = localStorage.getItem('userIP');
    trackEvent(`User clicked sign up page`, userIp, selectedVariant);
  }
};

export default HandleVariantClick;
