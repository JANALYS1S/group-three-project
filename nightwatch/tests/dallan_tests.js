const selectors = require('../support/selectors')
//const functions = require('../support/functions')
const data = require('../support/DDdata')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },

    'Good Data For Date Fields':  browser => {
        browser
        .waitForElementVisible(selectors.buttons.menuButton, 10000)
        .click(selectors.buttons.menuButton)
        .waitForElementVisible(selectors.buttons.enterW, 3000)
        .click(selectors.buttons.enterW)
        .setValue(selectors.fields.hdr, data.goodData.input2.hdr)
        .click(selectors.calendars.dow)
        .setValue(selectors.calendars.dow, data.goodData.input2.dow)
        .pause(2000)
        .setValue(selectors.calendars.lid, data.goodData.input2.lid)
        .pause(2000)
        .click(selectors.calendars.old)
        .setValue(selectors.calendars.old, data.goodData.input2.old)
        .click(selectors.buttons.submit)
        .expect.element(selectors.messages.errorList).to.be.visible
    },
'Breaking Year Fields': browser => {
    browser
    .waitForElementVisible(selectors.buttons.menuButton, 10000)
    .click(selectors.buttons.menuButton)
    .waitForElementVisible(selectors.buttons.enterW, 3000)
    .click(selectors.buttons.enterW)
    .waitForElementVisible(selectors.fields.hdr, 3000)
    .click(selectors.fields.hai)
    .setValue(selectors.fields.hai, data.goodData.input2)
    .click(selectors.calendars.dow)
    .setValue(selectors.calendars.dow, data.breakingYear.dOW)
    .waitForElementVisible(selectors.calendars.lid, 3000)
    .click(selectors.calendars.lid)
    .setValue(selectors.calendars.lid, data.breakingYear.dlED)
    .click(selectors.calendars.old)
    .setValue(selectors.calendars.old, data.breakingYear.lED)
    .click(selectors.buttons.submit)
    .expect.element(selectors.messages.breakingYearError).to.be.visible
}




}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // 'I can put in information and get a good text message as a result': browser => {
    //     functions.enterFields(selectors.fields, data.goodData.input, browser)
    //     browser
    //         //I've set all the fields, time to submit
    //         .click(selectors.buttons.submit)
    //         .pause(100)
    //     //now I'll check that all the expected results are correct
    //     browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
    //     browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //     browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
    //     browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    // },

    // 'If I put in good data, but only one of a set of optional fields, I get an error': browser => {
    //     functions.enterFields(selectors.fields, data.badData.input, browser)
    //     browser
    //         //I've set all the fields, time to submit
    //         .click(selectors.buttons.submit)
    //         .pause(100)
    //     //now I'll check that all the expected results are correct
    //     browser.expect.element(selectors.messages.header).text.to.equal(data.badData.output.header)
    //     //this transaction only has one error message to check, so I don't need to repeat the check
    //     functions.enterLists(selectors.messages.errorList, data.badData.output.errorList, browser)
    //     browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.output.queryTitle)
    //     browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.output.assembledQuery)
    // },

    // 'If I put in data that is shorter than the minimum requirements, I get an error for each field effected.': browser => {
    //     functions.enterFields(selectors.fields, data.badData2.input, browser)
    //     browser
    //         //I've set all the fields, time to submit
    //         .click(selectors.buttons.submit)
    //         .pause(100)
    //     //now I'll check that all the expected results are correct
    //     browser.expect.element(selectors.messages.header).text.to.equal(data.badData2.output.header)
    //     //checks that each error message that is listed in the data has been printed
    //     functions.enterLists(selectors.messages.errorList, data.badData2.output.errorList, browser)
    //     browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData2.output.queryTitle)
    //     browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData2.output.assembledQuery)
    // },

    // 'If I put in data that is longer than the maximum allowed, I get an error for each field effected.': browser => {
    //     functions.enterFields(selectors.fields, data.badData3.input, browser)
    //     browser
    //         //I've set all the fields, time to submit
    //         .click(selectors.buttons.submit)
    //         .pause(100)
    //     //now I'll check that all the expected results are correct
    //     browser.expect.element(selectors.messages.header).text.to.equal(data.badData3.output.header)
    //     //checks that each error message that is listed in the data has been printed
    //     functions.enterLists(selectors.messages.errorList, data.badData3.output.errorList, browser)
    //     browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData3.output.queryTitle)
    //     browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData3.output.assembledQuery)
    // }

