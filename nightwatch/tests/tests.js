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
        functions.loadEnterWanted(browser)
        functions.enterData(data.whiteSpace.input, browser)
        let spaceKeys = Object.getOwnPropertyNames(data.whiteSpace.neededChars)
        spaceKeys.forEach(key => {
            let howManySpaces = data.whiteSpace.spaces.slice(0, data.whiteSpace.neededChars[key])
            browser.clearValue(selectors.fields[key])
                .setValue(selectors.fields[key], howManySpaces)
        })
        browser.click(selectors.buttons.submit)
        functions.checkLists(selectors.messages.errorList, data.whiteSpace.messages, browser)
    }

    /*
    'I can put in information and get a good text message as a result': browser => {
        functions.enterFields(selectors.fields, data.goodData.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    },

    'If I put in good data, but only one of a set of optional fields, I get an error': browser => {
        functions.enterFields(selectors.fields, data.badData.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.output.header)
        //this transaction only has one error message to check, so I don't need to repeat the check
        functions.enterLists(selectors.messages.errorList, data.badData.output.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.output.assembledQuery)
    },

    'If I put in data that is shorter than the minimum requirements, I get an error for each field effected.': browser => {
        functions.enterFields(selectors.fields, data.badData2.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData2.output.header)
        //checks that each error message that is listed in the data has been printed
        functions.enterLists(selectors.messages.errorList, data.badData2.output.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData2.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData2.output.assembledQuery)
    },

    'If I put in data that is longer than the maximum allowed, I get an error for each field effected.': browser => {
        functions.enterFields(selectors.fields, data.badData3.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData3.output.header)
        //checks that each error message that is listed in the data has been printed
        functions.enterLists(selectors.messages.errorList, data.badData3.output.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData3.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData3.output.assembledQuery)
    }
	*/

}