const selectors = require('../support/selectors')
const functions = require('../support/functions')
const data = require('../support/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000');
    },

    /*
    after: browser => {
        browser.end()
    },
    */

    'Enter Wanted: Just Long Enough': browser => {
        //Checks if inputs are accepted at its minimum allowed length.
        //Does not check for calendar inputs or the assembled query.

        //loads the 'Enter Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.justLongEnough.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.justLongEnough.input.dow)
        browser.setValue(selectors.calendars.old, data.justLongEnough.input.old)
        browser.setValue(selectors.calendars.lid, data.justLongEnough.input.lid)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.justLongEnough.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.justLongEnough.output.queryTitle)
    },

    'Modify Wanted: Just Long Enough': browser => {
        //Checks if inputs are accepted at its minimum allowed length.
        //Does not check for calendar inputs or the assembled query.

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //sets warrant id field
        functions.enterValue(selectors.war, data.justLongEnough.input.war, browser)

        //enters remaining input fields
        functions.enterFields(selectors.fields, data.justLongEnough.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.justLongEnough.input.dow)
        browser.setValue(selectors.calendars.old, data.justLongEnough.input.old)
        browser.setValue(selectors.calendars.lid, data.justLongEnough.input.lid)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.justLongEnough.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.justLongEnough.output.queryTitle)
    },

    'Cancel Wanted: Just Long Enough': browser => {
        //Checks if inputs are accepted at its minimum allowed length.
        //Does not check for calendar inputs or the assembled query.

        //loads the 'Cancel Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enter input fields
        functions.enterValue(selectors.war, data.justLongEnough.input.war, browser)
        functions.enterValue(selectors.rfc, data.justLongEnough.input.rfc, browser)
        
        //sets calendar field
        browser.setValue(selectors.calendars.dat, data.justLongEnough.input.dat)

        //clicks submit
        browser.click(selectors.buttons.submit)

        // verifies that expected results are correct the expected results are correct 
        /* BUG - See GWQ-66
        browser.expect.element(selectors.messages.header).text.to.equal(data.justLongEnough.output.header)
        */
    },

    'Enter Wanted: Almost Too Long': browser => {
        //Checks if inputs are accepted at its maximum allowed length.
        //Does not check for calendar inputs or the assembled query.

        //loads the 'Enter Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.almostTooLong.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //enters calendar fields
        browser.setValue(selectors.calendars.dow, data.almostTooLong.input.dow)
        browser.setValue(selectors.calendars.old, data.almostTooLong.input.old)
        browser.setValue(selectors.calendars.lid, data.almostTooLong.input.lid)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.almostTooLong.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.almostTooLong.output.queryTitle)
    },

    'Modify Wanted: Almost Too Long': browser => {
        //Checks if inputs are accepted at its maximum allowed length.
        //Does not check for calendar inputs or the assembled query.

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //enters warrant id field
        functions.enterValue(selectors.war, data.almostTooLong.input.war, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.almostTooLong.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //sets calendar fields
        browser.setValue(selectors.calendars.dow, data.almostTooLong.input.dow)
        browser.setValue(selectors.calendars.old, data.almostTooLong.input.old)
        browser.setValue(selectors.calendars.lid, data.almostTooLong.input.lid)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.almostTooLong.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.almostTooLong.output.queryTitle)
    },

    'Cancel Wanted: Almost Too Long': browser => {
        //Checks if inputs are accepted at its maximum allowed length.
        //Does not check for calendar inputs or the assembled query.

        //loads the 'Cancel Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enter values
        functions.enterValue(selectors.war, data.almostTooLong.input.war, browser)
        functions.enterValue(selectors.rfc, data.almostTooLong.input.rfc, browser)
        
        //sets calendar field
        browser.setValue(selectors.calendars.dat, data.almostTooLong.input.dat)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //now I'll check that all the expected results are correct
        /* BUG - See GWQ-66
        browser.expect.element(selectors.messages.header).text.to.equal(data.almostTooLong.output.header)
        */
    },

    'Enter Wanted: One Character Too Short Test': browser => {
        //Verifies error messages for inputs submitted one character below its minimum accepted length
        //Does not check for calendar inputs

        //loads the 'Enter Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooShort.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])
    },

    'Modify Wanted: One Character Too Short Test': browser => {
        //Verifies error messages for inputs submitted one character below its minimum accepted length
        //Does not check for calendar inputs

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //sets 'warrantID' field
        browser.setValue(selectors.war, data.tooShort.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooShort.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['lic'])
    },

    'Cancel Wanted: One Character Too Short Test': browser => {
        //Verifies error messages for inputs submitted one character below its minimum accepted length
        //Does not check for calendar inputs

        //loads the 'Cancel Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enter values
        functions.enterValue(selectors.war, data.tooShort.input.war, browser)
        functions.enterValue(selectors.rfc, data.tooShort.input.rfc, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.tooShort.output.errorList['rfc'])
    },

    'Enter Wanted: One Character Too Long Test': browser => {
        //Verifies error messages for inputs submitted one character above its maximum accepted length
        //Does not check for calendar inputs

        //loads the 'Enter Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooLong.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hdr'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['mke'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['nam'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['hai'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['off'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oln'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lic'])
    },

    'Modify Wanted: Too Long Test': browser => {
        //Verifies error messages for inputs submitted one character above its maximum accepted length
        //Does not check for calendar inputs

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //sets 'warrantID' field
        functions.enterValue(selectors.war, data.tooLong.input.war, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.tooLong.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

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
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['oln'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['lic'])
    },

    'Cancel Wanted: Too Long Test': browser => {
        //Verifies error messages for inputs submitted one character above its maximum accepted length
        //Does not check for calendar inputs

        //loads the 'Cancel Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enters input fields
        functions.enterValue(selectors.war, data.tooLong.input.war, browser)
        functions.enterValue(selectors.rfc, data.tooLong.input.rfc, browser)

        //clicks submits
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooLong.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.tooLong.output.errorList['rfc'])
    },

    "Enter Wanted: Tests for '.'": browser => {
        //Verifies error messages for inputs submitted with a '.'

        //loads the 'Enter Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.invalidPeriods.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
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
    },

    "Modify Wanted: Tests for '.'": browser => {
        //Verifies error messages for inputs submitted with a '.'

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //sets 'warrantID' field
        browser.setValue(selectors.war, data.invalidPeriods.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.invalidPeriods.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
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
    },

    "Cancel Wanted: Tests for '.'": browser => {
        //Verifies error messages for inputs submitted with a '.'

        //loads the 'Cancel Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enters input fields
        functions.enterValue(selectors.war, data.invalidPeriods.input.war, browser)
        functions.enterValue(selectors.rfc, data.invalidPeriods.input.rfc, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.invalidPeriods.output.errorList['rfc'])

    },

    'Enter Wanted: Alphabetical Characters Test': browser => {
        //Inputs alphabetical characters in each field and verifies error messages for the fields that do not accept alphabetical characters.
        //Verifies inputs are accepted for fields that accept alphabetical characters

        //loads the 'Enter Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.alphabeticalCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['lis'])
    },

    'Modify Wanted: Alphabetical Characters Test': browser => {
        //Inputs alphabetical characters in each field and verifies error messages for the fields that do not accept alphabetical characters.
        //Verifies inputs are accepted for fields that accept alphabetical characters

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //sets 'warrantID' field
        browser.setValue(selectors.war, data.alphabeticalCharacters.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.alphabeticalCharacters.input, browser)

        //enters dropdown fields
        browser.click(selectors.dropdowns.sexFemale)
        browser.click(selectors.dropdowns.raceAsian)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['lis'])
    },

    'Cancel Wanted: Alphabetical Characters Test': browser => {
        //Inputs alphabetical characters in each field and verifies error messages for the fields that do not accept alphabetical characters.
        //Verifies inputs are accepted for fields that accept alphabetical characters

        //loads the 'Cancel Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enters input fields
        functions.enterValue(selectors.war, data.alphabeticalCharacters.input.war, browser)
        functions.enterValue(selectors.rfc, data.alphabeticalCharacters.input.rfc, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.alphabeticalCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.alphabeticalCharacters.output.errorList['war'])
    },

    'Enter Wanted: Special Characters Test': browser => {
        //Inputs special characters in each field and verifies error messages for the fields that do not accept special characters.
        //Verifies inputs are accepted for fields that accept special characters

        //loads the 'Enter Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.specialCharacters.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.specialCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['oai'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['wgt'])

        /* BUG - See GWQ-58
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hai'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['lis'])
    },

    'Modify Wanted: Special Characters Test': browser => {
        //Inputs special characters in each field and verifies error messages for the fields that do not accept special characters.
        //Verifies inputs are accepted for fields that accept special characters

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //sets 'warrantID' field
        browser.setValue(selectors.war, data.specialCharacters.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.specialCharacters.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.specialCharacters.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['war'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hgt'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['wgt'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['oai'])

        /* BUG - See GWQ-58
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['hai'])
        */ 
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList['lis'])
    },

    'Cancel Wanted: Special Characters Test': browser => {
        //Inputs special characters in each field and verifies error messages for the fields that do not accept special characters.
        //Verifies inputs are accepted for fields that accept special characters

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enters input fields
        functions.enterValue(selectors.war, data.specialCharacters.input.war, browser)
        functions.enterValue(selectors.rfc, data.specialCharacters.input.rfc, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.tooShort.output.header)

        //checks that each error message that is listed in the data has been printed
        browser.verify.containsText(selectors.messages.errorList, data.specialCharacters.output.errorList.war)
    },

    'Enter Wanted: Numeric Characters Test': browser => {
        //Inputs numeric characters in each field and verifies error messages for the fields that do not accept numeric characters.
        //Verifies inputs are accepted for fields that accept numeric characters

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.enterW, browser)

        //enters input fields
        functions.enterFields(selectors.fields, data.numericalCharacters.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.numericalCharacters.output.header)

        //Checks that all expected error messages are displayed
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['mke'])

        /* BUG - See See GWQ-58
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['hai'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['lis'])
    },

    'Modify Wanted: Numerical Characters Test': browser => {
        //Inputs numeric characters in each field and verifies error messages for the fields that do not accept numeric characters.
        //Verifies inputs are accepted for fields that accept numeric characters

        //loads the 'Modify Wanted' form
        functions.loadChosenWanted(selectors.buttons.modifyW, browser)

        //sets 'warrantID' field
        browser.setValue(selectors.war, data.numericalCharacters.input.war)

        //enters input fields
        functions.enterFields(selectors.fields, data.numericalCharacters.input, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.numericalCharacters.output.header)

        //Checks that all expected error messages are displayed
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['mke'])

        /* BUG - See See GWQ-58
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['hai'])
        */

        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['ols'])
        browser.verify.containsText(selectors.messages.errorList, data.numericalCharacters.output.errorList['lis'])
    },

    'Cancel Wanted: Numerical Characters Test': browser => {
        //Inputs numeric characters in each field and verifies error messages for the fields that do not accept numeric characters.
        //Verifies inputs are accepted for fields that accept numeric characters

        //loads the 'Cancel Wanted' form
        functions.loadChosenWanted(selectors.buttons.cancelW, browser)

        //enters input fields
        functions.enterValue(selectors.war, data.numericalCharacters.input.war, browser)
        functions.enterValue(selectors.rfc, data.numericalCharacters.input.rfc, browser)

        //clicks submit
        browser.click(selectors.buttons.submit)

        //verifies that expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.numericalCharacters.output.header)
    }
}