
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



        output: {

            header: 'Valid',

            errorList: {},

            queryTitle: 'Assembled Query:',

            assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresdens.M.W.607.200.Brown.Arson.05022016......'

        }

    },



    badData: { //the 'key' for the fields should match the key of the selectors in css_selectors 

        input: {

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
    }
}