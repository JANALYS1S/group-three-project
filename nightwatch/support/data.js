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
            old: '',
            lic: '',
            lis: '',
            lid: ''
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
            old: '',
            lic: '',
            lis: 'UT',
            lid: ''
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

    justLongEnough: {
        input: {
            war: '1234567890',
            rfc: '1234567890',
            dat: '01012000',
            hdr: '123456789',
            mke: 'MK',
            oai: 'CHI1234SI',
            nam: 'Yar',
            hgt: '607',
            wgt: '2',
            hai: 'Red',
            off: 'Arson',
            dow: '05022016',
            oln: '1',
            ols: 'IL',
            old: '05022016',
            lic: 'abc12',
            lis: 'IL',
            lid: '05022016'
        },

        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresdens.F.A.607.200.Brown.Arson.2016-05-02.1234567890.IL.2016-05-02.abc123.IL.2016-05-02'
        }
    },

    almostTooLong: {
        input: {
            war: '1234567890',
            rfc: '123456789022345678903234567890423456789052345678906234567890723456789082345678909234567890103456789011345678901234567890133456789014345678901534567890',
            dat: '01012000',
            hdr: '1234567890123456789',
            mke: 'MAKE',
            oai: 'CHI1234SI',
            nam: 'supercalifragilisticexpialidoc',
            sex: 'M',
            rac: 'W',
            hgt: '607',
            wgt: '200',
            hai: 'aquamarine',
            off: 'superhyperspeed',
            dow: '05022016',
            oln: '12345678901234567890',
            ols: 'IL',
            old: '05022016',
            lic: '12345678',
            lis: 'IL',
            lid: '05022016'
        },

        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresdens.F.A.607.200.Brown.Arson.2016-05-02.1234567890.IL.2016-05-02.abc123.IL.2016-05-02'
        }
    },

    tooShort:
        {
            input: {
                //warrantID
                war: '123456789',

                //reason for cancellation
                rfc: '123456789',

                //date of cancellation
                dat: '0101200',

                //Enter Wanted/Modify Wanted fields in the order they appear
                hdr: '12345678',
                mke: 'a',
                oai: 'abcdefgh',
                nam: 'Al',
                sex: 'F',
                rac: 'W',
                hgt: '12',
                wgt: '12',
                hai: 'no',
                off: 'high',
                dow: '0101200',
                oln: '1',
                ols: 'A',
                old: '0101200',
                lic: '1',
                lis: 'A',
                lid: '0101200'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be between 1 and 3 characters long.',
                    hai: 'The "Hair" field should be between 3 and 10 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: 'The "Drivers\' License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field should be 2 characters long.',
                    old: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                    lid: 'The "License Year" field should be 4 characters long.',
                    war: 'The "Warrant ID" field should be 10 characters long.',
                    rfc: 'The "Reason for Cancellation" field should be between 10 and 150 characters long.',
                    doc: 'The "Date of Cancellation" field can include dates after 1900.',
                },
                assembledQuery: '',

            }
        },

    tooLong:
        {
            input: {
                war: '12345678901',
                hdr: 'supercalifragilistic',
                rfc: '123456789022345678903234567890423456789052345678906234567890723456789082345678909234567890103456789011345678901234567890133456789014345678901534567890X',
                mke: 'speed',
                oai: 'applebeesz',
                nam: 'supercalifragilisticexpialidoci',
                hgt: '9999',
                wgt: '9999',
                hai: 'aquamarinee',
                off: 'superhyperspeeed',
                dow: '010120001',
                oln: '123456789012345678901',
                ols: 'KAN',
                old: '010120001',
                lic: '123456789',
                lis: 'KAN',
                lid: '010120001'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be between 1 and 3 characters long.',
                    hai: 'The "Hair" field should be between 3 and 10 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: 'The "Drivers License" field should be between 1 and 20 characters long.',
                    ols: 'The "DL State" field should be 2 characters long.',
                    old: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                    lid: 'The "License Year" field should be 4 characters long.',
                    war: 'The "Warrant ID" field should be 10 characters long.',
                    rfc: 'The "Reason for Cancellation" field should be between 10 and 150 characters long.',
                    doc: 'The "Date of Cancellation" field can include dates after 1900.',
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },

    invalidPeriods:
        {
            input: {
                war: '..........',
                rfc: '..........',
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
                dow: '........',
                oln: '..........',
                ols: '..',
                old: '........',
                lic: '.....',
                lis: '..',
                lid: '........'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    hdr: 'The "Header" field has one or more periods, which are unacceptable in any field.',
                    mke: 'The "MKE" field has one or more periods, which are unacceptable in any field.',
                    oai: 'The "Originating Agency Identifier" field has one or more periods, which are unacceptable in any field.',
                    nam: 'The "Name" field has one or more periods, which are unacceptable in any field.',
                    sex: 'The "Sex" field should be 1 character long.',
                    rac: 'The "Race" field should be 1 character long.',
                    hgt: 'The "Height" field has one or more periods, which are unacceptable in any field.',
                    wgt: 'The "Weight" field has one or more periods, which are unacceptable in any field.',
                    hai: 'The "Hair" field has one or more periods, which are unacceptable in any field.',
                    off: 'The "Offense" field has one or more periods, which are unacceptable in any field.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: 'The "Drivers License" field has one or more periods, which are unacceptable in any field.',
                    ols: 'The "DL State" field has one or more periods, which are unacceptable in any field.',
                    old: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field has one or more periods, which are unacceptable in any field.',
                    lis: 'The "License State" field has one or more periods, which are unacceptable in any field.',
                    lid: 'The "License Year" field should be 4 characters long.',
                    war: 'The "Warrant ID" field has one or more periods, which are unacceptable in any field.',
                    rfc: 'The "Reason for Cancellation" field has one or more periods, which are unacceptable in any field.',
                    doc: 'The "Date of Cancellation" field can include dates after 1900.',
                },
                assembledQuery: ''
            }
        },

    alphabeticalCharacters:
        {
            input: {
                war: 'abcdefghik',
                rfc: 'abcdefghik',
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
                old: '01012000',
                lic: 'abcde',
                lis: 'ab',
                lid: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.',
                    war: 'The "Warrant ID" field can only include numeric characters.',
                },
                assembledQuery: ''
            }
        },

    specialCharacters:
        {
            input: {
                war: '!@#$%^&*()',
                rfc: '!@#$%^&*()',
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
                old: '01012000',
                lic: '=-)(*',
                lis: '/]',
                lid: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    oai: 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
                    hgt: 'The "Height" field can only include numeric characters.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    hai: 'can only include characters from the English Alphabet.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.',
                    war: 'The "Warrant ID" field can only include numeric characters.',
                },
                assembledQuery: ''
            }
        },

    numericalCharacters:
        {
            input: {
                war: '1234567890',
                rfc: '1234567890',
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
                old: '01012000',
                lic: '12345',
                lis: '12',
                lid: '01012000'
            },

            output: {
                header: "Errors Received:",
                queryTitle: 'No results generated due to error.',
                errorList: {
                    mke: 'The "MKE" field can only include characters from the English Alphabet or special characters.',
                    hai: 'The "Hair" field can only include characters from the English Alphabet.',
                    ols: 'The "DL State" field can only include a valid State/Territory abbreviation.',
                    lis: 'The "License State" field can only include a valid State/Territory abbreviation.',
                },
                assembledQuery: ''
            }
        },

    whiteSpaceEW: {
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

    whiteSpaceMW: {
        input: {
            fields: {},
            dropdowns: {
                sex: '',
                rac: ''
            },
            dates: {
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
            `The "Warrant ID" field must be included.`,
            `The "Warrant ID" field can only include numeric characters.`,
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

    jDefaultData: {
        input: {
            fields: {
                hdr: 'abc123!@#',
                mke: '#Ab',
                oai: '12345abcd',
                nam: 'John Smith 2!',
                hgt: '601',
                wgt: '200',
                hai: 'Brown',
                off: 'Jaywalking <3',
                oln: '123abc@%',
                ols: 'UT',
                lic: '123ABC',
                lis: 'OK',
            },
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


    },

    noData: {
        input: {
            fields: {},
            dropdowns: {},
            dates: {}
        }
    }

}