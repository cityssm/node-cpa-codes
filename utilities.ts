import type { CPACode, CPACodeCategory } from './types'

/**
 * Retrieves a category object from a given list.
 * @param {CPACodeCategory[]} categoryList - A list of CPA code category objects.
 * @param {string} cpaCode - A CPA code.
 * @returns {CPACodeCategory | undefined} - A CPA code category object.
 */
export function _getCodeCategory(
  categoryList: CPACodeCategory[],
  cpaCode: string
): CPACodeCategory | undefined {
  return categoryList.find((possibleCategory) => {
    return (
      cpaCode >= possibleCategory.cpaCodeMin &&
      cpaCode <= possibleCategory.cpaCodeMax
    )
  })
}

/**
 * Retrieves a list of CPA code objects that correspond to a given abbreviation.
 * @param codeList - A list of CPA code objects.
 * @param upperCaseCpaCodeAbbreviation - A CPA code abbreviation, English or French.
 * @returns {CPACode[]} - A filtered list of CPA code objects.
 */
export function _getCodesByAbbreviation(
  codeList: CPACode[],
  upperCaseCpaCodeAbbreviation: string
): CPACode[] {
  return codeList.filter((possibleCode) => {
    return (
      upperCaseCpaCodeAbbreviation ===
        possibleCode.cpaCodeAbbreviationEnglish ||
      upperCaseCpaCodeAbbreviation === possibleCode.cpaCodeAbbreviationFrench
    )
  })
}
