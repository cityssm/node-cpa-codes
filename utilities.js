/**
 * Checks if a string is meets the CPA code format.
 * @param cpaCode - A CPA code.
 * @returns - True when the string validates to the CPA code format.
 */
export function _validateCPACodeStringFormat(cpaCode) {
    return /^\d{3}$/.test(cpaCode);
}
/**
 * Retrieves a category object from a given list.
 * @param categoryList - A list of CPA code category objects.
 * @param cpaCode - A CPA code.
 * @returns - A CPA code category object.
 */
export function _getCodeCategory(categoryList, cpaCode) {
    if (!_validateCPACodeStringFormat(cpaCode)) {
        return undefined;
    }
    return categoryList.find((possibleCategory) => {
        return (cpaCode >= possibleCategory.cpaCodeMin &&
            cpaCode <= possibleCategory.cpaCodeMax);
    });
}
/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param codeList - A list of CPA code objects.
 * @param cpaCodeAbbreviation - A CPA code abbreviation, English or French.
 * @returns - A filtered list of CPA code objects.
 */
export function _getCodesByAbbreviation(codeList, cpaCodeAbbreviation) {
    const upperCaseCpaCodeAbbreviation = cpaCodeAbbreviation.toUpperCase();
    return codeList.filter((possibleCode) => {
        return (upperCaseCpaCodeAbbreviation ===
            possibleCode.cpaCodeAbbreviationEnglish ||
            upperCaseCpaCodeAbbreviation === possibleCode.cpaCodeAbbreviationFrench);
    });
}
