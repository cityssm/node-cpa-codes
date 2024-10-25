import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getCPACode, getCPACodeCategoryByCode, getCPACodesByAbbreviation, isCPACode } from '../index.js';
const validCpaCodes = ['200', '300', '400', '600', '701', '900'];
const invalidCpaCodes = ['0', '1000', 'abc'];
await describe('cityssm/cpa-codes', async () => {
    await describe('isCPACode()', async () => {
        await it('Verifies valid CPA codes', () => {
            for (const validCpaCode of validCpaCodes) {
                assert.ok(isCPACode(validCpaCode));
            }
        });
        await it('Denies invalid CPA codes', () => {
            for (const invalidCpaCode of invalidCpaCodes) {
                assert.ok(!isCPACode(invalidCpaCode));
            }
        });
    });
    await describe('getCPACodeCategoryByCode()', async () => {
        await it('Retrieves CPA categories for valid CPA codes', () => {
            for (const validCpaCode of validCpaCodes) {
                const cpaCategory = getCPACodeCategoryByCode(validCpaCode);
                assert(cpaCategory !== undefined);
                assert.ok(validCpaCode >= cpaCategory.cpaCodeMin);
                assert.ok(validCpaCode <= cpaCategory.cpaCodeMax);
            }
        });
        await it('Returns undefined for invalid CPA codes', () => {
            for (const invalidCpaCode of invalidCpaCodes) {
                assert(getCPACodeCategoryByCode(invalidCpaCode) === undefined);
            }
        });
    });
    await describe('getCPACode()', async () => {
        await it('Verifies valid CPA codes', () => {
            for (const validCpaCode of validCpaCodes) {
                assert(getCPACode(validCpaCode) !== undefined);
            }
        });
        await it('Denies invalid CPA codes', () => {
            for (const invalidCpaCode of invalidCpaCodes) {
                assert(getCPACode(invalidCpaCode) === undefined);
            }
        });
    });
    await describe('getCPACodesByAbbreviation()', async () => {
        await it('Returns a list of CPA code objects', () => {
            const abbreviation = 'TAX';
            const cpaCodes = getCPACodesByAbbreviation(abbreviation);
            for (const code of cpaCodes) {
                assert.ok(code.cpaCodeAbbreviationEnglish === abbreviation ||
                    code.cpaCodeAbbreviationFrench === abbreviation);
            }
        });
    });
});
