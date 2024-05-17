import { _getCodeCategory, _getCodesByAbbreviation } from '../utilities.js';
export const cpaReturnCodeCategories = [
    {
        cpaCodeMin: '900',
        cpaCodeMax: '914',
        cpaCodeCategory: 'FI Dishonoured Transaction'
    },
    {
        cpaCodeMin: '915',
        cpaCodeMax: '921',
        cpaCodeCategory: 'Customer Initiated Returns'
    },
    {
        cpaCodeMin: '922',
        cpaCodeMax: '922',
        cpaCodeCategory: 'Credit Return'
    },
    {
        cpaCodeMin: '990',
        cpaCodeMax: '990',
        cpaCodeCategory: 'Default'
    }
];
export const cpaReturnCodesDishonoured = {
    900: {
        cpaCodeFullName: 'Edit Reject',
        cpaCodeAbbreviationEnglish: 'REJ',
        cpaCodeAbbreviationFrench: 'REV'
    },
    901: {
        cpaCodeFullName: 'NSF',
        cpaCodeAbbreviationEnglish: 'NSF',
        cpaCodeAbbreviationFrench: 'DSP'
    },
    902: {
        cpaCodeFullName: 'Account Not Found',
        cpaCodeAbbreviationEnglish: 'CNT',
        cpaCodeAbbreviationFrench: 'ITV'
    },
    903: {
        cpaCodeFullName: 'Payment Stopped/Recalled',
        cpaCodeAbbreviationEnglish: 'STP',
        cpaCodeAbbreviationFrench: 'ARR'
    },
    905: {
        cpaCodeFullName: 'Account Closed',
        cpaCodeAbbreviationEnglish: 'CLS',
        cpaCodeAbbreviationFrench: 'FER'
    },
    907: {
        cpaCodeFullName: 'No Debit Allowed',
        cpaCodeAbbreviationEnglish: 'NCP',
        cpaCodeAbbreviationFrench: 'PPC'
    },
    908: {
        cpaCodeFullName: 'Funds Not Cleared',
        cpaCodeAbbreviationEnglish: 'FNC',
        cpaCodeAbbreviationFrench: 'FNL'
    },
    909: {
        cpaCodeFullName: 'Currency/Account Mismatch',
        cpaCodeAbbreviationEnglish: 'WCU',
        cpaCodeAbbreviationFrench: 'MDC'
    },
    910: {
        cpaCodeFullName: 'Payor/Payee Deceased',
        cpaCodeAbbreviationEnglish: 'DEC',
        cpaCodeAbbreviationFrench: 'DEC'
    },
    911: {
        cpaCodeFullName: 'Account Frozen',
        cpaCodeAbbreviationEnglish: 'FZN',
        cpaCodeAbbreviationFrench: 'BLQ'
    },
    912: {
        cpaCodeFullName: 'Invalid/Incorrect Account Number',
        cpaCodeAbbreviationEnglish: 'INA',
        cpaCodeAbbreviationFrench: 'INV'
    },
    914: {
        cpaCodeFullName: 'Incorrect Payor/Payee Name',
        cpaCodeAbbreviationEnglish: 'INP',
        cpaCodeAbbreviationFrench: 'NOM'
    }
};
export const cpaReturnCodesCustomerInitiated = {
    915: {
        cpaCodeFullName: 'No Agreement Existed',
        cpaCodeAbbreviationEnglish: 'ANP',
        cpaCodeAbbreviationFrench: 'NOG'
    },
    916: {
        cpaCodeFullName: 'Not According to Agreement - Personal',
        cpaCodeAbbreviationEnglish: 'NCA',
        cpaCodeAbbreviationFrench: 'ACP'
    },
    917: {
        cpaCodeFullName: 'Agreement Revoked - Personal',
        cpaCodeAbbreviationEnglish: 'ARP',
        cpaCodeAbbreviationFrench: 'AGP'
    },
    918: {
        cpaCodeFullName: 'No Confirmation/Pre-Notification - Personal',
        cpaCodeAbbreviationEnglish: 'PNP',
        cpaCodeAbbreviationFrench: 'PRP'
    },
    919: {
        cpaCodeFullName: 'Not According to Agreement - Business',
        cpaCodeAbbreviationEnglish: 'NCE',
        cpaCodeAbbreviationFrench: 'ACB'
    },
    920: {
        cpaCodeFullName: 'Agreement Revoked - Business',
        cpaCodeAbbreviationEnglish: 'ARE',
        cpaCodeAbbreviationFrench: 'AGB'
    },
    921: {
        cpaCodeFullName: 'No Confirmation/Pre-Notification - Business',
        cpaCodeAbbreviationEnglish: 'PNE',
        cpaCodeAbbreviationFrench: 'PRB'
    }
};
export const cpaReturnCodesCreditReturn = {
    922: {
        cpaCodeFullName: 'Customer Initiated Return',
        cpaCodeAbbreviationEnglish: 'REC',
        cpaCodeAbbreviationFrench: 'CIR'
    }
};
export const cpaReturnCodesDefault = {
    990: {
        cpaCodeFullName: 'Institution in Default',
        cpaCodeAbbreviationEnglish: 'DEF',
        cpaCodeAbbreviationFrench: 'DEF'
    }
};
export const cpaReturnCodes = Object.assign({}, cpaReturnCodesDishonoured, cpaReturnCodesCustomerInitiated, cpaReturnCodesCreditReturn, cpaReturnCodesDefault);
export function getCPAReturnCodeCategory(cpaCode) {
    return _getCodeCategory(cpaReturnCodeCategories, cpaCode);
}
export function isCPAReturnCode(cpaCode) {
    return Object.hasOwn(cpaReturnCodes, cpaCode);
}
export function getCPAReturnCode(cpaCode) {
    return cpaReturnCodes[cpaCode];
}
export function getCPAReturnCodesByAbbreviation(cpaCodeAbbreviation) {
    return _getCodesByAbbreviation(Object.values(cpaReturnCodes), cpaCodeAbbreviation.toUpperCase());
}
