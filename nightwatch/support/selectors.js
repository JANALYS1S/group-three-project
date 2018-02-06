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
        lis: 'input[name="lisInput"]'
    },

    calendars: {
        dow: 'input[name="dowInput"]',
        oly: 'input[name="olyInput"]',
        liy: 'input[name="liyInput"]'
    },

    dropdowns: {
        sex: 'select[name = "sexInput"]',
        rac: 'select[name = "racInput"]'
    },

    buttons: {
        submit: 'button[id="saveBtn"]',
        popOut: 'button[style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; margin: 0px; padding: 0px; border: none; opacity: 0; font-size: 8px; cursor: pointer;"]',
        enterW: 'p[name="enterOption"]',
        modifyW: 'p[name="modifyOption"]',
        cancelW: 'p[name="cancelOption"]',
    },

    messages: {
        header: 'h4[id="validHeader"]',
        errorList: 'ul[id="errorList"]',
        queryTitle: 'span[name="queryTitle"]',
        assembledQuery: 'span[name="queryBody"]'
    }
}
