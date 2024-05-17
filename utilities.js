export function _getCodeCategory(categoryList, cpaCode) {
    return categoryList.find((possibleCategory) => {
        return (cpaCode >= possibleCategory.cpaCodeMin &&
            cpaCode <= possibleCategory.cpaCodeMax);
    });
}
export function _getCodesByAbbreviation(codeList, upperCaseCpaCodeAbbreviation) {
    return codeList.filter((possibleCode) => {
        return (upperCaseCpaCodeAbbreviation ===
            possibleCode.cpaCodeAbbreviationEnglish ||
            upperCaseCpaCodeAbbreviation === possibleCode.cpaCodeAbbreviationFrench);
    });
}
