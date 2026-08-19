import type { CPACode, CPACodeCategory, CPACodeString } from '../types.js'
import {
  _getCodeCategory,
  _getCodesByAbbreviation,
  _validateCPACodeStringFormat
} from '../utilities.js'

export const cpaReturnCodeCategories: CPACodeCategory[] = [
  {
    cpaCodeCategory: 'FI Dishonoured Transaction',
    cpaCodeMax: '914',
    cpaCodeMin: '900'
  },
  {
    cpaCodeCategory: 'Customer Initiated Returns',
    cpaCodeMax: '921',
    cpaCodeMin: '915'
  },
  {
    cpaCodeCategory: 'Credit Return',
    cpaCodeMax: '922',
    cpaCodeMin: '922'
  },
  {
    cpaCodeCategory: 'Default',
    cpaCodeMax: '990',
    cpaCodeMin: '990'
  }
]

export const cpaReturnCodesDishonoured: Record<CPACodeString, CPACode> = {
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
}

export const cpaReturnCodesCustomerInitiated: Record<CPACodeString, CPACode> = {
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
}

export const cpaReturnCodesCreditReturn: Record<CPACodeString, CPACode> = {
  922: {
    cpaCodeFullName: 'Customer Initiated Return',

    cpaCodeAbbreviationEnglish: 'REC',
    cpaCodeAbbreviationFrench: 'CIR'
  }
}

export const cpaReturnCodesDefault: Record<CPACodeString, CPACode> = {
  990: {
    cpaCodeFullName: 'Institution in Default',

    cpaCodeAbbreviationEnglish: 'DEF',
    cpaCodeAbbreviationFrench: 'DEF'
  }
}

export const cpaReturnCodes: Record<CPACodeString, CPACode> = {
  ...cpaReturnCodesDishonoured,
  ...cpaReturnCodesCustomerInitiated,
  ...cpaReturnCodesCreditReturn,
  ...cpaReturnCodesDefault
}

/**
 * Retrieves the CPA return code category object.
 * @param cpaCode - A CPA code.
 * @returns The CPA code category object, when available.
 */
export function getCPAReturnCodeCategoryByCode(
  cpaCode: string
): CPACodeCategory | undefined {
  return _getCodeCategory(cpaReturnCodeCategories, cpaCode)
}

/**
 * Tests if a CPA code corresponds to a CPA return code.
 * @param cpaCode - A possible CPA code.
 * @returns `true` when the CPA code is a valid CPA return code.
 */
export function isCPAReturnCode(cpaCode: string): boolean {
  return Object.hasOwn(cpaReturnCodes, cpaCode)
}

/**
 * Retrieves a CPA return code object.
 * @param cpaCode - A CPA code.
 * @returns The CPA Code object, when available.
 */
export function getCPAReturnCode(cpaCode: string): CPACode | undefined {
  if (!_validateCPACodeStringFormat(cpaCode)) {
    return undefined
  }

  return cpaReturnCodes[cpaCode]
}

/**
 * Retrieves a list of CPA return code objects that correspond to a given abbreviation.
 * @param cpaCodeAbbreviation - A two or three letter CPA code abbreviation.
 * @returns A list of CPA code objects.
 */
export function getCPAReturnCodesByAbbreviation(
  cpaCodeAbbreviation: string
): CPACode[] {
  return _getCodesByAbbreviation(
    Object.values(cpaReturnCodes),
    cpaCodeAbbreviation
  )
}
