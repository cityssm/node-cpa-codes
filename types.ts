export type CPACodeString = `${number}`

export interface CPACodeCategory {
  cpaCodeCategory: string
  cpaCodeMax: CPACodeString
  cpaCodeMin: CPACodeString
}

export interface CPACode {
  cpaCodeFullName: string
  
  cpaCodeAbbreviationEnglish: string
  cpaCodeAbbreviationFrench: string
}
