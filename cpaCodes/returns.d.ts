import type { CPACode, CPACodeCategory, CPACodeString } from '../types.js';
export declare const cpaReturnCodeCategories: CPACodeCategory[];
export declare const cpaReturnCodesDishonoured: Record<CPACodeString, CPACode>;
export declare const cpaReturnCodesCustomerInitiated: Record<CPACodeString, CPACode>;
export declare const cpaReturnCodesCreditReturn: Record<CPACodeString, CPACode>;
export declare const cpaReturnCodesDefault: Record<CPACodeString, CPACode>;
export declare const cpaReturnCodes: Record<CPACodeString, CPACode>;
/**
 * Retrieves the CPA return code category object.
 * @param cpaCode - A CPA code.
 * @returns The CPA code category object, when available.
 */
export declare function getCPAReturnCodeCategoryByCode(cpaCode: string): CPACodeCategory | undefined;
/**
 * Tests if a CPA code corresponds to a CPA return code.
 * @param cpaCode - A possible CPA code.
 * @returns `true` when the CPA code is a valid CPA return code.
 */
export declare function isCPAReturnCode(cpaCode: string): boolean;
/**
 * Retrieves a CPA return code object.
 * @param cpaCode - A CPA code.
 * @returns The CPA Code object, when available.
 */
export declare function getCPAReturnCode(cpaCode: string): CPACode | undefined;
/**
 * Retrieves a list of CPA return code objects that correspond to a given abbreviation.
 * @param cpaCodeAbbreviation - A two or three letter CPA code abbreviation.
 * @returns A list of CPA code objects.
 */
export declare function getCPAReturnCodesByAbbreviation(cpaCodeAbbreviation: string): CPACode[];
