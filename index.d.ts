import type { CPACode, CPACodeCategory } from './types.js';
/**
 * Retrieves the CPA code category object.
 * @param cpaCode - A CPA code.
 * @returns The CPA code category object, when available.
 */
export declare function getCPACodeCategoryByCode(cpaCode: string): CPACodeCategory | undefined;
/**
 * Tests if a CPA code is valid.
 * @param cpaCode - A possible CPA code.
 * @returns `true` when the CPA code is valid.
 */
export declare function isCPACode(cpaCode: string): boolean;
/**
 * Retrieves a CPA code object.
 * @param cpaCode - A CPA code.
 * @returns The CPA Code object, when available.
 */
export declare function getCPACode(cpaCode: string): CPACode | undefined;
/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param cpaCodeAbbreviation - A two or three letter CPA code abbreviation.
 * @returns A list of CPA code objects.
 */
export declare function getCPACodesByAbbreviation(cpaCodeAbbreviation: string): CPACode[];
export { cpaReturnCodeCategories, cpaReturnCodes, cpaReturnCodesCreditReturn, cpaReturnCodesCustomerInitiated, cpaReturnCodesDefault, cpaReturnCodesDishonoured, getCPAReturnCode, getCPAReturnCodeCategoryByCode, getCPAReturnCodesByAbbreviation, isCPAReturnCode } from './cpaCodes/returns.js';
export { cpaTransactionCodeCategories, cpaTransactionCodes, cpaTransactionCodesCommercial, cpaTransactionCodesFederal, cpaTransactionCodesPreauthorized, cpaTransactionCodesProvincialLocal, getCPATransactionCode, getCPATransactionCodeCategoryByCode, getCPATransactionCodesByAbbreviation, isCPATransactionCode } from './cpaCodes/transactions.js';
export type { CPACode, CPACodeCategory } from './types.js';
