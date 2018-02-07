const selectors = require('./selectors')
const data = require('./data')

module.exports = {
    /**
     * enterValue takes the browser, selector, and data for a field, enters and verifies them.
     * 
     * @param {object} browser Browser is the nightwatch browser object
     * @param {string} selector Selector is the CSS selector for the field
     * @param {string} input Input is the string to enter into the field
     */
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    },

    /**
     * enterFields: Sets the value of every field that is passed in with its corresponding
     * @param {object} browser This is the Nightwatch browser controlling object
     * @param {object} selectors This is an object of all the field selectors
     * @param {object} inputs This is an object of all the fields' inputs
     */
    enterFields: (selectors, inputs, browser) => {
        let keys = Object.getOwnPropertyNames(selectors)
        keys.forEach(key => {
            browser
                .clearValue(selectors[key])
                .setValue(selectors[key], inputs[key])
                .verify.value(selectors[key], inputs[key])
        })
    },
    /**
         * enterFields: Sets the value of every field that is passed in with its corresponding
         * @param {object} browser This is the Nightwatch browser controlling object
         * @param {object} errorList This is a list of the received error messages.
         * @param {object} outputs This is an object of the expected errors messages.
         */
    enterLists: (errorList, outputs, browser) => {
        let keys = Object.getOwnPropertyNames(outputs)
        keys.forEach(key => {
            browser.expect.element(errorList).text.to.contain(outputs[key])
        })
    }
}