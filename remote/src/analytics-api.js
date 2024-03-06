export const trackPageview = (viewedVariant, userIP) => {
  console.log(`--> Vieved Variant: ${viewedVariant}`);
  console.log(`--> User IP: ${userIP}`);

  // send data to Analytic Services
};

export const trackEvent = (eventName, userIP, selectedVariant) => {
  console.log(`--> Event Name: ${eventName}`);
  console.log(`--> UserIp: ${userIP}`);
  console.log(`--> Selected variant: ${selectedVariant}`);

  // send data to Analytic Services
};
