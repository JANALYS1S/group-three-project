const selectors = require('../support/selectors')
const functions = require('../support/functions')
const data = require('../support/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },

    'Enter Wanted - Fields cannot contain only white space characters': browser => {
        //load Enter Wanted page
        functions.loadChosenWanted(selectors.buttons.enterW, browser)
        //enter default valid data (values for fields we are not testing)
        functions.enterData(data.whiteSpaceEW.input, browser)
        //keys the required number of spaces into each test field
        let spaceKeys = Object.getOwnPropertyNames(data.whiteSpaceEW.neededChars)
        spaceKeys.forEach(key => {
            let howManySpaces = data.whiteSpaceEW.spaces.slice(0, data.whiteSpaceEW.neededChars[key])
            browser.clearValue(selectors.fields[key])
                .setValue(selectors.fields[key], howManySpaces)
        })
        browser.click(selectors.buttons.submit)
        functions.checkList(selectors.messages.errorList, data.whiteSpaceEW.messages, browser)
    },

    'Modify Wanted - Fields cannot contain only white space characters': browser => {
        //load Modify Wanted page
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)
        //enter default valid data (values for fields we are not testing)
        functions.enterData(data.whiteSpaceMW.input, browser)
        //keys the required number of spaces into each test field
        browser.clearValue(selectors.war)
            .setValue(selectors.war, '          ')
        let spaceKeys = Object.getOwnPropertyNames(data.whiteSpaceMW.neededChars)
        spaceKeys.forEach(key => {
            //slices the object of space characters to the size needed for each field, then sets value with sliced object
            let howManySpaces = data.whiteSpaceMW.spaces.slice(0, data.whiteSpaceMW.neededChars[key])
            browser.clearValue(selectors.fields[key])
                .setValue(selectors.fields[key], howManySpaces)
        })
        browser.click(selectors.buttons.submit)
        functions.checkList(selectors.messages.errorList, data.whiteSpaceMW.messages, browser)
    },

    'Enter Wanted - If one Optional Field in a trio is entered, all must be entered': browser => {
        //load Enter Wanted page
        functions.loadChosenWanted(selectors.buttons.enterW, browser)
        //test one DL field entered at a time
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioOne, 'no', 'yes', 'yes', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioOne, 'yes', 'no', 'yes', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioOne, 'yes', 'yes', 'no', browser)
        //test two DL fields entered at a time
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioOne, 'no', 'no', 'yes', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioOne, 'yes', 'no', 'no', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioOne, 'no', 'yes', 'no', browser)
        //test one License field entered at a time
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioTwo, 'no', 'yes', 'yes', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioTwo, 'yes', 'no', 'yes', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioTwo, 'yes', 'yes', 'no', browser)
        //test two License fields entered at a time
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioTwo, 'no', 'no', 'yes', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioTwo, 'yes', 'no', 'no', browser)
        functions.testTrios(data.optionalFieldsEW.input, data.optionalFieldsEW.optionalTrioTwo, 'no', 'yes', 'no', browser)
    },

    /*'Enter Wanted - Making the computer key values for me': browser => {
        functions.loadChosenWanted(selectors.buttons.enterW, browser)
        functions.enterData(data.jDefaultData.input, browser)
    },

    'Modify Wanted - Making the computer key values for me': browser => {
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)
        functions.enterData(data.jDefaultData.input, browser)
        browser.clearValue(selectors.war)
            .setValue(selectors.war, '1234567890')
    }*/
}
