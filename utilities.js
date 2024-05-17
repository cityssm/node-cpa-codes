function _validateCodeFormat(cpaCode) {
    return /^\d{3}$/.test(cpaCode);
}
export function _getCodeCategory(categoryList, cpaCode) {
    if (!_validateCodeFormat(cpaCode)) {
        return undefined;
    }
    return categoryList.find((possibleCategory) => {
        return (cpaCode >= possibleCategory.cpaCodeMin &&
            cpaCode <= possibleCategory.cpaCodeMax);
    });
}
export function _getCodesByAbbreviation(codeList, cpaCodeAbbreviation) {
    const upperCaseCpaCodeAbbreviation = cpaCodeAbbreviation.toUpperCase();
    return codeList.filter((possibleCode) => {
        return (upperCaseCpaCodeAbbreviation ===
            possibleCode.cpaCodeAbbreviationEnglish ||
            upperCaseCpaCodeAbbreviation === possibleCode.cpaCodeAbbreviationFrench);
    });
}
