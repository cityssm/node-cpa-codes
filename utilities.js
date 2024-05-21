function _validateCodeFormat(cpaCode) {
    return /^\d{3}$/.test(cpaCode);
}
/**
 * Retrieves a category object from a given list.
 * @param {object[]} categoryList - A list of CPA code category objects.
 * @param {string} cpaCode - A CPA code.
 * @returns {object | undefined} - A CPA code category object.
 */
export function _getCodeCategory(categoryList, cpaCode) {
    if (!_validateCodeFormat(cpaCode)) {
        return undefined;
    }
    return categoryList.find((possibleCategory) => {
        return (cpaCode >= possibleCategory.cpaCodeMin &&
            cpaCode <= possibleCategory.cpaCodeMax);
    });
}
/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param {object[]} codeList - A list of CPA code objects.
 * @param {string} cpaCodeAbbreviation - A CPA code abbreviation, English or French.
 * @returns {object[]} - A filtered list of CPA code objects.
 */
export function _getCodesByAbbreviation(codeList, cpaCodeAbbreviation) {
    const upperCaseCpaCodeAbbreviation = cpaCodeAbbreviation.toUpperCase();
    return codeList.filter((possibleCode) => {
        return (upperCaseCpaCodeAbbreviation ===
            possibleCode.cpaCodeAbbreviationEnglish ||
            upperCaseCpaCodeAbbreviation === possibleCode.cpaCodeAbbreviationFrench);
    });
}
