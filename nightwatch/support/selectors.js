module.exports = {
    
    fields: {
        war: 'input[name="widInput"]',
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
        rfC: 'input[name="resInput"]',
    },

    calendars: {
        dow: 'input[name="dowInput"]',
        old: 'input[name="oldInput"]',
        lid: 'input[name="lidInput"]',
        dateoC: 'input[name="datInput"]'
    },

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
        errorList: 'ul[id="errorList"]',
        
    }
}
