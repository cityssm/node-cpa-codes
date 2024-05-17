import { _getCodeCategory, _getCodesByAbbreviation } from '../utilities.js';
import { cpaTransactionCodeCategoryCommerical, cpaTransactionCodesCommercial } from './transactions/commercial.js';
import { cpaTransactionCodeCategoryFederal, cpaTransactionCodesFederal } from './transactions/federal.js';
import { cpaTransactionCodeCategoryPreauthorized, cpaTransactionCodeCategoryPreauthorizedContinued, cpaTransactionCodesPreauthorized } from './transactions/preauthorized.js';
import { cpaTransactionCodeCategoryProvincialLocal, cpaTransactionCodesProvincialLocal } from './transactions/provincialLocal.js';
export const cpaTransactionCodeCategories = [
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
];
export const cpaTransactionCodes = Object.assign({}, cpaTransactionCodesPreauthorized, cpaTransactionCodesFederal, cpaTransactionCodesProvincialLocal, cpaTransactionCodesCommercial);
export function getCPATransactionCodeCategory(cpaCode) {
    return _getCodeCategory(cpaTransactionCodeCategories, cpaCode);
}
export function isCPATransactionCode(cpaCode) {
    return Object.hasOwn(cpaTransactionCodes, cpaCode);
}
export function getCPATransactionCode(cpaCode) {
    return cpaTransactionCodes[cpaCode];
}
export function getCPATransactionCodesByAbbreviation(cpaCodeAbbreviation) {
    return _getCodesByAbbreviation(Object.values(cpaTransactionCodes), cpaCodeAbbreviation.toUpperCase());
}
export { cpaTransactionCodesCommercial } from './transactions/commercial.js';
export { cpaTransactionCodesFederal } from './transactions/federal.js';
export { cpaTransactionCodesPreauthorized } from './transactions/preauthorized.js';
export { cpaTransactionCodesProvincialLocal } from './transactions/provincialLocal.js';
