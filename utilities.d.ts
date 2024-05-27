import type { CPACode, CPACodeCategory } from './types.js';
/**
 * Retrieves a category object from a given list.
 * @param categoryList - A list of CPA code category objects.
 * @param cpaCode - A CPA code.
 * @returns - A CPA code category object.
 */
export declare function _getCodeCategory(categoryList: CPACodeCategory[], cpaCode: string): CPACodeCategory | undefined;
/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param codeList - A list of CPA code objects.
 * @param cpaCodeAbbreviation - A CPA code abbreviation, English or French.
 * @returns - A filtered list of CPA code objects.
 */
export declare function _getCodesByAbbreviation(codeList: CPACode[], cpaCodeAbbreviation: string): CPACode[];
