const selectors = require('./selectors')
const data = require('./data')

/**
 * Can enter data into all 3 types of fields (input, date, dropdown)
 * Each type should be in its own object, named 'fields, 'dates', and 'dropdowns', respectively, within the Inputs object
 * @param {object} inputs Inputs is an object containing the 3 objects of data.
 * @param {object} browser Browser is the nightwatch browser object
 */
const enterData = (inputs, browser) => {
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
    if (inputs.dropdowns.sex !== '') { browser.click(`select[name = "sexInput"] option[value="${inputs.dropdowns.sex}"]`) }
    if (inputs.dropdowns.rac !== '') { browser.click(`select[name = "racInput"] option[value="${inputs.dropdowns.rac}"]`) }
}

/**
 * checkList: Gets text from error list and checks for passed in values
 * @param {object} errorList This is the selector for site's list of error messages.
 * @param {array} messageArray This is an array of the expected errors messages.
 * @param {object} browser This is the Nightwatch browser controlling object
 */
const checkList = (errorList, messageArray, browser) => {
    //Get text from the error list
    browser.getText(errorList, result => {
        //checks the errorList text for each error message in the array from the data file
        messageArray.forEach(message => {
            browser.verify.ok(result['value'].includes(messageArray[messageArray.indexOf(message)]) === true, `Error # ${messageArray.indexOf(message)}`)
        })
    })
}

module.exports = {
    enterData: enterData,
    checkList: checkList,
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
            browser.verify.containsText(errorList, outputs[key])
        })
    },

    setFields: (selectors, inputs, browser) => {
        let keys = Object.getOwnPropertyNames(selectors)
        keys.forEach(key => {
            browser
                .clearValue(selectors[key])
                .setValue(selectors[key], inputs[key])
        })
    },

    /**
     * Based on code by doctorwong:
     * waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
     * waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
     */
    loadChosenWanted: (button, browser) => {
            browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(button, 6000)
            .click(button)
            //edited to work on slow computers =)
            .pause(1000)
    },

    /**
     * enterData: Sets the value of every item that is passed in with its corresponding value
     * @param {object} browser This is the Nightwatch browser controlling object
     * @param {object} selectors This is an object of all the field selectors
     * @param {object} inputs This is an object of all the input items; must contain objects 'fields', 'dropdowns', and 'dates'
     */



    /**
     * Enters data (or not) for each of the three related optional fields
     * @param {object} untestedFields Default data to be entered in fields that are not part of this test
     * @param {object} fieldObject This is an object containing the data for the fields that will be entered.
     * First value pair must be for the date field. Must also contain an array "messages" containing expected error message(s).
     * @param {string} fieldOneBlank 'yes' or 'no', determines if first field (date field) is left blank or has test data entered.
     * @param {string} fieldTwoBlank 'yes' or 'no', determines if second field is left blank or has test data entered.
     * @param {string} fieldThreeBlank 'yes' or 'no', determines if third field is left blank or has test data entered
     * @param {object} browser This is the Nightwatch browser controlling object
     */
    testTrios: (untestedFields, fieldObject, fieldOneBlank, fieldTwoBlank, fieldThreeBlank, browser) => {
        browser.click(selectors.buttons.clear)
        //enter default valid data (values for fields we are not testing)
        enterData(untestedFields, browser)
        let Keys = Object.getOwnPropertyNames(fieldObject)
        if (fieldOneBlank === 'no') {//if first field should not be empty, enter data
            var reformatDate = ''
            var reformatDate = fieldObject[`${Keys[0]}`].slice(4) + '-' + fieldObject[`${Keys[0]}`].slice(0, 2) + '-' + fieldObject[`${Keys[0]}`].slice(2, 4)
            browser
                .clearValue(selectors.calendars[`${Keys[0]}`])
                .setValue(selectors.calendars[`${Keys[0]}`], fieldObject[`${Keys[0]}`])
                .verify.value(selectors.calendars[`${Keys[0]}`], reformatDate)
        }
        if (fieldTwoBlank === 'no') {//if second field should not be empty, enter data
            browser
                .clearValue(selectors.fields[`${Keys[1]}`])
                .setValue(selectors.fields[`${Keys[1]}`], fieldObject[`${Keys[1]}`])
                .verify.value(selectors.fields[`${Keys[1]}`], fieldObject[`${Keys[1]}`])
        }
        if (fieldThreeBlank === 'no') {//if third field should not be empty, enter data
            browser
                .clearValue(selectors.fields[`${Keys[2]}`])
                .setValue(selectors.fields[`${Keys[2]}`], fieldObject[`${Keys[2]}`])
                .verify.value(selectors.fields[`${Keys[2]}`], fieldObject[`${Keys[2]}`])
        }
        browser.click(selectors.buttons.submit)
        //check displayed errors for text strings from 'messages' array
        checkList(selectors.messages.errorList, fieldObject.messages, browser)
    }
}