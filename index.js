import { getCPAReturnCode, getCPAReturnCodeCategoryByCode, getCPAReturnCodesByAbbreviation, isCPAReturnCode } from './cpaCodes/returns.js';
import { getCPATransactionCode, getCPATransactionCodeCategoryByCode, getCPATransactionCodesByAbbreviation, isCPATransactionCode } from './cpaCodes/transactions.js';
/**
 * Retrieves the CPA code category object.
 * @param cpaCode - A CPA code.
 * @returns - The CPA code category object, when available.
 */
export function getCPACodeCategoryByCode(cpaCode) {
    return (getCPATransactionCodeCategoryByCode(cpaCode) ??
        getCPAReturnCodeCategoryByCode(cpaCode));
}
/**
 * Tests if a CPA code is valid.
 * @param cpaCode - A possible CPA code.
 * @returns - True when the CPA code is valid.
 */
export function isCPACode(cpaCode) {
    return isCPATransactionCode(cpaCode) || isCPAReturnCode(cpaCode);
}
/**
 * Retrieves a CPA code object.
 * @param cpaCode - A CPA code.
 * @returns - The CPA Code object, when available.
 */
export function getCPACode(cpaCode) {
    return getCPATransactionCode(cpaCode) ?? getCPAReturnCode(cpaCode);
}
/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param cpaCodeAbbreviation - A two or three letter CPA code abbreviation.
 * @returns - A list of CPA code objects.
 */
export function getCPACodesByAbbreviation(cpaCodeAbbreviation) {
    const cpaCodes = getCPATransactionCodesByAbbreviation(cpaCodeAbbreviation);
    cpaCodes.push(...getCPAReturnCodesByAbbreviation(cpaCodeAbbreviation));
    return cpaCodes;
}
export { cpaTransactionCodeCategories, cpaTransactionCodes, cpaTransactionCodesCommercial, cpaTransactionCodesFederal, cpaTransactionCodesPreauthorized, cpaTransactionCodesProvincialLocal, getCPATransactionCodeCategoryByCode, getCPATransactionCode, getCPATransactionCodesByAbbreviation, isCPATransactionCode } from './cpaCodes/transactions.js';
export { cpaReturnCodeCategories, cpaReturnCodes, cpaReturnCodesCreditReturn, cpaReturnCodesDishonoured, cpaReturnCodesCustomerInitiated, cpaReturnCodesDefault, getCPAReturnCodeCategoryByCode, getCPAReturnCode, getCPAReturnCodesByAbbreviation, isCPAReturnCode } from './cpaCodes/returns.js';
