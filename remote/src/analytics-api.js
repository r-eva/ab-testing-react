export const trackPageview = (viewedVariant, userIP) => {
  console.log(`--> Vieved Variant: ${viewedVariant}`);
  console.log(`--> User IP: ${userIP}`);
};

export const trackEvent = (eventName, userIP, selectedVariant) => {
  console.log(`--> Event Name: ${eventName}`);
  console.log(`--> UserIp: ${userIP}`);
  console.log(`--> Selected variant: ${selectedVariant}`);
};
