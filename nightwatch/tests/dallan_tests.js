const selectors = require('../support/selectors')
const functions = require('../support/functions')
const data = require('../support/DDdata')

module.exports = {
    beforeEach: browser => {
        browser.url('http:localhost:3000')
    },

    after: browser => {
        browser.end()
    },

    'Good Data For Date Fields Enter Wanted': browser => {
        browser
            .waitForElementVisible(selectors.buttons.menuButton, 10000)
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.enterW, 3000)
            .click(selectors.buttons.enterW)
            .setValue(selectors.fields.hdr, data.goodData.input2.hdr)
            .click(selectors.calendars.dow)
            .setValue(selectors.calendars.dow, data.goodData.input2.dow)
            //  .pause(2000)
            .setValue(selectors.calendars.lid, data.goodData.input2.lid)
            .pause(2000)
            .click(selectors.calendars.old)
            .setValue(selectors.calendars.old, data.goodData.input2.old)
            .click(selectors.buttons.submit)
            .expect.element(selectors.messages.errorList).to.be.visible
    },
    'Good Data For Date Fields Modify Wanted': browser => {
        browser
            .waitForElementVisible(selectors.buttons.menuButton, 10000)
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.modifyW, 3000)
            .click(selectors.buttons.modifyW)
            .setValue(selectors.war, data.modifyWanted.warrantID)
            .click(selectors.calendars.dow)
            .setValue(selectors.calendars.dow, data.goodData.input2.dow)
            .setValue(selectors.calendars.lid, data.goodData.input2.lid)
            .click(selectors.calendars.old)
            .setValue(selectors.calendars.old, data.goodData.input2.old)
            .click(selectors.buttons.submit)
    },
    'Good Data For Date Fields Cancel Wanted': browser => {
        browser
            .waitForElementVisible(selectors.buttons.menuButton, 10000)
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.cancelW, 10000)
            .click(selectors.buttons.cancelW)
            .waitForElementVisible(selectors.war, 10000)
            .setValue(selectors.war, data.modifyWanted.warrantID)
            .click(selectors.rfc)
            .setValue(selectors.rfc, data.goodData.input2.nam)
            .click(selectors.calendars.dateoC)
            .setValue(selectors.calendars.dateoC, data.goodData.input2.dateOC)
            .click(selectors.buttons.submit)
    },



    //  the next three tests are testing how many numbers a user can input into the calender fields
    'Breaking Year Fields Enter Wanted': browser => { //should fail in second version 
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
    },
    'Breaking Year Fields Modify Wanted': browser => { //should fail in second version 
        browser
            .waitForElementVisible(selectors.buttons.menuButton, 10000)
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.modifyW, 3000)
            .click(selectors.buttons.modifyW)
            .waitForElementVisible(selectors.war, 3000)
            .click(selectors.war)
            .setValue(selectors.war, data.goodData.input2)
            .click(selectors.calendars.dow)
            .setValue(selectors.calendars.dow, data.breakingYear.dOW)
            .waitForElementVisible(selectors.calendars.lid, 3000)
            .click(selectors.calendars.lid)
            .setValue(selectors.calendars.lid, data.breakingYear.dlED)
            .click(selectors.calendars.old)
            .setValue(selectors.calendars.old, data.breakingYear.lED)
            .click(selectors.buttons.submit)
        //     browser.verify.containsText(selectors.messages.errorList, data.breakingYear.dOC)
    },
    'Breaking Year Fields Cancel Wanted': browser => {
        browser
            .waitForElementVisible(selectors.buttons.menuButton, 10000)
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.cancelW, 3000)
            .click(selectors.buttons.cancelW)
            .waitForElementVisible('input[name="resInput"]', 3000)
            .click('input[name="resInput"]')
            .setValue('input[name="resInput"]', data.cancelWanted.reasonC)
            .click('input[name="datInput"]')
            .setValue('input[name="datInput"', data.cancelWanted.dOC)
            .waitForElementVisible(selectors.buttons.submit, 3000)
            .click(selectors.buttons.submit)
            .getText(selectors.messages.errorList, text => {
                console.log(`Found text ${text.value}, input: ${data.cancelWanted.reasonC}`)
            })
            .pause(100)
        browser.verify.containsText(selectors.messages.errorList, data.cancelWanted.dOCError)



    },
    'Number of days in a month': browser => {
        browser
            //starting with enter wanted 
            .waitForElementVisible(selectors.buttons.menuButton, 10000)
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.enterW, 1000)
            .click(selectors.buttons.enterW)
            .waitForElementVisible(selectors.buttons.clear, 10000)
            .click(selectors.fields.hdr)
            .setValue(selectors.fields.hdr, data.goodData.input)
            .click(selectors.calendars.dow)
            .setValue(selectors.calendars.dow, data.numberOfDaysInMonth.dateWarViol)
            .click(selectors.calendars.old)
            .setValue(selectors.calendars.old, data.numberOfDaysInMonth.dLExpirationDate)
            .click(selectors.calendars.lid)
            .setValue(selectors.calendars.lid, data.numberOfDaysInMonth.licenseExpirationDate)
            .click(selectors.buttons.submit)
            .expect.element(selectors.messages.queryTitle).to.be.visible
        browser
            //testing modify wanted
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.modifyW, 10000)
            .click(selectors.buttons.modifyW)
            .waitForElementVisible(selectors.war, 10000)
            .setValue(selectors.war, data.goodData.input)
            .click(selectors.calendars.dow)
            .setValue(selectors.calendars.dow, data.numberOfDaysInMonth.dateWarViol)
            .click(selectors.calendars.old)
            .setValue(selectors.calendars.old, data.numberOfDaysInMonth.dLExpirationDate)
            .click(selectors.calendars.lid)
            .setValue(selectors.calendars.lid, data.numberOfDaysInMonth.licenseExpirationDate)
            .click(selectors.buttons.submit)
            .expect.element(selectors.messages.queryTitle).to.be.visible
        browser
            //testing cancel wanted
            .click(selectors.buttons.menuButton)
            .waitForElementVisible(selectors.buttons.modifyW, 10000)
            .click(selectors.buttons.cancelW)
            .waitForElementVisible(selectors.calendars.dateoC, 1000)
            .click(selectors.war)
            .setValue(selectors.war, data.goodData.input)
            .click(selectors.calendars.dateoC)
            .setValue(selectors.calendars.dateoC, data.numberOfDaysInMonth.dateofCancellation)
            .click(selectors.buttons.submit)
            .expect.element(selectors.messages.queryTitle).to.be.visible


    },
















































    //   'I can put in information and get a good text message as a result': browser => {
    //       functions.enterFields(selectors.fields, data.goodData.input, browser)
    //       browser
    //           I've set all the fields, time to submit
    //           .click(selectors.buttons.submit)
    //           .pause(100)
    //       now I'll check that all the expected results are correct
    //       browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
    //       browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //       browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
    //       browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    //   },

    //   'If I put in good data, but only one of a set of optional fields, I get an error': browser => {
    //       functions.enterFields(selectors.fields, data.badData.input, browser)
    //       browser
    //           I've set all the fields, time to submit
    //           .click(selectors.buttons.submit)
    //           .pause(100)
    //       now I'll check that all the expected results are correct
    //       browser.expect.element(selectors.messages.header).text.to.equal(data.badData.output.header)
    //       this transaction only has one error message to check, so I don't need to repeat the check
    //       functions.enterLists(selectors.messages.errorList, data.badData.output.errorList, browser)
    //       browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.output.queryTitle)
    //       browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.output.assembledQuery)
    //   },

    //   'If I put in data that is shorter than the minimum requirements, I get an error for each field effected.': browser => {
    //       functions.enterFields(selectors.fields, data.badData2.input, browser)
    //       browser
    //           I've set all the fields, time to submit
    //           .click(selectors.buttons.submit)
    //           .pause(100)
    //       now I'll check that all the expected results are correct
    //       browser.expect.element(selectors.messages.header).text.to.equal(data.badData2.output.header)
    //       checks that each error message that is listed in the data has been printed
    //       functions.enterLists(selectors.messages.errorList, data.badData2.output.errorList, browser)
    //       browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData2.output.queryTitle)
    //       browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData2.output.assembledQuery)
    //   },

    //   'If I put in data that is longer than the maximum allowed, I get an error for each field effected.': browser => {
    //       functions.enterFields(selectors.fields, data.badData3.input, browser)
    //       browser
    //           I've set all the fields, time to submit
    //           .click(selectors.buttons.submit)
    //           .pause(100)
    //       now I'll check that all the expected results are correct
    //       browser.expect.element(selectors.messages.header).text.to.equal(data.badData3.output.header)
    //       checks that each error message that is listed in the data has been printed
    //       functions.enterLists(selectors.messages.errorList, data.badData3.output.errorList, browser)
    //       browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData3.output.queryTitle)
    //       browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData3.output.assembledQuery)
    //   }

}