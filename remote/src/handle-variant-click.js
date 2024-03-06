import { trackEvent } from './analytics-api';

const HandleVariantClick = async () => {
  if (localStorage.getItem('userSignUp') === 'false') {
    await localStorage.setItem('userSignUp', 'true');
    let userIp = localStorage.getItem('userIP');
    let selectedVariant = localStorage.getItem('userVariant');
    trackEvent(`User clicked sign up button`, userIp, selectedVariant);
  }
};

export default HandleVariantClick;
