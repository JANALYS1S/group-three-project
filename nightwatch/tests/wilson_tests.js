const selectors = require('../support/selectors')
const functions = require('../support/WWfunctions')
const data = require('../support/WWdata')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000');
        browser.waitForElementVisible(selectors.buttons.menuButton, 60000)

    },

    after: browser => {
        browser.end()
    },

    'Enter Wanted: Valid Data Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 60000)
        browser.click(selectors.buttons.enterW)
        browser.pause(3000)

        //enters input fields
        functions.enterFields(selectors.fields, data.goodData.input, browser)
        browser

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Modify Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //sets warrant id field
        functions.enterValue(selectors.war, data.goodData.input.war, browser)
        
        //enters input fields
        functions.enterFields(selectors.fields, data.goodData.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 60000)
        browser.click(selectors.buttons.enterW)
        browser.pause(3000)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooShort.input, browser)
        browser

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['dow'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oly'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['liy'])
        */

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooShort.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooShort.output.assembledQuery)
    },

    'Modify Wanted: Too Short Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.

        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //sets warrantID field
        browser.setValue(selectors.war, data.tooShort.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooShort.input, browser)
        browser

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['dow'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oly'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['liy'])
        */

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooShort.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooShort.output.assembledQuery)
    },

    'Cancel Wanted: Too Short Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.

        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.cancelW, 60000)
        browser.click(selectors.buttons.cancelW)
        browser.pause(3000)

        //enter values
        functions.enterValue(selectors.war, data.tooShort.input.war, browser)
        functions.enterValue(selectors.rfc, data.tooShort.input.rfc, browser)
        browser.setValue(selectors.calendars.dat, data.tooShort.input.dat)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['war'])

        /*BUGS
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['rfc'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['dat'])
        */


    },

    'Enter Wanted: Too Long Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 60000)
        browser.click(selectors.buttons.enterW)
        browser.pause(3000)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooLong.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooLong.output.header)

        //checks that each error message that is listed in the data has been printed

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['war'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['off'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['dow'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oln'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['ols'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oly'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lic'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['liy'])
        */

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooLong.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooLong.output.assembledQuery)
    },

    'Modify Wanted: Too Long Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //sets warrantID field
        browser.setValue(selectors.war, data.tooLong.input.war)

        functions.enterValue(selectors.war, data.tooShort.input.war, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooLong.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['off'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['dow'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oln'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['ols'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oly'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lic'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['liy'])
        */

        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.tooLong.output.queryTitle)

        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.tooLong.output.assembledQuery)
    },

    'Cancel Wanted: Too Long Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Cancel Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.cancelW, 60000)
        browser.click(selectors.buttons.cancelW)
        browser.pause(3000)

        functions.enterValue(selectors.war, data.tooLong.input.war, browser)
        functions.enterValue(selectors.rfc, data.tooLong.input.rfc, browser)
        browser.setValue(selectors.calendars.dat, data.tooLong.input.dat)

        //clicks submits
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['war'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['rfc'])
        */

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['dat'])
        */
    },

    "Enter Wanted: Tests for '.'": browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //enters input fields
        functions.enterFields(selectors.fields, data.invalidPeriods.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.invalidPeriods.output.header)
 
        //checks that each error message that is listed in the data has been printed
        
        /* BUGS
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['mke'])
        */
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oai'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['nam'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['wgt'])

        /* BUGS
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oln'])
        */
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
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //sets warrantID field
        browser.setValue(selectors.war, data.invalidPeriods.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.invalidPeriods.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.goodData.input.dow)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.invalidPeriods.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['war'])

        /* BUGS
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['mke'])
        */
        
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oai'])

        /*BUG
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['nam'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['wgt'])

        /*BUGS
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['oln'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['lic'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['lis'])
 
        //checks queryTitle
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.invalidPeriods.output.queryTitle)
 
        //checks the assembledQuery
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.invalidPeriods.output.assembledQuery)
    },

    "Cancel Wanted: Tests for '.'": browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Cancel Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.cancelW, 60000)
        browser.click(selectors.buttons.cancelW)
        browser.pause(3000)

        functions.enterValue(selectors.war, data.invalidPeriods.input.war, browser)
        functions.enterValue(selectors.rfc, data.invalidPeriods.input.rfc, browser)
        browser.setValue(selectors.calendars.dat, data.invalidPeriods.input.dat)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.invalidPeriods.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['war'])

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['rfc'])
        */
        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['dat'])
        */
    },

    'Enter Wanted: Alphabetical Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 60000)
        browser.click(selectors.buttons.enterW)
        browser.pause(3000)

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)
        browser

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //sets warrantID field
        browser.setValue(selectors.war, data.alphabeticalCharacters.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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

    'Cancel Wanted: Alphabetical Characters Test': browser => {
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Cancel Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.cancelW, 60000)
        browser.click(selectors.buttons.cancelW)
        browser.pause(3000)

        functions.enterValue(selectors.war, data.alphabeticalCharacters.input.war, browser)
        functions.enterValue(selectors.rfc, data.alphabeticalCharacters.input.rfc, browser)
        browser.setValue(selectors.calendars.dat, data.alphabeticalCharacters.input.dat)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.alphabeticalCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['war'])
        
        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['dat'])
        */
    },

    'Enter Wanted: Special Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 60000)
        browser.click(selectors.buttons.enterW)
        browser.pause(3000)

        //enters input fields
        functions.enterFields(selectors.fields, data.specialCharacters.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //sets warrantID field
        browser.setValue(selectors.war, data.specialCharacters.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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

    'Cancel Wanted: Special Characters Test': browser => {
        
        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Cancel Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.cancelW, 60000)
        browser.click(selectors.buttons.cancelW)
        browser.pause(3000)

        functions.enterValue(selectors.war, data.specialCharacters.input.war, browser)
        functions.enterValue(selectors.rfc, data.specialCharacters.input.rfc, browser)
        browser.setValue(selectors.calendars.dat, data.specialCharacters.input.dat)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList.war)

        /* BUG
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['dat'])
        */
    },

    'Enter Wanted: Numeric Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.enterW, 60000)
        browser.click(selectors.buttons.enterW)
        browser.pause(3000)

        //enters input fields
        functions.enterFields(selectors.fields, data.numericalCharacters.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'enterWanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.modifyW, 60000)
        browser.click(selectors.buttons.modifyW)
        browser.pause(3000)

        //sets warrantID field
        browser.setValue(selectors.war, data.numericalCharacters.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.numericalCharacters.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

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

    'Cancel Wanted: Numerical Characters Test': browser => {

        //waits for the menu button to appear, and then clicks on it.  Raises an error if it takes more than 10 seconds for the menu to appear.
        browser.click(selectors.buttons.menuButton)

        //waits for the menu options to appear, and then clicks 'Cancel Wanted'.  Raises an error if it takes more than 10 seconds for the option to appear.
        browser.waitForElementVisible(selectors.buttons.cancelW, 60000)
        browser.click(selectors.buttons.cancelW)

        functions.enterValue(selectors.war, data.numericalCharacters.input.war, browser)
        functions.enterValue(selectors.rfc, data.numericalCharacters.input.rfc, browser)
        browser.setValue(selectors.calendars.dat, data.numericalCharacters.input.dat)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.numericalCharacters.output.header)
    }
}