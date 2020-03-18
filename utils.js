const debounce = (func, delay = 1000) => {
  let timeoutId;
  //...arg pass through all the arguments that you recieve from the function
  return (...args) => {
    //sheild
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      //apply all the function to recive to run the function it is like a passthrough
      func.apply(null, args);
    }, delay);
  };
};
