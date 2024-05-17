export type CPACodeString = `${number}`;
export interface CPACodeCategory {
    cpaCodeMin: CPACodeString;
    cpaCodeMax: CPACodeString;
    cpaCodeCategory: string;
}
export interface CPACode {
    cpaCodeFullName: string;
    cpaCodeAbbreviationEnglish: string;
    cpaCodeAbbreviationFrench: string;
}
