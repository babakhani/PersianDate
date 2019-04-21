module.exports = {
    /**
     * @param input
     * @returns {boolean}
     */
    validateInputArray (input) {
      let out = true;
      // Check month
      if (input[1] < 1 || input[1] > 12) {
        out = false;
      } 
      // Check date
      if (input[2] < 1 || input[1] > 31) {
        out = false;
      } 
      // Check hour 
      if (input[3] < 0 || input[3] > 24) {
        out = false;
      } 
      // Check minute 
      if (input[4] < 0 || input[4] > 60) {
        out = false;
      } 
      // Check second 
      if (input[5] < 0 || input[5] > 60) {
        out = false;
      } 
      return out;
    }

};
