module.exports = {

    goodData: {
        input: {
            hdr: '123456789',
            mke: 'MKE',
            oai: 'CHI1234SI',
            nam: 'Harry Dresdens',
            sex: 'M',
            rac: 'W',
            hgt: '607',
            wgt: '200',
            hai: 'Brown',
            off: 'Arson',
            dow: '05022016',
            oln: '',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },
        input2: {
            hdr: '123456789',
            mke: 'asd',
            oai: '123456789',
            nam: 'Dallan Dixon',
            sex: 'M',
            rac: 'White',
            hgt: '511',
            wgt: '123',
            hai: 'red',
            off: '12345',
            dow: '02092018',
            oln: 'a',
            ols: 'UT',
            oly: '02062018',
            lic: '12345',
            lis: 'UT',
            liy: '02062018',
            dateOC: '02112018'
        },
        

        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresdens.M.W.607.200.Brown.Arson.05022016......'
        }
    },

    badData: { //the 'key' for the fields should match the key of the selectors in css_selectors 
        input: {
            war: '1234567890',
            hdr: '123456789',
            mke: 'MKE',
            oai: 'CHI1234SI',
            nam: 'Harry Dresden',
            sex: 'M',
            rac: 'W',
            hgt: '607',
            wgt: '200',
            hai: 'Brown',
            off: 'Arson',
            dow: '05022016',
            oln: '12345',
            ols: '',
            oly: '',
            lic: '',
            lis: 'UT',
            liy: ''
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                oln: "If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.",
                lis: "If License Plate, License State, or License Year are present, all three must be present."
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        }
    },
    breakingYear:{
        dOW: '123456789012345',
        lED: '1234567890112345', //oly
        dlED: '123456789012345', //liy
    },
    cancelWanted: {
        reasonC: 'asdfgh',
        dOC: '123456789012345', //Date of Cancellation
        dOCError: 'The "Date of Cancellation" field should be 10 characters long.',
        temporaryE: 'At least one optional field needs to be included.'
       
    },
    modifyWanted: {
        warrantID: '1234567890',
        dCError: 'The "Date of Cancellation" field should be 10 characters long.',
    },
    numberOfDaysInMonth: {
        dateWarViol: '02312018',
        dLExpirationDate: '02312018',
        licenseExpirationDate: '02312018',
        dateofCancellation: '02312018',
    },
}