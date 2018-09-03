export const aggregate = {
    headers: [
        {
            name: 'dx',
            column: 'Data',
            valueType: 'TEXT',
            type: 'java.lang.String',
            hidden: false,
            meta: true,
        },
        {
            name: 'pe',
            column: 'Period',
            valueType: 'TEXT',
            type: 'java.lang.String',
            hidden: false,
            meta: true,
        },
        {
            name: 'value',
            column: 'Value',
            valueType: 'NUMBER',
            type: 'java.lang.Double',
            hidden: false,
            meta: false,
        },
        {
            name: 'numerator',
            column: 'Numerator',
            valueType: 'NUMBER',
            type: 'java.lang.Double',
            hidden: false,
            meta: false,
        },
        {
            name: 'denominator',
            column: 'Denominator',
            valueType: 'NUMBER',
            type: 'java.lang.Double',
            hidden: false,
            meta: false,
        },
        {
            name: 'factor',
            column: 'Factor',
            valueType: 'NUMBER',
            type: 'java.lang.Double',
            hidden: false,
            meta: false,
        },
    ],
    metaData: {
        items: {
            '201807': { name: 'July 2018' },
            ImspTQPwCqd: { name: 'Sierra Leone' },
            dx: { name: 'Data' },
            pe: { name: 'Period' },
            '201806': { name: 'June 2018' },
            ou: { name: 'Organisation unit' },
            Uvn6LCg7dVU: { name: 'ANC 1 Coverage', legendSet: 'fqs276KXCXi' },
            '201805': { name: 'May 2018' },
        },
        dimensions: {
            dx: ['Uvn6LCg7dVU'],
            pe: ['201805', '201806', '201807'],
            ou: ['ImspTQPwCqd'],
            co: [],
        },
    },
    width: 6,
    rows: [
        ['Uvn6LCg7dVU', '201805', '142.2', '29461.0', '243951.0', '1177.4'],
        ['Uvn6LCg7dVU', '201806', '118.8', '23813.0', '243951.0', '1216.7'],
        ['Uvn6LCg7dVU', '201807', '109.2', '22626.0', '243951.0', '1177.4'],
    ],
    height: 3,
};

export const event = {
    headers: [
        {
            name: 'fWIAEtYVEGk',
            column: 'Mode of Discharge',
            valueType: 'TEXT',
            type: 'java.lang.String',
            hidden: false,
            meta: true,
            optionSet: 'iDFPKpFTiVw',
        },
        {
            name: 'J5jldMd8OHv',
            column: 'Facility Type',
            valueType: 'TEXT',
            type: 'java.lang.String',
            hidden: false,
            meta: true,
        },
        {
            name: 'value',
            column: 'Value',
            valueType: 'NUMBER',
            type: 'java.lang.Double',
            hidden: false,
            meta: false,
        },
    ],
    metaData: {
        items: {
            RXL3lPSK8oG: { name: 'Clinic' },
            J5jldMd8OHv: { name: 'Facility Type' },
            ou: { name: 'Organisation unit' },
            CXw2yu5fodb: { name: 'CHC' },
            Fhbf4aKpZmZ: { name: 'Absconded', code: 'MODABSC' },
            fWIAEtYVEGk: { name: 'Mode of Discharge' },
            uYxK4wmcPqA: { name: 'CHP' },
            gj2fKKyp8OH: { name: 'Died', code: 'MODDIED' },
            Zj7UnCAulEk: { name: 'Inpatient morbidity and mortality' },
            ImspTQPwCqd: { name: 'Sierra Leone' },
            tDZVQ1WtwpA: { name: 'Hospital' },
            '2018': { name: '2018' },
            eBAyeGv0exc: { name: 'Inpatient morbidity and mortality' },
            pe: { name: 'Period' },
            EYbopBOJWsW: { name: 'MCHP' },
            fShHdgT7XGb: { name: 'Transferred', code: 'MODTRANS' },
            yeod5tOXpkP: { name: 'Discharged', code: 'MODDISCH' },
        },
        dimensions: {
            pe: ['2018'],
            J5jldMd8OHv: [
                'uYxK4wmcPqA',
                'tDZVQ1WtwpA',
                'EYbopBOJWsW',
                'RXL3lPSK8oG',
                'CXw2yu5fodb',
            ],
            ou: ['ImspTQPwCqd'],
            fWIAEtYVEGk: [
                'yeod5tOXpkP',
                'gj2fKKyp8OH',
                'fShHdgT7XGb',
                'Fhbf4aKpZmZ',
            ],
        },
    },
    width: 3,
    height: 20,
    rows: [
        ['MODTRANS', 'EYbopBOJWsW', '6877'],
        ['MODTRANS', 'uYxK4wmcPqA', '2535'],
        ['MODTRANS', 'CXw2yu5fodb', '2210'],
        ['MODTRANS', 'RXL3lPSK8oG', '578'],
        ['MODTRANS', 'tDZVQ1WtwpA', '406'],
        ['MODDISCH', 'EYbopBOJWsW', '6873'],
        ['MODDISCH', 'uYxK4wmcPqA', '2552'],
        ['MODDISCH', 'CXw2yu5fodb', '2234'],
        ['MODDISCH', 'RXL3lPSK8oG', '575'],
        ['MODDISCH', 'tDZVQ1WtwpA', '397'],
        ['MODDIED', 'EYbopBOJWsW', '6943'],
        ['MODDIED', 'uYxK4wmcPqA', '2524'],
        ['MODDIED', 'CXw2yu5fodb', '2249'],
        ['MODDIED', 'RXL3lPSK8oG', '568'],
        ['MODDIED', 'tDZVQ1WtwpA', '430'],
        ['MODABSC', 'EYbopBOJWsW', '6933'],
        ['MODABSC', 'uYxK4wmcPqA', '2575'],
        ['MODABSC', 'CXw2yu5fodb', '2224'],
        ['MODABSC', 'RXL3lPSK8oG', '595'],
        ['MODABSC', 'tDZVQ1WtwpA', '389'],
    ],
};