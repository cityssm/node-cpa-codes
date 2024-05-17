import { getCPAReturnCode, getCPAReturnCodeCategory, isCPAReturnCode } from './cpaCodes/returns.js';
import { getCPATransactionCode, getCPATransactionCodeCategory, isCPATransactionCode } from './cpaCodes/transactions.js';
export function getCPACodeCategory(cpaCode) {
    return (getCPATransactionCodeCategory(cpaCode) ?? getCPAReturnCodeCategory(cpaCode));
}
export function isCPACode(cpaCode) {
    return isCPATransactionCode(cpaCode) || isCPAReturnCode(cpaCode);
}
export function getCPACode(cpaCode) {
    return getCPATransactionCode(cpaCode) ?? getCPAReturnCode(cpaCode);
}
export { cpaTransactionCodeCategories, cpaTransactionCodes, cpaTransactionCodesCommercial, cpaTransactionCodesFederal, cpaTransactionCodesPreauthorized, cpaTransactionCodesProvincialLocal, getCPATransactionCodeCategory, getCPATransactionCode, getCPATransactionCodesByAbbreviation, isCPATransactionCode } from './cpaCodes/transactions.js';
export { cpaReturnCodeCategories, cpaReturnCodes, cpaReturnCodesCreditReturn, cpaReturnCodesDishonoured, cpaReturnCodesCustomerInitiated, cpaReturnCodesDefault, getCPAReturnCodeCategory, getCPAReturnCode, getCPAReturnCodesByAbbreviation, isCPAReturnCode } from './cpaCodes/returns.js';
