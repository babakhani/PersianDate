module.exports = {
    /**
     * @param input
     * @returns {boolean}
     */
    isArray (input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isNumber (input) {
        return typeof input === 'number';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isDate (input) {
        return input instanceof Date;
    }
};
