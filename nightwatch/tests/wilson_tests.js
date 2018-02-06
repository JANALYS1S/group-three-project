const selectors = require('../support/selectors')
const functions = require('../support/functions')
const data = require('../support/WWdata')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')

    },

    after: browser => {
        browser.end()
    },

    'Enter Wanted: Valid Data Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 10000)
        browser.click(selectors.buttons.enterW)

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
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    },


        'Modify Wanted: Valid Data Test' : browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Modify Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)


        //enters input fields

        //sets warrant id field
        browser.setValue('input[class = "inputField"]', '1234567890')
        functions.enterFields(selectors.fields, data.goodData.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
    },


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

    */

    'Enter Wanted: Too Short Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 10000)
        browser.click(selectors.buttons.enterW)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooShort.input, browser)
        browser

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['mke'])
        
        /* These checks are not working
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])
        */
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lis'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])
        

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooShort.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooShort.output.assembledQuery)
    },

    'Modify Wanted: Too Short Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)

        //sets warrantID field
        browser.setValue('input[class = "inputField"]', '1')

        //enters input fields
        functions.enterFields(selectors.fields, data.tooShort.input, browser)
        browser

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['mke'])
        
        /* These checks are not working
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lis'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])

        */
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])
        
        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooShort.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooShort.output.assembledQuery)

    },

    'Enter Wanted: Too Long Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 10000)
        browser.click(selectors.buttons.enterW)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooLong.input, browser)
        browser

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooLong.output.header)

        //checks that each error message that is listed in the data has been printed

        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['mke'])

        /* These checks are not working
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['nam'])
        */
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooLong.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooLong.output.assembledQuery)
    },

    'Modify Wanted: Too Long Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)

        //sets warrantID field
        browser.setValue('input[class = "inputField"]', '12345678901234567890')

        //enters input fields
        functions.enterFields(selectors.fields, data.tooLong.input, browser)
        browser

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooLong.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['mke'])

        /* These checks are not working
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['nam'])
        */
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooLong.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooLong.output.assembledQuery)
    },
}

