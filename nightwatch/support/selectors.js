module.exports = {
    
    fields: {
        //input fields for 'Enter Wanted' in order as shown
        hdr: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        nam: 'input[name="namInput"]',
        hgt: 'input[name="hgtInput"]',
        wgt: 'input[name="wgtInput"]',
        hai: 'input[name="haiInput"]',
        off: 'input[name="offInput"]',
        oln: 'input[name="olnInput"]',
        ols: 'input[name="olsInput"]',
        lic: 'input[name="licInput"]',
        lis: 'input[name="lisInput"]',
    },

    calendars: {
        //'Date of Warrant/Violation'
        dow: 'input[name="dowInput"]',

        //'DL Expiration Date'
        old: 'input[name="oldInput"]',

        //'License Expiration Date'
        lid: 'input[name="lidInput"]',
    },
 
    //'Warrant ID' field selector for 'Modify Wanted' and 'Cancel Wanted'
    war: 'input[name="widInput"]',

    //'Reason for Cancellation' field selector for 'Cancel Wanted'
    rfc: 'input[name="resInput"]',

    //'Date of Cancellation' form for 'Cancel Wanted'
    dat: 'input[name="datInput"]',

    dropdowns: {
        sex: 'select[name = "sexInput"]',
        rac: 'select[name = "racInput"]',

        //these selectors will let you select an option from the sex dropdown menu:
        sexFemale: 'select[name = "sexInput"] option[value="F"]',
        sexMale: 'select[name = "sexInput"] option[value="M"]',
        sexOther: 'select[name = "sexInput"] option[value="O"]',
        sexUnknown: 'select[name = "sexInput"] option[value="U"]',

        //these selectors will let you select the corresponding option from the race dropdown menu:
        raceAsian: 'select[name = "racInput"] option[value="A"]',
        raceBlack:'select[name = "racInput"] option[value="B"]',
        raceHispanic:'select[name = "racInput"] option[value="H"]',
        raceIndian:'select[name = "racInput"] option[value="I"]',
        raceWhite:'select[name = "racInput"] option[value="W"]',
        raceUnknown: 'select[name = "racInput"] option[value="U"]'
    },

    buttons: {
        submit: 'button[id="saveBtn"]',
        clear: 'button[id="clearBtn"]',
        menuButton: 'div[class="bm-burger-button"]',
        home: 'p[name="homeOption"]',
        enterW: 'p[name="enterOption"]',
        modifyW: 'p[name="modifyOption"]',
        cancelW: 'p[name="cancelOption"]',
        popOut: 'button[style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; margin: 0px; padding: 0px; border: none; opacity: 0; font-size: 8px; cursor: pointer;"]',
    },

    messages: {
        header: 'h4[id="validHeader"]',
        errorList: 'ul[id="errorList"]',
        queryTitle: 'span[name="queryTitle"]',
        assembledQuery: 'span[name="queryBody"]',
        expectedError: 'ul[name="errorList"]',
        breakingYearError: 'ul[id="errorList"]',
    }
}
