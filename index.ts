import {
  getCPAReturnCode,
  getCPAReturnCodeCategory,
  isCPAReturnCode
} from './cpaCodes/returns.js'
import {
  getCPATransactionCode,
  getCPATransactionCodeCategory,
  isCPATransactionCode
} from './cpaCodes/transactions.js'
import type { CPACode, CPACodeCategory } from './types.js'

/**
 * Retrieves the CPA code category object.
 * @param {string} cpaCode - A CPA code.
 * @returns {CPACodeCategory | undefined} - The CPA code category object, when available.
 */
export function getCPACodeCategory(
  cpaCode: string
): CPACodeCategory | undefined {
  return (
    getCPATransactionCodeCategory(cpaCode) ?? getCPAReturnCodeCategory(cpaCode)
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
 * @returns {CPACode | undefined} - The CPA Code object, when available.
 */
export function getCPACode(cpaCode: string): CPACode | undefined {
  return getCPATransactionCode(cpaCode) ?? getCPAReturnCode(cpaCode)
}

export {
  cpaTransactionCodeCategories,
  cpaTransactionCodes,
  cpaTransactionCodesCommercial,
  cpaTransactionCodesFederal,
  cpaTransactionCodesPreauthorized,
  cpaTransactionCodesProvincialLocal,
  getCPATransactionCodeCategory,
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
  getCPAReturnCodeCategory,
  getCPAReturnCode,
  getCPAReturnCodesByAbbreviation,
  isCPAReturnCode
} from './cpaCodes/returns.js'

export type { CPACodeCategory, CPACode } from './types.js'
