import type { CPACode, CPACodeCategory } from './types.js'

function _validateCodeFormat(cpaCode: string): boolean {
  return /^\d{3}$/.test(cpaCode)
}

/**
 * Retrieves a category object from a given list.
 * @param categoryList - A list of CPA code category objects.
 * @param cpaCode - A CPA code.
 * @returns - A CPA code category object.
 */
export function _getCodeCategory(
  categoryList: CPACodeCategory[],
  cpaCode: string
): CPACodeCategory | undefined {
  if (!_validateCodeFormat(cpaCode)) {
    return undefined
  }

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
 * @param cpaCodeAbbreviation - A CPA code abbreviation, English or French.
 * @returns - A filtered list of CPA code objects.
 */
export function _getCodesByAbbreviation(
  codeList: CPACode[],
  cpaCodeAbbreviation: string
): CPACode[] {
  const upperCaseCpaCodeAbbreviation = cpaCodeAbbreviation.toUpperCase()

  return codeList.filter((possibleCode) => {
    return (
      upperCaseCpaCodeAbbreviation ===
        possibleCode.cpaCodeAbbreviationEnglish ||
      upperCaseCpaCodeAbbreviation === possibleCode.cpaCodeAbbreviationFrench
    )
  })
}
