export const trackPageview = (viewedVariant, userIP) => {
  console.log(`--> Viewed Variant: ${viewedVariant}`);
  console.log(`--> User IP: ${userIP}`);

  // send data to Analytic Services

  // simulating one solution on data process
  // const handlePageView = () => {
  //   const collectedData = [];

  //   // simulating datas sent from user on reload couple times
  //   const dataSent1 = {
  //     userIP: '1.2.3.4',
  //     viewedVariant: 'a',
  //   };
  //   collectedData.push(dataSent1);

  //   const dataSent2 = {
  //     userIP: '1.8.4.4',
  //     viewedVariant: 'a',
  //   };
  //   collectedData.push(dataSent2);

  //   const dataSent3 = {
  //     userIP: '1.3.4.4',
  //     viewedVariant: 'b',
  //   };
  //   collectedData.push(dataSent3);

  //   const dataSent4 = {
  //     userIP: '1.3.4.2',
  //     viewedVariant: 'b',
  //   };
  //   collectedData.push(dataSent4);

  //   // Do this process to get final number of variant, as alternative we could also do this before pushing data to collection data
  //   const totalPageView = [];
  //   for (item of collectedData) {
  //     obj = {};
  //     obj['variant'] = item.viewedVariant;
  //     obj['pageView'] = 1;
  //     const findSimilarData = totalPageView.find(
  //       (e) => e.variant == item.viewedVariant
  //     );
  //     if (findSimilarData) {
  //       let indexPageView = totalPageView.indexOf(findSimilarData);
  //       let newValue = totalPageView[indexPageView]['pageView'] + 1;
  //       totalPageView[indexPageView]['pageView'] = newValue;
  //     } else totalPageView.push(obj);
  //   }
  //   return totalPageView;
  // };
  // console.log(handPageView())
};

export const trackEvent = (eventName, userIP, selectedVariant) => {
  console.log(`--> Event Name: ${eventName}`);
  console.log(`--> UserIp: ${userIP}`);
  console.log(`--> Selected variant: ${selectedVariant}`);

  // send data to Analytic Services
};
