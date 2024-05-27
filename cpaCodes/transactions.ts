import type { CPACode, CPACodeCategory, CPACodeString } from '../types.js'
import { _getCodeCategory, _getCodesByAbbreviation } from '../utilities.js'

import {
  cpaTransactionCodeCategoryCommerical,
  cpaTransactionCodesCommercial
} from './transactions/commercial.js'
import {
  cpaTransactionCodeCategoryFederal,
  cpaTransactionCodesFederal
} from './transactions/federal.js'
import {
  cpaTransactionCodeCategoryPreauthorized,
  cpaTransactionCodeCategoryPreauthorizedContinued,
  cpaTransactionCodesPreauthorized
} from './transactions/preauthorized.js'
import {
  cpaTransactionCodeCategoryProvincialLocal,
  cpaTransactionCodesProvincialLocal
} from './transactions/provincialLocal.js'

export const cpaTransactionCodeCategories: CPACodeCategory[] = [
  {
    cpaCodeMin: '000',
    cpaCodeMax: '149',
    cpaCodeCategory: 'Future Use'
  },
  {
    cpaCodeMin: '150',
    cpaCodeMax: '199',
    cpaCodeCategory: 'Clearing Items'
  },
  cpaTransactionCodeCategoryPreauthorized,
  cpaTransactionCodeCategoryFederal,
  cpaTransactionCodeCategoryPreauthorizedContinued,
  cpaTransactionCodeCategoryProvincialLocal,
  {
    cpaCodeMin: '621',
    cpaCodeMax: '649',
    cpaCodeCategory: 'Unassigned'
  },
  {
    cpaCodeMin: '651',
    cpaCodeMax: '699',
    cpaCodeCategory: 'Unassigned'
  },
  cpaTransactionCodeCategoryCommerical,
  {
    cpaCodeMin: '750',
    cpaCodeMax: '899',
    cpaCodeCategory: 'Internal Direct Clearer Use'
  }
]

export const cpaTransactionCodes: Record<CPACodeString, CPACode> =
  Object.assign(
    {},
    cpaTransactionCodesPreauthorized,
    cpaTransactionCodesFederal,
    cpaTransactionCodesProvincialLocal,
    cpaTransactionCodesCommercial
  )

/**
 * Retrieves the CPA transaction code category object.
 * @param cpaCode - A CPA code.
 * @returns - The CPA code category object, when available.
 */
export function getCPATransactionCodeCategoryByCode(
  cpaCode: string
): CPACodeCategory | undefined {
  return _getCodeCategory(cpaTransactionCodeCategories, cpaCode)
}

/**
 * Tests if a CPA code corresponds to a CPA transaction code.
 * @param cpaCode - A possible CPA code.
 * @returns - True when the CPA code is a valid CPA transaction code.
 */
export function isCPATransactionCode(cpaCode: string): boolean {
  return Object.hasOwn(cpaTransactionCodes, cpaCode)
}

/**
 * Retrieves a CPA transaction code object.
 * @param cpaCode - A CPA code.
 * @returns - The CPA code object, when available.
 */
export function getCPATransactionCode(cpaCode: string): CPACode | undefined {
  // eslint-disable-next-line security/detect-object-injection
  return cpaTransactionCodes[cpaCode]
}

/**
 * Retrieves a list of CPA transaction code objects that correspond to a given abbreviation.
 * @param cpaCodeAbbreviation - A two or three letter CPA code abbreviation.
 * @returns - A list of CPA code objects.
 */
export function getCPATransactionCodesByAbbreviation(
  cpaCodeAbbreviation: string
): CPACode[] {
  return _getCodesByAbbreviation(
    Object.values(cpaTransactionCodes),
    cpaCodeAbbreviation
  )
}

export { cpaTransactionCodesCommercial } from './transactions/commercial.js'
export { cpaTransactionCodesFederal } from './transactions/federal.js'
export { cpaTransactionCodesPreauthorized } from './transactions/preauthorized.js'
export { cpaTransactionCodesProvincialLocal } from './transactions/provincialLocal.js'
