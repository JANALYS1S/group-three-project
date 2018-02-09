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
            .pause(2000)
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
            .pause(5000)
            .click(selectors.buttons.cancelW)
            .pause(3000)
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
            .pause(10000)
        browser.verify.containsText(selectors.messages.errorList, data.cancelWanted.dOCError)

    },

}