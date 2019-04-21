module.exports = {
    /**
     * @param input
     * @returns {boolean}
     */
    validateInputArray (input) {
      let out = true
      // Check month
      if (input[1] < 1) {
        out = false
      } 
      // Check date
      if (input[2] < 1) {
        out = false
      } 
      // Check hour 
      if (input[3] < 0) {
        out = false
      } 
      // Check minute 
      if (input[4] < 0) {
        out = false
      } 
      // Check second 
      if (input[5] < 0) {
        out = false
      } 
      return out
    }

};
