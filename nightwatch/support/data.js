module.exports = {

    canSubmit: {
        input: {
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresdens',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                oln: '',
                ols: '',
                lic: '',
                lis: ''
            },
            dropdowns: {
                sex: 'M',
                rac: 'W'
            },
            dates: {
                dow: '05022016',
                old: '07312017',
                lid: ''
            }
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
    },

    whiteSpace: {
        input: {
            fields: {},
            dropdowns: {
                sex: 'M',
                rac: 'W'
            },
            dates: {
                dow: '01012018',
                old: '01012020',
                lid: '09012018'
            }
        },
        spaces: ["\uE00D", "\uE00D", "\uE00D", "\uE00D", "\uE00D", "\uE00D", "\uE00D", "\uE00D", "\uE00D"],
        neededChars: {
            hdr: 9,
            mke: 3,
            oai: 9,
            nam: 3,
            hgt: 3,
            wgt: 3,
            hai: 3,
            off: 5,
            oln: 2,
            ols: 2,
            lic: 5,
            lis: 2
        },
        messages: [
            `The "Header" field must be included.`,
            `The "MKE" field must be included.`,
            `The "Originating Agency Identifier" field must be included.`,
            `The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.`,
            `The "Name" field must be included.`,
            `The "Height" field must be included.`,
            `The "Height" field can only include numeric characters.`,
            `The "Height" field needs to have a value greater than 0.`,
            `The "Weight" field must be included.`,
            `The "Weight" field can only include numeric characters.`,
            `The "Weight" field needs to have a value greater than 0.`,
            `The "Hair" field must be included.`,
            `The "Offense" field must be included.`,
            `The "DL State" field can only include a valid State/Territory abbreviation.`,
            `The "License Plate" field can only include characters from the English Alphabet or numeric characters.`,
            `The "License State" field can only include a valid State/Territory abbreviation.`
        ]
    },

    noData: {
        input: {
            fields: {},
            dropdowns: {},
            dates: {}
        }
    }

}
