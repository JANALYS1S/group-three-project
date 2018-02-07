const selectors = require('../support/selectors')
const functions = require('../support/WWfunctions')
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
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //enters input fields
        functions.enterFields(selectors.fields, data.goodData.input, browser)
        browser

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)
        browser.setValue(selectors.calendars.old, data.goodData.input.oly)
        browser.setValue(selectors.calendars.lid, data.goodData.input.liy)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    },

    'Modify Wanted: Valid Data Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Modify Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //sets warrant id field
        browser.setValue('input[class = "inputField"]', '1234567890')
        
        //enters input fields
        functions.enterFields(selectors.fields, data.goodData.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)
        browser.setValue(selectors.calendars.old, data.goodData.input.oly)
        browser.setValue(selectors.calendars.lid, data.goodData.input.liy)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
    },

    'Enter Wanted: Too Short Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 10000)
        browser.click(selectors.buttons.enterW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

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
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lis'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lis'])

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
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

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

        /*
        data.tooShort.output.errorList.forEach(error =>
        {
            browser.verify.containsText(selectors.messages.errorList, error)
        })

        */

        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lis'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lis'])


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
        browser.waitForElementVisible(selectors.fields.hdr, 5000)
        functions.enterFields(selectors.fields, data.tooLong.input, browser)

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
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hgt'])
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
        browser.waitForElementVisible(selectors.fields.hdr, 5000)


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
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooLong.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooLong.output.assembledQuery)
    },

    "Enter Wanted: Tests for '.'": browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //enters input fields
        functions.enterFields(selectors.fields, data.invalidPeriods.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.invalidPeriods.output.header)
 
        //checks that each error message that is listed in the data has been printed
        
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oln'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['lis'])
        
 
        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.invalidPeriods.output.queryTitle)
 
        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.invalidPeriods.output.assembledQuery)
    },

    "Modify Wanted: Tests for '.'": browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //sets warrantID field
        browser.setValue('input[class = "inputField"]', '..........')

        //enters input fields
        functions.enterFields(selectors.fields, data.invalidPeriods.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.invalidPeriods.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oln'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['lis'])
 
        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.invalidPeriods.output.queryTitle)
 
        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.invalidPeriods.output.assembledQuery)
    },

    'Enter Wanted: Alphabetical Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 10000)
        browser.click(selectors.buttons.enterW)
        browser.waitForElementVisible(selectors.fields.hdr, 10000)

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)
        browser

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.alphabeticalCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.alphabeticalCharacters.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.alphabeticalCharacters.output.assembledQuery)
    },

    'Modify Wanted: Alphabetical Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //sets warrantID field
        browser.setValue('input[class = "inputField"]', 'abcdefghij')

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.alphabeticalCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.alphabeticalCharacters.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.alphabeticalCharacters.output.assembledQuery)
    },

    'Enter Wanted: Special Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 10000)
        browser.click(selectors.buttons.enterW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //enters input fields
        functions.enterFields(selectors.fields, data.specialCharacters.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.specialCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['wgt'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hai'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['ols'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['oln'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.alphabeticalCharacters.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.alphabeticalCharacters.output.assembledQuery)
    },

    'Modify Wanted: Special Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //sets warrantID field
        browser.setValue('input[class = "inputField"]', '!@#$%^&*()')

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.alphabeticalCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['wgt'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['oai'])
        */

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hai'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['ols'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['oln'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.alphabeticalCharacters.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.alphabeticalCharacters.output.assembledQuery)
    },

    'Enter Wanted: Numeric Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 10000)
        browser.click(selectors.buttons.enterW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //enters input fields
        functions.enterFields(selectors.fields, data.numericalCharacters.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.numericalCharacters.output.header)

        //Checks that all expected error messages are displayed
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.numericalCharacters.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.numericalCharacters.output.assembledQuery)
    },

    'Modify Wanted: Numerical Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.waitForElementVisible(selectors.buttons.menuButton, 10000)
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 10000)
        browser.click(selectors.buttons.modifyW)
        browser.waitForElementVisible(selectors.fields.hdr, 5000)

        //sets warrantID field
        browser.setValue('input[class = "inputField"]', '1234567890')

        //enters input fields
        functions.enterFields(selectors.fields, data.numericalCharacters.input, browser)

        //enters dropdown fields
        browser.click('select[name = "sexInput"] option[value="F"]')
        browser.click('select[name = "racInput"] option[value="A"]')

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.numericalCharacters.output.header)

        //Checks that all expected error messages are displayed
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['lis'])

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.numericalCharacters.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.numericalCharacters.output.assembledQuery)
    }
}