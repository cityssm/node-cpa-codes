import {
  getCPAReturnCode,
  getCPAReturnCodeCategoryByCode,
  getCPAReturnCodesByAbbreviation,
  isCPAReturnCode
} from './cpaCodes/returns.js'
import {
  getCPATransactionCode,
  getCPATransactionCodeCategoryByCode,
  getCPATransactionCodesByAbbreviation,
  isCPATransactionCode
} from './cpaCodes/transactions.js'
import type { CPACode, CPACodeCategory } from './types.js'

/**
 * Retrieves the CPA code category object.
 * @param {string} cpaCode - A CPA code.
 * @returns {object | undefined} - The CPA code category object, when available.
 */
export function getCPACodeCategoryByCode(
  cpaCode: string
): CPACodeCategory | undefined {
  return (
    getCPATransactionCodeCategoryByCode(cpaCode) ??
    getCPAReturnCodeCategoryByCode(cpaCode)
  )
}

/**
 * Tests if a CPA code is valid.
 * @param {string} cpaCode - A possible CPA code.
 * @returns {boolean} - True when the CPA code is valid.
 */
export function isCPACode(cpaCode: string): boolean {
  return isCPATransactionCode(cpaCode) || isCPAReturnCode(cpaCode)
}

/**
 * Retrieves a CPA code object.
 * @param {string} cpaCode - A CPA code.
 * @returns {object | undefined} - The CPA Code object, when available.
 */
export function getCPACode(cpaCode: string): CPACode | undefined {
  return getCPATransactionCode(cpaCode) ?? getCPAReturnCode(cpaCode)
}

/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param {string} cpaCodeAbbreviation - A two or three letter CPA code abbreviation.
 * @returns {object[]} - A list of CPA code objects.
 */
export function getCPACodesByAbbreviation(
  cpaCodeAbbreviation: string
): CPACode[] {
  const cpaCodes = getCPATransactionCodesByAbbreviation(cpaCodeAbbreviation)
  cpaCodes.push(...getCPAReturnCodesByAbbreviation(cpaCodeAbbreviation))

  return cpaCodes
}

export {
  cpaTransactionCodeCategories,
  cpaTransactionCodes,
  cpaTransactionCodesCommercial,
  cpaTransactionCodesFederal,
  cpaTransactionCodesPreauthorized,
  cpaTransactionCodesProvincialLocal,
  getCPATransactionCodeCategoryByCode,
  getCPATransactionCode,
  getCPATransactionCodesByAbbreviation,
  isCPATransactionCode
} from './cpaCodes/transactions.js'

export {
  cpaReturnCodeCategories,
  cpaReturnCodes,
  cpaReturnCodesCreditReturn,
  cpaReturnCodesDishonoured,
  cpaReturnCodesCustomerInitiated,
  cpaReturnCodesDefault,
  getCPAReturnCodeCategoryByCode,
  getCPAReturnCode,
  getCPAReturnCodesByAbbreviation,
  isCPAReturnCode
} from './cpaCodes/returns.js'

export type { CPACodeCategory, CPACode } from './types.js'
