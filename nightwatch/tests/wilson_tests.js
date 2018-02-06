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

    'Valid Data Test': browser => {

        //waits for the menu button to appear, and then clicks on it
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'
        browser.waitForElementVisible(selectors.buttons.enterWanted, 10000)
        browser.click(selectors.buttons.enterWanted)

        //enters input fields
        functions.enterFields(selectors.fields, data.goodData.input, browser)
        browser

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)
 
        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    }
}

    /*

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
    },
}
*/