const helpers = {

  breakpoint(width, func) {
    if (window.innerWidth < width) {
      func();
    }
  },

};

export default helpers;
