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
            oln: '1234567890',
            ols: 'IL',
            oly: '05022016',
            lic: 'abc123',
            lis: 'IL',
            liy: '05022016'
        },

        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresdens.F.A.607.200.Brown.Arson.2016-05-02.1234567890.IL.2016-05-02.abc12.IL.2016-05-02'
        }
    },

    tooShort:
        {
            input: {
                hdr: '1',
                mke: 'a',
                oai: 'abc',
                nam: 'A',
                sex: 'F',
                rac: 'W',
                hgt: '1',
                wgt: '1',
                hai: 'ab',
                off: 'a',
                dow: '01012000',
                oln: '123',
                ols: 'al',
                oly: '01012000',
                lic: '789',
                lis: 'k',
                liy: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    war: 'The "Warrant ID" field should be 10 characters long.',
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    sex: 'The "Sex" field should be 1 character long.',
                    rac: 'The "Race" field should be 1 character long.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be between 1 and 3 characters long.',
                    hai: 'The "Hair" field should be between 3 and 10 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: 'The "Drivers\' License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    oly: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                    liy: 'The "License Year" field should be 4 characters long.'
                },
                assembledQuery: '',

            }
        },

    tooLong:
        {
            input: {
                hdr: 'supercalifragilisticexpialidocious',
                mke: 'supercalifragilisticexpialidocious',
                oai: 'supercalifragilisticexpialidocious123',
                nam: 'supercalifragilisticexpialidocious',
                sex: 'Transgender',
                rac: 'Asian',
                hgt: '99999999',
                wgt: '99999999',
                hai: 'supercalifragilisticexpialidocious',
                off: 'supercalifragilisticexpialidocious',
                dow: '9999999999',
                oln: 'supercalifragilisticexpialidocious',
                ols: 'Kansas',
                oly: '999999999',
                lic: '9999999999',
                lis: 'Kansas',
                liy: '999999999'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    war: 'The "Warrant ID" field should be 10 characters long.',
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    sex: 'The "Sex" field should be 1 character long.',
                    rac: 'The "Race" field should be 1 character long.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be between 1 and 3 characters long.',
                    hai: 'The "Hair" field should be between 3 and 10 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    oln: 'The "Drivers\' License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field should be 2 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },

    invalidPeriods:
        {
            input: {
                hdr: '.........',
                mke: '..',
                oai: '.........',
                nam: '...',
                sex: '.',
                rac: '.',
                hgt: '...',
                wgt: '...',
                hai: '...',
                off: '.....',
                dow: '01012000',
                oln: '..........',
                ols: '..',
                oly: '01012000',
                lic: '.....',
                lis: '..',
                liy: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    war: 'The "Warrant ID" field should be 10 characters long.',
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
                    nam: 'The "Name" field should be between 1 and 30 characters long.',
                    sex: 'The "Sex" field should be 1 character long.',
                    rac: 'The "Race" field should be 1 character long.',
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    hai: 'The "Hair" field should be between 1 and 3 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: 'The "Drivers\' License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    oly: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field can only include characters from the English Alphabet or numeric characters.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.',
                    liy: 'The "License Year" field should be 4 characters long.'
                },
                assembledQuery: ''
            }
        },

    alphabeticalCharacters:
        {
            input: {
                hdr: 'abcdefghi',
                mke: 'ab',
                oai: 'abcdefghi',
                nam: 'abc',
                hgt: 'abc',
                wgt: 'abc',
                hai: 'abc',
                off: 'abcde',
                dow: '01012000',
                oln: 'abcdefghij',
                ols: 'ab',
                oly: '01012000',
                lic: 'abcde',
                lis: 'ab',
                liy: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    war: 'The "Warrant ID" field can only include numeric characters.',
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.'
                },
                assembledQuery: ''
            }
        },

    specialCharacters:
        {
            input: {
                hdr: '!@#$%^&*(',
                mke: '!!',
                oai: ')-_=+[]{}',
                nam: '!@#',
                hgt: '!@#',
                wgt: '!@#',
                hai: '!@#',
                off: '!@#$%',
                dow: '01012000',
                oln: '!@#$%^`~(|',
                ols: '__',
                oly: '01012000',
                lic: '=-)(*',
                lis: '/]',
                liy: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    war: 'The "Warrant ID" field can only include numeric characters.',
                    oai: 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    hai: 'The "Hair" field should be between 1 and 3 characters long.',
                    oln: 'The "Drivers\' License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.'
                },
                assembledQuery: ''
            }
        },

    numericalCharacters:
        {
            input: {
                hdr: '123456789',
                mke: '00',
                oai: '123456789',
                nam: '123',
                hgt: '123',
                wgt: '123',
                hai: '123',
                off: '12345',
                dow: '01012000',
                oln: '1234567890',
                ols: '12',
                oly: '01012000',
                lic: '12345',
                lis: '12',
                liy: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    mke: 'The "MKE" field can only include characters from the English Alphabet or special characters.',
                    hai: 'The "Hair" field can only include characters from the English Alphabet or special characters.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.'
                },
                assembledQuery: ''
            }
        },

    blanks:
        {
            input: {
                hdr: ' ',
                mke: '',
                oai: '',
                nam: '',
                sex: '',
                rac: '',
                hgt: '',
                wgt: '',
                hai: '',
                off: '',
                dow: '',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            }
        },

    output: {
        header: "Errors Received:",
        queryTitle: 'No results generated due to error.',
        errorList: {
            mke: 'The field named "MKE" must be included.',
            oai: 'The field named "Originating Agency Identifier" must be included.',
            nam: 'The field named "Name" must be included.',
            sex: 'The field named "Sex" must be included.',
            rac: 'The field named "Race" must be included.',
            hgt: 'The field named "Height" must be included.',
            wgt: 'The field named "Weight" must be included.',
            hai: 'The field named "Hair" must be included.',
            off: 'The field named "Offense" must be included.',
            dow: 'The field named "Date of Warrant/Violation" must be included.'
        },
        assembledQuery: ''
    }
}