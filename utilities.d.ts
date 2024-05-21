import type { CPACode, CPACodeCategory } from './types';
/**
 * Retrieves a category object from a given list.
 * @param {object[]} categoryList - A list of CPA code category objects.
 * @param {string} cpaCode - A CPA code.
 * @returns {object | undefined} - A CPA code category object.
 */
export declare function _getCodeCategory(categoryList: CPACodeCategory[], cpaCode: string): CPACodeCategory | undefined;
/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param {object[]} codeList - A list of CPA code objects.
 * @param {string} cpaCodeAbbreviation - A CPA code abbreviation, English or French.
 * @returns {object[]} - A filtered list of CPA code objects.
 */
export declare function _getCodesByAbbreviation(codeList: CPACode[], cpaCodeAbbreviation: string): CPACode[];
