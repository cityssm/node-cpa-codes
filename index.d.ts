import type { CPACode, CPACodeCategory } from './types.js';
export declare function getCPACodeCategory(cpaCode: string): CPACodeCategory | undefined;
export declare function isCPACode(cpaCode: string): boolean;
export declare function getCPACode(cpaCode: string): CPACode | undefined;
export { cpaTransactionCodeCategories, cpaTransactionCodes, cpaTransactionCodesCommercial, cpaTransactionCodesFederal, cpaTransactionCodesPreauthorized, cpaTransactionCodesProvincialLocal, getCPATransactionCodeCategory, getCPATransactionCode, getCPATransactionCodesByAbbreviation, isCPATransactionCode } from './cpaCodes/transactions.js';
export { cpaReturnCodeCategories, cpaReturnCodes, cpaReturnCodesCreditReturn, cpaReturnCodesDishonoured, cpaReturnCodesCustomerInitiated, cpaReturnCodesDefault, getCPAReturnCodeCategory, getCPAReturnCode, getCPAReturnCodesByAbbreviation, isCPAReturnCode } from './cpaCodes/returns.js';
export type { CPACodeCategory, CPACode } from './types.js';
