module.exports = {
    
    fields: {
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
        dow: 'input[name="dowInput"]',
        oly: 'input[name="oldInput"]',
        liy: 'input[name="lidInput"]'
    },

    dropdowns: {
        sex: 'select[name = "sexInput"]',
        rac: 'select[name = "racInput"]'
    },

    buttons: {
        submit: 'button[id="saveBtn"]',
        popOut: 'div[class="bm-burger-button"]',
        enterW: 'p[name="enterOption"]',
        modifyW: 'p[name="modifyOption"]',
        cancelW: 'p[name="cancelOption"]',
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
