export const trackPageview = (params) => {
  // need to count how many pageview
  console.log(`--> Tracking Pageview: ${params}`);
};

export const trackEvent = (params) => {
  // need to prevent calling api analytic to the company if the user api already tracked
  console.log(`--> Tracking Event: ${params}`);
};

/// final function to show CTR (click-through rate) => NUMBER OF PAGEVIEW / NUMBER OF CLICK
