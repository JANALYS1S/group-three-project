const selectors = require('./selectors')
const data = require('./data')

module.exports = {
    /**
     * Coded by doctorwong:
     * waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
     * waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
     */
    loadEnterWanted: (browser) => {
        browser.click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.enterW, 60000)
            .click(selectors.buttons.enterW)
            .pause(500)
    },

    /**
     * enterData: Sets the value of every item that is passed in with its corresponding value
     * @param {object} browser This is the Nightwatch browser controlling object
     * @param {object} selectors This is an object of all the field selectors
     * @param {object} inputs This is an object of all the input items; must contain objects 'fields', 'dropdowns', and 'dates'
     */
    enterData: (inputs, browser) => {
        //Sets and verifies values for all text-entry fields, based on the object from the data file.
        //Use a blank object for fields you want untouched.
        let fldKeys = Object.getOwnPropertyNames(inputs.fields)
        fldKeys.forEach(key => {
            browser
                .clearValue(selectors.fields[key])
                .setValue(selectors.fields[key], inputs.fields[key])
                .verify.value(selectors.fields[key], inputs.fields[key])
        })
        //Sets and verifies values for all date fields, based on the object from the data file.
        //Use a blank object for fields you want untouched.
        let calKeys = Object.getOwnPropertyNames(inputs.dates)
        calKeys.forEach(key => {
            //reformats date to the way it is formatted as a value of the input element
            var reformatDate = ''
            if (inputs.dates[key] !== '') {
                var reformatDate = inputs.dates[key].slice(4) + '-' + inputs.dates[key].slice(0, 2) + '-' + inputs.dates[key].slice(2, 4)
            }
            browser
                .clearValue(selectors.calendars[key])
                .setValue(selectors.calendars[key], inputs.dates[key])
                .verify.value(selectors.calendars[key], reformatDate)
        })
        //Sets values for dropdown menus, based on the object from the data file.
        //Use a blank object for menus you want untouched.
        browser.click(`select[name = "sexInput"] option[value="${inputs.dropdowns.sex}"]`)
        browser.click(`select[name = "racInput"] option[value="${inputs.dropdowns.rac}"]`)
    },
    /**
         * checkList: Gets text from error list and checks for passed in values
         * @param {object} browser This is the Nightwatch browser controlling object
         * @param {object} errorList This is a list of the received error messages.
         * @param {object} outputs This is an object of the expected errors messages.
         */
    checkList: (errorList, messageArray, browser) => {
        //Get text from the error list
        browser.getText(errorList, result => {
            //checks the errorList text for each error message in the object from the data file
            messageArray.forEach(message => {
                browser.verify.ok(result['value'].includes(messageArray[messageArray.indexOf(message)]) === true, `Error # ${messageArray.indexOf(message)}`)
            })
        })
    }
}
