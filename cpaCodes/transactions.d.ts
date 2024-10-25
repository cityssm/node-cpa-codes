import type { CPACode, CPACodeCategory, CPACodeString } from '../types.js';
export declare const cpaTransactionCodeCategories: CPACodeCategory[];
export declare const cpaTransactionCodes: Record<CPACodeString, CPACode>;
/**
 * Retrieves the CPA transaction code category object.
 * @param cpaCode - A CPA code.
 * @returns The CPA code category object, when available.
 */
export declare function getCPATransactionCodeCategoryByCode(cpaCode: string): CPACodeCategory | undefined;
/**
 * Tests if a CPA code corresponds to a CPA transaction code.
 * @param cpaCode - A possible CPA code.
 * @returns `true` when the CPA code is a valid CPA transaction code.
 */
export declare function isCPATransactionCode(cpaCode: string): boolean;
/**
 * Retrieves a CPA transaction code object.
 * @param cpaCode - A CPA code.
 * @returns The CPA code object, when available.
 */
export declare function getCPATransactionCode(cpaCode: string): CPACode | undefined;
/**
 * Retrieves a list of CPA transaction code objects that correspond to a given abbreviation.
 * @param cpaCodeAbbreviation - A two or three letter CPA code abbreviation.
 * @returns A list of CPA code objects.
 */
export declare function getCPATransactionCodesByAbbreviation(cpaCodeAbbreviation: string): CPACode[];
export { cpaTransactionCodesCommercial } from './transactions/commercial.js';
export { cpaTransactionCodesFederal } from './transactions/federal.js';
export { cpaTransactionCodesPreauthorized } from './transactions/preauthorized.js';
export { cpaTransactionCodesProvincialLocal } from './transactions/provincialLocal.js';
